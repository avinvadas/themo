/**
 * Main application file for color theme management and UI interactions
 * Handles color calculations, UI updates, and user interactions
 * Dependencies: colorUtils.js, colorManager.js, uiManager.js
 */

import ColorManager from './js/colorManager.js';
import * as colorUtils from './js/colorUtils.js';
import { ScalesRow, GeneralColorRow, IndicationRow } from './js/colorPalette.js';
import { ScaleGroup, HarmonyGroup } from './js/ColorGroup.js';
import { uiManager, copyTimeouts, createCopyIcon, createCheckIcon } from './js/uiManager.js';
import {
    HARMONY_ICONS, HARMONY_TO_HUE, HUE_TO_HARMONY,
    iconSvgFullCircle as iconSvgFullCircle,
    iconSvgNotification as iconSvgNotification,
} from './js/icons.js';

/**
 * State Management
 * Global variables for managing application state
 */

// Color state
let primaryColor;
let secondaryColor;
let tertiaryColor;
let quaternaryColor;
let indicationColors = {}

// UI state
let rows = [];
let rootGroup = null;   // top-level primary/secondary HarmonyGroup
let neutralColor;
let swatchCounter = 0;
let hueDif = 179.5;
let scales = 10;
let lightest = 95;
let darkest = 2;
let isSecondaryInputFocused = false;

// User interaction state
let lastUserChroma = 100;
let lastUserLightness = 70;
let lastPrimaryChroma = 0;
let lastPrimaryLightness = 0;
let initCallCount = 0;

const { Color } = colorUtils;
const colorManager = new ColorManager();

/**
 * Observer Pattern Implementation
 * Handles updates to color states and UI synchronization
 */

const secondaryColorObserver = {
    update(data) {
        const { secondaryColor } = data;
        if (secondaryColor) {
            const secondarySwatch = document.querySelector('#secondary-color .color-ticker');
            if (secondarySwatch) {
                const hexColor = secondaryColor.to('srgb').toString({ format: 'hex' });
                secondarySwatch.style.backgroundColor = hexColor;
                secondarySwatch.setAttribute('aria-label', `Secondary color: ${hexColor}`);
            }
        }
    }
};

const tertiaryColorObserver = {
    update({ tertiaryColor: updatedTertiaryColor }) {
        if (updatedTertiaryColor) {
            tertiaryColor = updatedTertiaryColor; // Update the global variable
        }
    }
};

const quaternaryColorObserver = {
    update({ quaternaryColor: updatedQuaternaryColor }) {
        if (updatedQuaternaryColor) {
            quaternaryColor = updatedQuaternaryColor;
            console.log('Quaternary color observer updated:', quaternaryColor.to('srgb').toString({ format: "hex" }));
            updateUIElements();
        }
    }
};

// Add this near the top with other observers
const indicationColorObserver = {
    update(data) {
        const { primaryColor, secondaryColor, indicationColors } = data;
        if (primaryColor && secondaryColor && indicationColors) {
            // Update indication rows
            const types = ['alert', 'warning', 'success', 'info'];
            types.forEach(type => {
                const container = document.getElementById(`indication-scale-${type}`);
                if (container && indicationColors[type]) {
                    const indicationRow = new IndicationRow(indicationColors[type], type);
                    indicationRow.containerId = `indication-scale-${type}`;
                    indicationRow.update(primaryColor, secondaryColor);
                }
            });
        }
    }
};

colorManager.addObserver(secondaryColorObserver);
colorManager.addObserver(tertiaryColorObserver);
colorManager.addObserver(quaternaryColorObserver);
colorManager.addObserver(indicationColorObserver);

// Icon state for the currently selected harmony mode (defaults to complementary):
let [iconLongRange, iconShortRange, iconSplitRange] = HARMONY_ICONS.complementary;
let iconFullRange    = iconSvgFullCircle;
let iconNotification = iconSvgNotification;


   
/* Color management */
function setPrimary(color) {
    primaryColor = new colorUtils.Color(color);
    document.documentElement.style.setProperty('--color-primary', primaryColor.toString({format: "srgb"}));
}

function setNeutral(color) {
    neutralColor = colorUtils.relateColor(
        primaryColor,
        colorUtils.setValue(color.oklch.l, 1),
        colorUtils.setValue(color.oklch.c, 0.05),
        colorUtils.setHue(color.oklch.h || 0, hueDif)
    );
}
function defaultHueDif() {
    // This function should return a default hue difference, adjust as necessary
    return 179;  // Example: Returns a default hue difference of 30 degrees
}

const primaryColorInput = document.getElementById('color-input');
if (primaryColorInput) {
    primaryColorInput.addEventListener('input', handlePrimaryColorInput);
    primaryColorInput.addEventListener('paste', (event) => {
        // Prevent default paste behavior to control the input
        event.preventDefault();

        // Get the pasted text and remove any leading or trailing whitespace
        const pasteData = (event.clipboardData || window.clipboardData).getData('text').trim();

        // Remove any `#` from the pasted text, then prepend a single `#`
        let sanitizedValue = '#' + pasteData.replace(/#/g, '').slice(0, 6);

        // Update the input field and call the handler
        primaryColorInput.value = sanitizedValue;
        handlePrimaryColorInput({ target: primaryColorInput });
    });
}

function initiateColors() {
    const params = new URLSearchParams(window.location.search);

    let primaryLCH;
    let hueDifValue = hueDif; // Default to current hueDif (179.5)

    // Step 1: Load the primaryColor
    if (params.has('primaryColor')) {
        const primaryColorValue = params.get('primaryColor');
        const primaryColorInput = document.getElementById('color-input');
        if (primaryColorInput) {
            primaryColorInput.value = primaryColorValue;
            try {
                primaryLCH = new Color(primaryColorValue).to("oklch");  // Convert hex to OKLCH
                setPrimary(primaryLCH);  // Set primary color
            } catch (error) {
                console.error('Error converting primary color to LCH:', error);
                return;
            }
        }
    } else {
        // Fallback: Generate a random primary color if no query parameter exists
        primaryLCH = colorUtils.generateRandomLCH();  // Generate random LCH color
        setPrimary(primaryLCH);
    }

    // Ensure the primary color is set before proceeding
    if (!primaryLCH) {
        console.error('Primary color (LCH) is not defined. Cannot calculate secondary color.');
        return;
    }

    // Step 2: Load hueDif from URL and sync the dropdown
    if (params.has('hueDif')) {
        const hueDifParam = params.get('hueDif');
        hueDifValue = parseFloat(hueDifParam);
        if (isNaN(hueDifValue) || hueDifValue <= 0 || hueDifValue >= 360) {
            console.error(`Invalid hueDif value: ${hueDifParam}. Falling back to 180.`);
            hueDifValue = 180;
        }
    } else {
        hueDifValue = 180;
    }
    hueDif = hueDifValue;
    syncHueSelectUI(hueDifValue);
    setSecondary(hueDifValue);

    // Step 3: Set chroma and lightness sliders
    const chromaSlider = document.getElementById('chroma-slider');
    const lightnessSlider = document.getElementById('lightness-slider');
    if (chromaSlider && lightnessSlider) {
        if (params.has('chroma')) {
            const chromaValue = params.get('chroma');
            chromaSlider.value = chromaValue;
            lastUserChroma = parseFloat(chromaValue);
        } else {
            chromaSlider.value = lastUserChroma;
        }

        if (params.has('lightness')) {
            const lightnessValue = params.get('lightness');
            lightnessSlider.value = lightnessValue;
            lastUserLightness = parseFloat(lightnessValue);
        } else {
            lightnessSlider.value = lastUserLightness;
        }
    }

    // Step 4: Load the dynamically created chroma toggle state
    const chromaToggle = document.getElementById('chroma-toggle-checkbox');
    if (chromaToggle && params.has('chromaToggle')) {
        chromaToggle.checked = (params.get('chromaToggle') === 'on');
    }

    // After setting chroma and lightness, update the secondary color controls
    updateSecondaryColorControls();

    // Update the rest of the UI
    updateColorProperties();
}


function setSecondary(hueDif) {
    const newHue = colorUtils.setHue(primaryColor.oklch.h || 0, hueDif);
    const newChroma = colorUtils.calculateChroma(primaryColor.oklch.c, hueDif);
    secondaryColor = colorUtils.relateColor(
        primaryColor,
        1 - primaryColor.oklch.l,   // complementary lightness in OKLCH (0–1)
        newChroma,
        newHue
    );
    updateColorProperties();
    return secondaryColor;
}

function updateIndicationColors() {
    indicationColors = {
      alert: colorManager.getIndicationColor("alert"),
      warning: colorManager.getIndicationColor("warning"),
      success: colorManager.getIndicationColor("success"),
      info: colorManager.getIndicationColor("info"),
    }
  
    updateColorDisplay("alert-color", indicationColors.alert)
    updateColorDisplay("warning-color", indicationColors.warning)
    updateColorDisplay("success-color", indicationColors.success)
    updateColorDisplay("info-color", indicationColors.info)
  }

  function updateColorDisplay(elementId, color) {
    const element = document.getElementById(elementId)
    if (element) {
      element.style.backgroundColor = color.to("srgb").toString({ format: "hex" })
      element.textContent = color.to("srgb").toString({ format: "hex" })
    }
  }

function updateColorProperties() {
    document.documentElement.style.setProperty('--color-primary', primaryColor.toString({format: "srgb"}));
    document.documentElement.style.setProperty('--color-secondary', secondaryColor.toString({format: "srgb"}));
    
}

/* Initiation function*/

function init() {
    initCallCount++;
    
    // Check for URL parameters before any initialization
    const params = new URLSearchParams(window.location.search);
    if (params.size > 0) {
        handleURLParameters();
    } else {
        // Only run default initialization if no URL parameters
        initiateColors(); /* initiating system colors */
    }

    /* Continue with normal initialization */
    initializeMainColorInput(); /* Main color input field */
    setupSecondaryColorHandlers(); /* secondary color controls*/
    setupHueSelectionControls(); /* hue harmony tabs */
    updateSecondaryColor(); /* secondary color update */
    setNeutral(primaryColor); /* set neutral color base */
    setupThemeSwitch(); /* UI bright/ dark theme switch */

    /* creating the palettes section */
    const palettesSection = document.querySelector('.palettes-section');
    if (!palettesSection) {
        console.error('Palettes section not found');
        return;
    }

    // Ensure colors are set in ColorManager
    colorManager.setPrimaryColor(primaryColor);
    colorManager.setSecondaryColor(secondaryColor);

    // Root color group — primary + secondary as large swatches
    const rootContainer = document.getElementById('root-color-group');
    if (rootContainer) {
        rootGroup = new HarmonyGroup({
            label: '',
            primaryColor,
            secondaryColor,
            steps: 2,
            huePath: 'shorter',
            harmonyType: snapHarmonyName(hueDif),
            embeddedInput: document.getElementById('color-input'),
        });
        rootGroup.render(rootContainer);
        colorManager.addObserver(rootGroup);
    }

    /* UI controls */
    setupColorHandlers();
    updateUIElements();
}

function handleURLParameters() {
    const params = new URLSearchParams(window.location.search);
    
    try {
        // 1. Set primary color first
        if (params.has('primaryColor')) {
            primaryColor = new Color(params.get('primaryColor')).to('oklch');
            colorManager.setPrimaryColor(primaryColor);
        } else {
            primaryColor = new Color('oklch', [0.5, 0.2, 0]);
            colorManager.setPrimaryColor(primaryColor);
        }

        // 2. Set hueDif before calculating secondary color
        if (params.has('hueDif')) {
            hueDif = parseFloat(params.get('hueDif'));
            syncHueSelectUI(hueDif);
        }

        // 3. Set secondary color parameters
        // Slider values are stored as 0–100; convert to OKLCH (L: /100, C: *0.004)
        if (params.has('chroma') && params.has('lightness')) {
            lastUserChroma = parseInt(params.get('chroma'));
            lastUserLightness = parseInt(params.get('lightness'));

            const newHue = ((primaryColor.oklch.h || 0) + hueDif) % 360;
            secondaryColor = new Color('oklch', [lastUserLightness / 100, lastUserChroma * 0.004, newHue]);
            colorManager.setSecondaryColor(secondaryColor);
        } else {
            secondaryColor = new Color('oklch', [0.7, 0.4, ((primaryColor.oklch.h || 0) + hueDif) % 360]);
            colorManager.setSecondaryColor(secondaryColor);
        }

        // Update UI after all parameters are set
        updateUIElements();

    } catch (error) {
        console.error('Error handling URL parameters:', error);
        primaryColor = new Color('oklch', [0.5, 0.2, 0]);
        secondaryColor = new Color('oklch', [0.7, 0.4, 180]);
        colorManager.setPrimaryColor(primaryColor);
        colorManager.setSecondaryColor(secondaryColor);
        updateUIElements();
    }
}

// New function to update UI elements without setting up rows again
function appendIconToRow(rowLabelText, svgIcon) {
    // Select all row labels within palettes-section
    const rowLabels = document.querySelectorAll('.palettes-section .palette-label');

    rowLabels.forEach(labelElement => {
        if (labelElement.textContent.trim() === rowLabelText) {
            // Remove any existing icon in the label
            const existingIcon = labelElement.querySelector('.palette-icon');
            if (existingIcon) {
                existingIcon.remove();
            }
            
            // Create a new span for the icon and add it at the beginning of the label
            const iconSpan = document.createElement('span');
            iconSpan.className = 'palette-icon';
            iconSpan.innerHTML = svgIcon;
            labelElement.insertAdjacentElement('afterbegin', iconSpan);
        }
    });
}

function createAndAddRow(rowInstance, label, containerIdPrefix, isNeutral = false) {
    try {
        // Check if the row already exists by label
        const existingRow = rows.find(row => row.label === label);
        if (existingRow) {
          /*   console.warn(`Row with label "${label}" already exists. Updating existing row.`); */
            existingRow.row.update(rowInstance.sourceColor);
            return;
        }

        // Generate unique containerId
        const containerId = `${containerIdPrefix}-${Math.random().toString(36).substr(2, 9)}`;
        rowInstance.containerId = containerId; // Assign containerId to the row

        // Ensure the palettes section exists
        const palettesSection = document.querySelector('.palettes-section');
        if (!palettesSection) {
            console.error('Palettes section not found');
            return;
        }

        // Add the row instance to the rows array and observe it
        rows.push({ row: rowInstance, label });
        colorManager.addObserver(rowInstance);

        // Create row wrapper
        const rowWrapper = document.createElement('div');
        rowWrapper.className = 'row-wrapper';

        // Add label and buttons container
        const labelButtonContainer = document.createElement('div');
        labelButtonContainer.className = 'label-button-container';

        // Add label
        if (label) {
            const labelElement = document.createElement('h4');
            labelElement.textContent = label;
            labelElement.className = 'palette-label heading-04';
            labelButtonContainer.appendChild(labelElement);
        }

        // Add chroma toggle for neutral palettes
        if (isNeutral) {
            try {
                const chromaToggle = rowInstance.createChromaToggle();
                labelButtonContainer.appendChild(chromaToggle);
            } catch (error) {
                console.error(`Failed to create chroma toggle for ${label}:`, error);
            }
        }

        // Add "Copy as JSON" button
        const copyJsonButton = document.createElement('button');
        copyJsonButton.textContent = 'Copy as JSON';
        copyJsonButton.className = 'copy-json-button';
        copyJsonButton.addEventListener('click', () => {
            try {
                const jsonPalette = rowInstance.getSwatchesAsJson();
                uiManager.copyToClipboard(jsonPalette, copyJsonButton);
            } catch (error) {
                console.error(`Failed to copy JSON for ${label}:`, error);
            }
        });
        labelButtonContainer.appendChild(copyJsonButton);

        // Create the swatch container
        const swatchContainer = document.createElement('div');
        swatchContainer.id = containerId;
        swatchContainer.className = 'color-swatch-container';
        
        // Add specific classes based on row type
        if (rowInstance instanceof ScalesRow) {
            swatchContainer.classList.add('scale-swatch-container');
        }
        if (rowInstance instanceof IndicationRow) {
            swatchContainer.classList.add('indication-scale');
        }

        // Append labelButtonContainer and swatchContainer to rowWrapper
        rowWrapper.appendChild(labelButtonContainer);
        rowWrapper.appendChild(swatchContainer);

        // Append the row wrapper to the palettes section
        palettesSection.appendChild(rowWrapper);

        // Generate swatches for the row
        try {
            const foundSwatchContainer = document.getElementById(containerId);
            if (!foundSwatchContainer) {
                throw new Error(`Swatch container not found for containerId: ${containerId}`);
            }
            rowInstance.createSwatches(containerId, label);
        } catch (error) {
            console.error(`Failed to create swatches for ${label}:`, error);
        }

        // Verify container creation
        const createdContainer = document.getElementById(containerId);
        if (!createdContainer) {
            console.error(`Container for ${containerId} could not be created.`);
        } else {
      
        }

        // Cleanup duplicate rows or containers if any
        const allContainers = document.querySelectorAll(`#${containerId}`);
        if (allContainers.length > 1) {
            /* console.warn(`Duplicate containers found for ${containerId}. Cleaning up.`); */
            allContainers.forEach((container, index) => {
                if (index > 0) container.remove(); // Keep the first, remove duplicates
            });
        }
    } catch (error) {
        console.error(`Failed to create and add row for ${label}:`, error);
    }
}

function setupRows() {
    rows = []; // Clear the rows array
    const palettesSection = document.querySelector('.palettes-section');
    if (palettesSection) {
        palettesSection.innerHTML = '';
    } else {
        console.error('Palettes section not found');
        return;
    }

    // Helper: register a ColorGroup with the observer system
    function addGroup(group) {
        group.render(palettesSection);
        rows.push(group);
        colorManager.addObserver(group);
    }

    // ── Scale groups ────────────────────────────────────────────────────────
    addGroup(new ScaleGroup({
        label:          'Primary Scales',
        sourceColor:     primaryColor,
        steps:           10,
        isPrimaryBased:  true,
    }));

    addGroup(new ScaleGroup({
        label:          'Secondary Scales',
        sourceColor:     secondaryColor,
        steps:           10,
        isPrimaryBased:  false,
    }));

    addGroup(new ScaleGroup({
        label:          'Neutrals',
        sourceColor:     primaryColor,
        steps:           10,
        isPrimaryBased:  true,
        isNeutral:       true,
        neutralChroma:   0.05,
    }));

    // ── Harmony groups (huePath icons live inside each group) ───────────────
    const currentHarmony = snapHarmonyName(hueDif);

    addGroup(new HarmonyGroup({
        label:          'Analogous wide',
        primaryColor,
        secondaryColor,
        steps:           6,
        huePath:        'longer',
        harmonyType:     currentHarmony,
    }));

    addGroup(new HarmonyGroup({
        label:          'Analogous narrow',
        primaryColor,
        secondaryColor,
        steps:           6,
        huePath:        'shorter',
        harmonyType:     currentHarmony,
    }));

    addGroup(new HarmonyGroup({
        label:          'Full circumference',
        primaryColor,
        secondaryColor,
        steps:           6,
        huePath:        'full-circle',
        harmonyType:     currentHarmony,
    }));

    // Create Utilities section with grid
    const utilitiesContainer = document.createElement('div');
    utilitiesContainer.className = 'utilities-container';

    // Create label container with proper structure
    const labelButtonContainer = document.createElement('div');
    labelButtonContainer.className = 'label-button-container';

    // Create heading with icon
    const heading = document.createElement('h4');
    heading.className = 'palette-label heading-04';
    
    // Create icon span and SVG
    const iconSpan = document.createElement('span');
    iconSpan.className = 'palette-icon';
    const utilityIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    utilityIcon.classList.add('utility-icon');
    utilityIcon.setAttribute('width', '100%');
    utilityIcon.setAttribute('height', '100%');
    utilityIcon.setAttribute('viewBox', '0 0 40 40');
    utilityIcon.setAttribute('version', '1.1');
    utilityIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    utilityIcon.innerHTML = iconNotification;
    
    iconSpan.appendChild(utilityIcon);
    heading.appendChild(iconSpan);
    heading.appendChild(document.createTextNode('Utilities'));

    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-json-button';
    copyButton.textContent = 'Copy as JSON';

    // Add click handler for the copy button
    copyButton.addEventListener('click', () => {
        const jsonData = {};
        types.forEach(type => {
            const color = colorManager.getIndicationColor(type);
            if (color) {
                // Create an IndicationRow instance to get the scale colors
                const indicationRow = new IndicationRow(color, type);
                const [darkColor, baseColor, brightColor] = indicationRow.colors;

                jsonData[type] = {
                    [`${type}-dark`]: darkColor.to('srgb').toString({ format: 'hex' }),
                    [`${type}-base`]: baseColor.to('srgb').toString({ format: 'hex' }),
                    [`${type}-bright`]: brightColor.to('srgb').toString({ format: 'hex' })
                };
            }
        });

        navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));

        // Show feedback using existing pattern
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied to clipboard!';
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 1500);
    });

    // Assemble the label container
    labelButtonContainer.appendChild(heading);
    labelButtonContainer.appendChild(copyButton);
    utilitiesContainer.appendChild(labelButtonContainer);

    // Create grid container for indication rows
    const indicationRowsGrid = document.createElement('div');
    indicationRowsGrid.className = 'indication-rows-grid';
    utilitiesContainer.appendChild(indicationRowsGrid);

    // Add the utilities container to the DOM FIRST
    palettesSection.appendChild(utilitiesContainer);

    // THEN create indication rows
    const types = ['alert', 'warning', 'success', 'info'];
    types.forEach(type => {
        const color = colorManager.getIndicationColor(type);
        if (color) {
            // Create row container
            const rowContainer = document.createElement('div');
            rowContainer.className = 'indication-row-container';
            
            // Create label
            const rowLabelContainer = document.createElement('div');
            rowLabelContainer.className = 'label-button-container';
            const rowLabel = document.createElement('span');
            rowLabel.className = 'row-label';
            rowLabel.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}`;
            rowLabelContainer.appendChild(rowLabel);
            rowContainer.appendChild(rowLabelContainer);

            // Create swatch container
            const swatchContainer = document.createElement('div');
            swatchContainer.className = 'color-swatch-container indication-scale';
            const containerId = `indication-scale-${type}`;
            swatchContainer.id = containerId;
            rowContainer.appendChild(swatchContainer);

            // Add to grid
            indicationRowsGrid.appendChild(rowContainer);

            // Force a reflow to ensure the container is in the DOM
            void indicationRowsGrid.offsetHeight;

            // Create and populate swatches
            const indicationRow = new IndicationRow(color, type);
            indicationRow.createSwatches(containerId);
        }
    });
}

/** Color controls in the UI: */

function setupColorHandlers() {
    const colorInput = document.getElementById('color-input');
    const colorPicker = document.getElementById('color-picker-primary');

    // Initialize with the current css value of --color-primary
    const initialColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-primary').trim();
    
    // Convert the initial color to hex format
    const initialHexColor = new colorUtils.Color(initialColor).to('srgb').toString({ format: 'hex' });
    
    updateColor(initialHexColor);

    // Set up event listeners
    colorInput.addEventListener('input', handlePrimaryColorInput);
    colorPicker.addEventListener('input', handleColorPicker);
    document.addEventListener('keydown', handleKeyDown);
}

function handlePrimaryColorInput(event) {
    let value = event.target.value;

    // Step 1: Keep only the first `#` and remove any others
    if (value.startsWith('#')) {
        value = '#' + value.slice(1).replace(/#/g, '');  // Remove all additional `#`
    } else {
        value = '#' + value.replace(/#/g, ''); // Add a single leading `#`
    }

    // Step 2: Enforce a max length of 7 characters (including #)
    value = value.slice(0, 7);

    // Step 3: Update the input field with sanitized value
    event.target.value = value;

    // Step 4: Only update color if it matches a valid hex format
    if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(value)) {
        updateColor(value);
        updatePrimaryColor(value);
    }
}

function handleColorPicker(event) {
    const newColor = event.target.value;
    updateColor(newColor);
}
/* update primary color value across controls and system values */
function updateColor(value) {
    const colorInput = document.getElementById('color-input');
    const colorPicker = document.getElementById('color-picker-primary');
    // Only write back to input when not focused (avoid clobbering user typing)
    if (document.activeElement !== colorInput) {
        colorInput.value = value;
    }

    // Only proceed with color updates if we have a valid hex color
    if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(value)) {
        // Extend 3-digit hex to 6-digit
        const extendedValue = value.length === 4 ? 
            '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3] : 
            value;

        // Update color picker
        colorPicker.value = extendedValue;

        // Update color picker appearance
        updateColorPickerAppearance(extendedValue);

        // Update color input text color
        updateColorInputTextColor(extendedValue);

        // Update primary color
        updatePrimaryColor(extendedValue);
    }
    
}

/* Update teh color-picker element */
function updateColorPickerAppearance(colorValue) {
    const colorPicker = document.getElementById('color-picker-primary');
    
    // Update the background color of the color picker
    colorPicker.style.backgroundColor = colorValue;
    
    // Calculate contrasting text color (black or white)
    const color = new colorUtils.Color(colorValue);
    const textColor = color.luminance > 0.5 ? '#000000' : '#ffffff';
    
    // Update the text color of the color picker
    colorPicker.style.color = textColor;
}

/* Update primary color value to secondary*/
function updatePrimaryColor(colorValue) {
    try {
        const newPrimaryColor = new Color(colorValue).to('oklch');
        // Store last primary color values before updating
        lastPrimaryChroma = primaryColor ? primaryColor.oklch.c : newPrimaryColor.oklch.c;
        lastPrimaryLightness = primaryColor ? primaryColor.oklch.l : newPrimaryColor.oklch.l;
        primaryColor = newPrimaryColor;
        const newSecondaryColor = recalculateSecondaryColor(primaryColor, hueDif, secondaryColor);
        secondaryColor = newSecondaryColor;
        
        colorManager.setPrimaryColor(primaryColor);
        colorManager.setSecondaryColor(secondaryColor);

        updateUIElements();

    } catch (error) {
        console.error("Invalid color value:", error);
    }
}


// Updated function to update all UI elements
function updateUIElements() {
    // Validate primaryColor, secondaryColor, tertiaryColor, and quaternaryColor
    if (!primaryColor || !primaryColor.oklch) {
        console.error('Invalid primaryColor in updateUIElements:', primaryColor);
        return;
    }
    if (!secondaryColor || !secondaryColor.oklch) {
        console.error('Invalid secondaryColor in updateUIElements:', secondaryColor);
        return;
    }
    if (!tertiaryColor || !tertiaryColor.oklch) {
        console.warn('Missing or invalid tertiaryColor. Generating from secondaryColor.');
        tertiaryColor = colorUtils.relateColor(
            secondaryColor,
            secondaryColor.oklch.l,
            Math.max(secondaryColor.oklch.c, 0.05), // Ensure minimum chroma (OKLCH scale)
            ((secondaryColor.oklch.h || 0) + 120) % 360
        );
    }
    if (!quaternaryColor || !quaternaryColor.oklch) {
        //console.warn('Missing or invalid quaternaryColor. It will not be updated.');
    }

    // Update CSS variables
    document.documentElement.style.setProperty('--color-primary', primaryColor.to('srgb').toString({ format: "hex" }));
    document.documentElement.style.setProperty('--color-secondary', secondaryColor.to('srgb').toString({ format: "hex" }));
    document.documentElement.style.setProperty('--color-tertiary', tertiaryColor.to('srgb').toString({ format: "hex" }));
    if (quaternaryColor && quaternaryColor.oklch) {
       // document.documentElement.style.setProperty('--color-quaternary', quaternaryColor.to('srgb').toString({ format: "hex" }));
        //console.log('Quaternary color CSS variable updated:', quaternaryColor.to('srgb').toString({ format: "hex" }));
    } else {
       // console.warn('Quaternary color is not available for CSS variable update');
    }

    // Update primary color inputs — skip if user is actively typing in the field
    const _ci = document.getElementById('color-input');
    if (document.activeElement !== _ci) {
        _ci.value = primaryColor.to('srgb').toString({ format: "hex" });
    }
    updateColorPickerAppearance(primaryColor.to('srgb').toString({ format: "hex" }));

    // Update UI controls for secondary color
    updateSecondaryColorControls();

    // ColorGroups update themselves via colorManager.notify() observer calls.
    // No manual loop needed here.

    // Update hue option dots + preview dot in the custom dropdown
    updateHueDotColors();

    // Update contrast status
    colorUtils.updateContrastStatus(primaryColor, secondaryColor, tertiaryColor);

    // Log warnings for zero chroma
    if ((secondaryColor.oklch.c || 0) < 0.001) {
        console.warn('Warning: Secondary color chroma is near zero');
    }
    if (tertiaryColor && tertiaryColor.oklch.c === 0) {
       // console.warn('Warning: Tertiary color chroma is zero');
    }
    if (quaternaryColor && quaternaryColor.oklch.c === 0) {
       // console.warn('Warning: Quaternary color chroma is zero');
    }

    // Refresh tertiary swatch in root group if active
    if (tertiaryActive) {
        tertiaryColor = computeTertiaryColor();
        refreshTertiaryRootSwatch();
    }

    // Keep the browser URL in sync so the current theme is always shareable
    updateURL();
}

// Add this new function to update the UI controls for secondary color
function updateSecondaryColorControls() {
    const chromaSlider = document.getElementById('chroma-slider');
    const chromaInput = document.getElementById('chroma-input');
    const lightnessSlider = document.getElementById('lightness-slider');
    const lightnessInput = document.getElementById('lightness-input');

    if (!chromaSlider || !chromaInput || !lightnessSlider || !lightnessInput) {
        console.error('Secondary color control elements not found');
        return;
    }

    // Convert OKLCH values back to slider range 0–100
    const chroma    = Math.min(Math.round(secondaryColor.oklch.c * 250), 100); // C 0–0.4 → 0–100
    const lightness = Math.round(secondaryColor.oklch.l * 100);                // L 0–1  → 0–100

    // Only update if the values have changed
    if (parseInt(chromaSlider.value) !== chroma) {
        chromaSlider.value = chroma;
        chromaInput.value = (chroma / 100).toFixed(2);
    }

    if (parseInt(lightnessSlider.value) !== lightness) {
        lightnessSlider.value = lightness;
        lightnessInput.value = lightness + '%';
    }
}

function updateAllScalesRows(primaryColor, secondaryColor, tertiaryColor, quaternaryColor) { 
    rows.forEach(item => {
        if (item.row instanceof ScalesRow) {
            item.row.update(primaryColor, secondaryColor, tertiaryColor, quaternaryColor);
        }
    });
}

function updateColorInputTextColor(colorValue) {
    const colorInput = document.getElementById('color-input');
    const color = new colorUtils.Color(colorValue);

    // Calculate relative luminance
    const luminance = color.luminance;

    // Choose text color based on luminance
    const textColor = luminance > 0.179 ? '#000000' : '#ffffff';

    // Update text color and background color of the input
    colorInput.style.color = textColor;
    colorInput.style.backgroundColor = colorValue;
    // Icon colors are set directly in ColorGroup.js when swatches rebuild
}


/* Secondary color */

/**
 * Generate an offset-dial SVG icon for a hue offset.
 * Shows a circle with a center dot and two arms radiating out to:
 *   - primary (12 o'clock, dimmed)
 *   - secondary (clockwise by `degrees`)
 * @param {number} degrees  hue offset (1–359)
 * @param {number} [size=16]  rendered px size (viewBox is always 20×20)
 */
function generateHueIcon(degrees, size = 16) {
    const cx = 10, cy = 10, r = 7.5;
    const rad = (degrees * Math.PI) / 180;
    // Arm 1: top (12 o'clock = 0°, the primary reference)
    const x1 = cx, y1 = cy - r;
    // Arm 2: at the offset angle
    const x2 = (cx + r * Math.sin(rad)).toFixed(2);
    const y2 = (cy - r * Math.cos(rad)).toFixed(2);
    // Opaque arc from 0° to degrees (the "covered range" on the circle border)
    const largeArc = degrees > 180 ? 1 : 0;
    const arc = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
    return `<svg class="hue-option-icon" width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="${cx}" cy="${cy}" r="${r}" stroke="currentColor" stroke-width="0.75" fill="none" opacity="0.18"/>
      <path d="${arc}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="1"/>
      <line x1="${cx}" y1="${cy}" x2="${x1}" y2="${y1}" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" opacity="0.45"/>
      <line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="1.4" fill="currentColor"/>
      <circle cx="${x1}" cy="${y1}" r="1.5" fill="currentColor" opacity="0.45"/>
      <circle cx="${x2}" cy="${y2}" r="1.5" fill="currentColor"/>
    </svg>`;
}

/** Set the trigger icon to reflect the given hue offset. */
function setHueTriggerIcon(degrees) {
    const el = document.getElementById('hue-trigger-icon');
    if (!el) return;
    if (degrees == null) {
        el.innerHTML = ''; // custom — no icon
        return;
    }
    el.innerHTML = generateHueIcon(degrees, 20);
}

/**
 * Custom hue dropdown.
 * Hue offset dropdown: preset options panel + always-on scrub/type input in the trigger.
 */
function setupHueCustomDropdown() {
    const trigger    = document.getElementById('hue-custom-select');
    const panel      = document.getElementById('hue-options-panel');
    const scrubInput = document.getElementById('hue-scrub-input');
    const chevronBtn = document.getElementById('hue-chevron-btn');
    const nativeSel  = document.getElementById('hue-select');
    if (!trigger || !panel || !nativeSel || !scrubInput || !chevronBtn) return;

    // ── Panel open/close ───────────────────────────────────────────────────
    function openPanel() {
        panel.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
    }
    function closePanel() {
        panel.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
    }

    // ── Apply any hue value live ───────────────────────────────────────────
    function applyHue(val) {
        val = Math.min(360, Math.max(10, Math.round(val)));
        hueDif = val;
        scrubInput.value = val;
        setHueTriggerIcon(val);
        const newSec = recalculateSecondaryColor(primaryColor, val, secondaryColor, true);
        if (newSec?.oklch) {
            secondaryColor = newSec;
            colorManager.setSecondaryColor(secondaryColor);
            updateUIElements();
        }
    }

    // ── Scrub drag on the input ────────────────────────────────────────────
    let dragStartX = null, dragStartVal = null, hasDragged = false;

    scrubInput.addEventListener('pointerdown', e => {
        dragStartX   = e.clientX;
        dragStartVal = parseFloat(scrubInput.value) || hueDif;
        hasDragged   = false;
        scrubInput.setPointerCapture(e.pointerId);
    });

    scrubInput.addEventListener('pointermove', e => {
        if (dragStartX === null) return;
        const delta = e.clientX - dragStartX;
        if (Math.abs(delta) > 3) {
            hasDragged = true;
            closePanel();
            applyHue(dragStartVal + delta * 0.8);
        }
    });

    scrubInput.addEventListener('pointerup', () => {
        if (!hasDragged) { scrubInput.focus(); scrubInput.select(); }
        dragStartX = null;
    });

    // Direct typing
    scrubInput.addEventListener('input', () => {
        const val = parseInt(scrubInput.value, 10);
        if (!isNaN(val) && val >= 10) applyHue(val);
    });

    scrubInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') scrubInput.blur();
        if (e.key === 'Escape') { scrubInput.blur(); closePanel(); }
    });

    // Clicks on the input shouldn't bubble up to toggle the panel
    scrubInput.addEventListener('click', e => e.stopPropagation());

    // ── Chevron: toggle panel ──────────────────────────────────────────────
    chevronBtn.addEventListener('click', e => {
        e.stopPropagation();
        panel.hidden ? openPanel() : closePanel();
    });

    // ── Trigger click (anywhere else on trigger): toggle panel ─────────────
    trigger.addEventListener('click', e => {
        if (e.target === scrubInput || e.target === chevronBtn || chevronBtn.contains(e.target)) return;
        panel.hidden ? openPanel() : closePanel();
    });

    trigger.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPanel(); }
        if (e.key === 'Escape') closePanel();
    });

    // ── Close on outside click ─────────────────────────────────────────────
    document.addEventListener('click', e => {
        if (!trigger.contains(e.target) && !panel.contains(e.target)) closePanel();
    });

    // ── Inject icon + color swatch into each preset option ────────────────
    panel.querySelectorAll('.hue-option[data-value]').forEach(opt => {
        const deg = parseFloat(opt.dataset.value);
        if (!isNaN(deg)) {
            opt.insertAdjacentHTML('afterbegin', generateHueIcon(deg));
            const swatch = document.createElement('span');
            swatch.className = 'hue-option-color';
            swatch.dataset.hue = opt.dataset.value;
            opt.insertAdjacentElement('beforeend', swatch);
        }
    });

    // ── Preset option selection ────────────────────────────────────────────
    panel.querySelectorAll('.hue-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const val = parseFloat(opt.dataset.value);
            if (isNaN(val)) return;
            panel.querySelectorAll('.hue-option').forEach(o => o.removeAttribute('aria-selected'));
            opt.setAttribute('aria-selected', 'true');
            nativeSel.value = opt.dataset.value;
            closePanel();
            applyHue(val);
        });
    });

    // ── Initial state ──────────────────────────────────────────────────────
    scrubInput.value = Math.round(hueDif);
    setHueTriggerIcon(hueDif);
}

/**
 * Color each option's hue swatch to preview what secondary would look like
 * at that hue offset from the current primary.
 * Also syncs the trigger icon to the current hueDif.
 */
function updateHueDotColors() {
    if (!primaryColor?.oklch) return;
    const L = secondaryColor?.oklch?.l ?? 0.65;
    const C = secondaryColor?.oklch?.c ?? 0.18;
    const primaryHue = primaryColor.oklch.h ?? 0;

    document.querySelectorAll('.hue-option-color[data-hue]').forEach(swatch => {
        const offsetDeg = parseFloat(swatch.dataset.hue);
        const hue = (primaryHue + offsetDeg) % 360;
        try {
            const col = new Color('oklch', [L, C, hue]);
            swatch.style.backgroundColor = col.to('srgb').toString({ format: 'hex' });
        } catch (_) {}
    });
}

/**
 * Adds horizontal pointer-drag scrub behaviour to an input element.
 * @param {HTMLInputElement} input
 * @param {object} opts
 *   getVal()        → current numeric value (internal units)
 *   setVal(n)       → apply new value and update UI
 *   sensitivity     → pixels per unit (default 1)
 *   min / max       → clamp range
 */
function addScrubBehavior(input, { getVal, setVal, sensitivity = 1, min = 0, max = 100 }) {
    let startX = null, startVal = null, dragged = false;

    input.addEventListener('pointerdown', e => {
        startX   = e.clientX;
        startVal = getVal();
        dragged  = false;
        input.setPointerCapture(e.pointerId);
    });

    input.addEventListener('pointermove', e => {
        if (startX === null) return;
        const delta = e.clientX - startX;
        if (Math.abs(delta) > 3) {
            dragged = true;
            input.blur();
            const raw = startVal + delta / sensitivity;
            setVal(Math.min(max, Math.max(min, raw)));
        }
    });

    input.addEventListener('pointerup', () => {
        if (!dragged && startX !== null) { input.focus(); input.select(); }
        startX = null;
    });

    // Show resize cursor while not focused
    input.style.cursor = 'ew-resize';
    input.addEventListener('focus', () => { input.style.cursor = 'text'; });
    input.addEventListener('blur',  () => { input.style.cursor = 'ew-resize'; });
}

function setupSecondaryColorHandlers() {
    const chromaSlider   = document.getElementById('chroma-slider');
    const chromaInput    = document.getElementById('chroma-input');
    const lightnessSlider = document.getElementById('lightness-slider');
    const lightnessInput  = document.getElementById('lightness-input');

    if (chromaSlider && chromaInput) {
        chromaSlider.max = 100;
        chromaSlider.addEventListener('input', handleChromaChange);
        chromaInput.addEventListener('input', handleChromaChange);

        // Scrub: internal range 0–100, display as 0.00–1.00 (sensitivity: 2px per 0.01)
        addScrubBehavior(chromaInput, {
            getVal: () => lastUserChroma,
            setVal: val => {
                lastUserChroma = Math.round(val);
                chromaSlider.value  = lastUserChroma;
                chromaInput.value   = (lastUserChroma / 100).toFixed(2);
                updateSecondaryColor();
            },
            sensitivity: 2,   // 2px per unit (each unit = 0.01 chroma)
            min: 0,
            max: 100,
        });
    } else {
        console.error('Chroma controls not found');
    }

    const hueSelect = document.getElementById('hue-select');
    if (hueSelect) hueSelect.addEventListener('change', handleHueChange);

    if (lightnessSlider && lightnessInput) {
        lightnessSlider.addEventListener('input', handleLightnessChange);
        lightnessInput.addEventListener('input', handleLightnessChange);
        lightnessInput.addEventListener('change', handleSecondaryLightnessChange);

        // Scrub: internal range 0–100 (display as "68%"), sensitivity 1px per unit
        addScrubBehavior(lightnessInput, {
            getVal: () => lastUserLightness,
            setVal: val => {
                lastUserLightness = Math.round(val);
                lightnessSlider.value = lastUserLightness;
                lightnessInput.value  = lastUserLightness + '%';
                updateSecondaryColor();
            },
            sensitivity: 1,
            min: 0,
            max: 100,
        });
    } else {
        console.error('Lightness controls not found');
    }

    // Focus/blur guards (prevent hex input capture while typing here)
    if (chromaInput) {
        chromaInput.addEventListener('focus', handleSecondaryInputFocus);
        chromaInput.addEventListener('blur', handleSecondaryInputBlur);
    }
    if (lightnessInput) {
        lightnessInput.addEventListener('focus', handleSecondaryInputFocus);
        lightnessInput.addEventListener('blur', handleSecondaryInputBlur);
    }

    if (lightnessSlider) { lightnessSlider.min = 0; lightnessSlider.max = 100; }
}

function handleLightnessChange(event) {
    const lightnessSlider = document.getElementById('lightness-slider');
    const lightnessInput = document.getElementById('lightness-input');

    let newValue = parseInt(event.target.value); // parseInt strips trailing '%' automatically
    newValue = Math.min(Math.max(newValue, 0), 100);

    if (event.target === lightnessSlider) {
        lightnessInput.value = newValue + '%';
    } else if (event.target === lightnessInput) {
        lightnessSlider.value = newValue;
    }

    lastUserLightness = newValue;
    updateSecondaryColor();
}

function handleSecondaryLightnessChange(event) {
    const maxLightness = 100;
    lastUserLightness = Math.min(Math.max(parseInt(event.target.value), 0), maxLightness);
    document.getElementById('lightness-slider').value = lastUserLightness;
    document.getElementById('lightness-input').value = lastUserLightness + '%';
    updateSecondaryColor();
}


function handleHueChange() {
    const select = document.getElementById('hue-select');
    if (!select) return;

    if (select.value !== 'custom') {
        hueDif = parseFloat(select.value);
    }
    // When value === 'custom', hueDif was already updated by applyCustomHue() inside setupHueCustomDropdown

    // Update huePath-button icons in every HarmonyGroup (snap to nearest named type)
    [rootGroup, ...rows].forEach(group => {
        if (group instanceof HarmonyGroup) group.setHarmonyType(snapHarmonyName(hueDif));
    });

    const newSecondaryColor = recalculateSecondaryColor(primaryColor, hueDif, secondaryColor, true);
    if (!newSecondaryColor?.oklch || typeof newSecondaryColor.oklch.h === 'undefined') {
        console.error('Invalid secondary color calculated:', newSecondaryColor);
        return;
    }

    secondaryColor = newSecondaryColor;
    colorManager.setSecondaryColor(secondaryColor);
    updateUIElements();
}

/**
 * Sync the hue-select dropdown (and optional custom input) to reflect a degree value.
 * Called on init and when loading from URL params.
 */
function syncHueSelectUI(degrees) {
    const select     = document.getElementById('hue-select');
    const scrubInput = document.getElementById('hue-scrub-input');
    if (!select) return;

    const step30 = String(Math.round(degrees / 30) * 30);
    const matchingOption = select.querySelector(`option[value="${step30}"]`);
    if (matchingOption && step30 !== '0' && step30 !== '360') {
        select.value = step30;
    }

    // Always show the actual degree value in the scrub input and trigger icon
    if (scrubInput) scrubInput.value = Math.round(degrees);
    setHueTriggerIcon(Math.round(degrees));

    // Mark the correct option as selected in the custom panel
    const panel = document.getElementById('hue-options-panel');
    if (panel) {
        panel.querySelectorAll('.hue-option').forEach(opt => {
            const match = matchingOption ? opt.dataset.value === step30
                                         : opt.dataset.value === 'custom';
            opt.toggleAttribute('aria-selected', match);
        });
    }
}

/** Snap a hue-degree to the nearest named harmony key (for icon display). */
function snapHarmonyName(deg) {
    const named = { complementary: 180, triad: 120, quad: 90, analogous: 45 };
    let nearest = 'complementary', minDist = Infinity;
    for (const [name, d] of Object.entries(named)) {
        const dist = Math.min(Math.abs(deg - d), 360 - Math.abs(deg - d));
        if (dist < minDist) { minDist = dist; nearest = name; }
    }
    return nearest;
}

// calculateChroma is provided by colorUtils — no local duplicate needed


function handleSecondaryInputFocus() {
    isSecondaryInputFocused = true;
}

function handleSecondaryInputBlur() {
    isSecondaryInputFocused = false;
}

function handleChromaChange(event) {
    const rawValue = event.target === document.getElementById('chroma-input')
        ? Math.round(parseFloat(event.target.value) * 100) // "0.75" → 75
        : parseInt(event.target.value);
    lastUserChroma = Math.min(Math.max(rawValue, 0), 100);
    document.getElementById('chroma-slider').value = lastUserChroma;
    document.getElementById('chroma-input').value = (lastUserChroma / 100).toFixed(2);
    updateSecondaryColor();
}


function updateSecondaryColor() {
    if (!primaryColor) {
        console.error('Primary color is not set.');
        return;
    }

    const chromaSlider = document.getElementById('chroma-slider');
    const lightnessSlider = document.getElementById('lightness-slider');

    if (!chromaSlider || !lightnessSlider) {
        console.error('Chroma or Lightness slider not found.');
        return;
    }

    // Slider values are 0–100; convert to OKLCH ranges (L: 0–1, C: 0–0.4)
    const lightness = parseInt(lightnessSlider.value) / 100;
    const chroma    = parseInt(chromaSlider.value) * 0.004;
    const newSecondaryColor = colorUtils.relateColor(
        primaryColor,
        lightness,
        chroma,
        colorUtils.setHue(primaryColor.oklch.h || 0, hueDif)
    );

    if (!newSecondaryColor || !newSecondaryColor.oklch) {
        console.error('Failed to calculate secondary color:', newSecondaryColor);
        return;
    }

    secondaryColor = newSecondaryColor;
    colorManager.setSecondaryColor(secondaryColor);
    updateUIElements();
}

function updateSecondaryColorDisplay() {

    const secondaryColorElement = document.getElementById('secondary-color');
    if (!secondaryColorElement) {
        console.error('Secondary color element not found');
        return;
    }

    if (!secondaryColor) {
        console.error('Secondary color is undefined');
        return;
    }

    let hexColor;
    try {
        hexColor = secondaryColor.to('srgb').toString({format: "hex"});
        // Convert back to LCH to check if chroma is preserved
        const backToLCH = new colorUtils.Color(hexColor).to('oklch');
    } catch (error) {
        console.error('Error converting secondary color to hex:', error);
        hexColor = '#000000'; // Fallback to black if conversion fails
    }
    secondaryColorElement.style.backgroundColor = hexColor;
    
    // update hex value display
    let hexValue = secondaryColorElement.querySelector('.hex-value');
    if (!hexValue) {
        hexValue = document.createElement('span');
        hexValue.className = 'hex-value';
        secondaryColorElement.appendChild(hexValue);
    }
    hexValue.textContent = hexColor;
    
    // Set text color based on contrast
    try {
        const textColor = colorUtils.getContrastTextColor(hexColor);
        hexValue.style.color = textColor;

        // Update icon colors
        const copyIcon = secondaryColorElement.querySelector('.copy-icon');
        const checkIcon = secondaryColorElement.querySelector('.check-icon');
        if (copyIcon) copyIcon.style.color = textColor;
        if (checkIcon) checkIcon.style.color = textColor;
    } catch (error) {
        console.error('Error setting contrast text color:', error);
    }
}


/* Capture key events on page for primary color value typing */
function handleKeyDown(event) {
    const colorInput = document.getElementById('color-input');
    const validKeys = /^[#0-9A-Fa-f]$/;
    
    const hueScrubInput = document.getElementById('hue-scrub-input');
    if (validKeys.test(event.key) && document.activeElement !== colorInput && !isSecondaryInputFocused && document.activeElement !== hueScrubInput) {
        event.preventDefault();
        colorInput.focus();
        
        if (event.key === '#') {
            colorInput.value = '#';
        } else {
            colorInput.value = '#' + event.key;
        }
        
        // Trigger the input event to update the color
        colorInput.dispatchEvent(new Event('input'));
    }
}

/* Setup bright/dark theme switch */
function setupThemeSwitch() {
    const body = document.body;
    const themeCheckbox = document.getElementById('theme-checkbox');

    function setTheme(isDark) {
        body.classList.toggle('main-theme-dark', isDark);
        body.classList.toggle('main-theme-bright', !isDark);
        localStorage.setItem('darkMode', isDark);
    }

    function toggleTheme() {
        const isDark = themeCheckbox.checked;
        setTheme(isDark);
    }

    // Set initial theme
    const savedTheme = localStorage.getItem('darkMode');
    const defaultDark = savedTheme === null ? true : savedTheme === 'true';
    themeCheckbox.checked = defaultDark;
    setTheme(defaultDark);

    // Event listener for checkbox changes
    themeCheckbox.addEventListener('change', toggleTheme);

    // Event listener for Enter key
    themeCheckbox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.checked = !this.checked;
            toggleTheme();
        }
    });
}

/* Setup hue harmony controls (now a no-op — select handles its own events) */
function setupHueSelectionControls() {}


function initializeMainColorInput() {
    /* Main color text input field — copy icon is now built inline by ColorGroup.js */
    const colorInput = document.getElementById('color-input');
    if (!colorInput) console.error('Main color input not found');
}


function recalculateSecondaryColor(primaryColor, hueDif, currentSecondaryColor, hueChangeOnly = false) {
    const newHue = colorUtils.setHue(primaryColor.oklch.h || 0, hueDif);

    // lastUserChroma / lastUserLightness are slider values (0–100)
    let newChromaSlider, newLightnessSlider;

    if (hueChangeOnly) {
        // Keep current chroma/lightness, only update hue
        newChromaSlider    = Math.min(Math.round(currentSecondaryColor.oklch.c * 250), 100);
        newLightnessSlider = Math.round(currentSecondaryColor.oklch.l * 100);
    } else {
        // Scale slider values proportionally to primary color change
        const chromaRatio    = lastPrimaryChroma    > 0 ? primaryColor.oklch.c    / lastPrimaryChroma    : 1;
        const lightnessRatio = lastPrimaryLightness > 0 ? primaryColor.oklch.l    / lastPrimaryLightness : 1;
        newChromaSlider    = Math.min(Math.max(lastUserChroma    * chromaRatio,    1),   100);
        newLightnessSlider = Math.min(Math.max(lastUserLightness * lightnessRatio, 0),   100);
    }

    // Convert slider values to OKLCH (L: 0–1, C: 0–0.4)
    const newSecondaryColor = colorUtils.relateColor(
        primaryColor,
        newLightnessSlider / 100,
        newChromaSlider * 0.004,
        newHue
    );

    if (!hueChangeOnly) {
        lastUserChroma    = newChromaSlider;
        lastUserLightness = newLightnessSlider;
    }

    return newSecondaryColor;
}

function updateContrastCheck() {
    const foregroundColor = getComputedStyle(document.body).color; // Example fallback
    const backgroundColor = getComputedStyle(document.body).backgroundColor;
    const ratio = colorUtils.updateContrastStatus(foregroundColor, backgroundColor);
    const primaryColorHex = primaryColor.to('srgb').toString({format: "hex"});
    const secondaryColorHex = secondaryColor.to('srgb').toString({format: "hex"});
    const contrastStatus = colorUtils.updateContrastStatus(primaryColorHex, secondaryColorHex);
    const contrastStatusElement = document.getElementById('contrast-status');
    if (!contrastStatusElement) {
        console.error("Contrast status element not found in the DOM");
        return;
    }
    
    const successIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="1rem" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
    const failIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="1rem" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

    contrastStatusElement.innerHTML = `
        <span class="${contrastStatus.aaLarge ? 'success' : 'fail'}">
            ${contrastStatus.aaLarge ? successIcon : failIcon} AA18
        </span>
        <span class="${contrastStatus.aa ? 'success' : 'fail'}">
            ${contrastStatus.aa ? successIcon : failIcon} AA
        </span>
        <span class="${contrastStatus.aaa ? 'success' : 'fail'}">
            ${contrastStatus.aaa ? successIcon : failIcon} AAA
        </span>
    `;
    contrastStatusElement.setAttribute('title', `Contrast ratio: ${contrastStatus.ratio}`);

}

/* Copying palettes to clipboard */
function extractColorsWithLabels(rowId, label) {
    const colors = [];
    const rowContainer = document.getElementById(rowId);

    if (!rowContainer) {
        console.error(`Row container with ID ${rowId} not found.`);
        return colors;
    }

    // Select all .hex-value spans and use the label for each color
    const hexValueElements = rowContainer.querySelectorAll('.hex-value');
    hexValueElements.forEach((hexElement, index) => {
        const colorValue = hexElement.textContent.trim();
        if (colorValue) {
            const colorLabel = `${label}-color${index + 1}`;
            colors.push({ [colorLabel]: colorValue });
        }
    });

    return colors; // Returns an array of color objects with labels
} 


/* generate Sharable URL */
function generateShareableURL() {
    const params = new URLSearchParams();

    // Capture the primary color from #color-input
    const primaryColorInput = document.getElementById('color-input');
    if (primaryColorInput) {
        const primaryColorValue = primaryColorInput.value;
        params.set('primaryColor', primaryColorValue);
    }

    // Capture the current hue difference
    params.set('hueDif', hueDif);

    // Capture chroma and lightness slider values
    const chromaSlider = document.getElementById('chroma-slider');
    const lightnessSlider = document.getElementById('lightness-slider');
    if (chromaSlider && lightnessSlider) {
        params.set('chroma', chromaSlider.value);
        params.set('lightness', lightnessSlider.value);
    }

    // Capture the state of the chroma toggle
    const chromaToggle = document.getElementById('chroma-toggle-checkbox');
    if (chromaToggle) {
        params.set('chromaToggle', chromaToggle.checked ? 'on' : 'off');
    }

    // Create the full URL with query parameters
    const shareableURL = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    navigator.clipboard.writeText(shareableURL)
        .then(() => {
            const shareButton = document.getElementById('generate-shareable-url-button'); // Confirm correct button ID
            if (shareButton) {
                const originalText = shareButton.innerHTML;
                shareButton.innerHTML = "Theme URL copied to clipboard!";

                setTimeout(() => {
                    shareButton.innerHTML = originalText;
                }, 1500);
            } else {
                console.error("Button not found: Check ID or DOM timing.");
            }
        })
        .catch(err => {
            console.error('Error copying URL to clipboard:', err);
        });
}

// Silently sync the browser URL bar with current color state (no clipboard).
function updateURL() {
    const params = new URLSearchParams();

    const primaryColorInput = document.getElementById('color-input');
    if (primaryColorInput) params.set('primaryColor', primaryColorInput.value);

    params.set('hueDif', hueDif);

    const chromaSlider = document.getElementById('chroma-slider');
    const lightnessSlider = document.getElementById('lightness-slider');
    if (chromaSlider && lightnessSlider) {
        params.set('chroma', chromaSlider.value);
        params.set('lightness', lightnessSlider.value);
    }

    const chromaToggle = document.getElementById('chroma-toggle-checkbox');
    if (chromaToggle) params.set('chromaToggle', chromaToggle.checked ? 'on' : 'off');

    const newURL = `${window.location.pathname}?${params.toString()}`;
    history.replaceState(null, '', newURL);
}


/**
 * Compute the tertiary color: hue midpoint between primary and secondary
 * on the *outside* of the covered arc.
 * tertiaryOffset = 180 + hueDif / 2  (always the far side midpoint)
 */
function computeTertiaryColor() {
    const primaryHue = primaryColor.oklch.h || 0;
    const tertiaryOffset = 180 + hueDif / 2;
    const tertiaryHue = (primaryHue + tertiaryOffset) % 360;
    // Midpoint of L and C between primary and secondary
    const L = (primaryColor.oklch.l + secondaryColor.oklch.l) / 2;
    const C = (primaryColor.oklch.c + secondaryColor.oklch.c) / 2;
    return new Color('oklch', [L, C, tertiaryHue]);
}

let tertiaryActive = false;
let tertiaryScaleGroup = null;
let tertiarySwatch = null;   // the injected swatch DOM node

/** Build and inject the tertiary swatch into the root group's swatch strip. */
function addTertiaryRootSwatch() {
    const container = rootGroup?._swatchEl;
    if (!container || !tertiaryColor) return;

    tertiarySwatch = document.createElement('div');
    tertiarySwatch.className = 'color-swatch color-swatch--anchor color-swatch--tertiary-hero';
    tertiarySwatch.setAttribute('tabindex', '0');
    tertiarySwatch.setAttribute('role', 'button');

    // Hex label
    const info = document.createElement('div');
    info.className = 'hex-value-container';
    const ratio = document.createElement('span');
    ratio.className = 'contrast-ratio';
    const hexVal = document.createElement('span');
    hexVal.className = 'hex-value';
    info.append(ratio, hexVal);
    tertiarySwatch.appendChild(info);

    // Anchor dot
    const dot = document.createElement('span');
    dot.className = 'swatch__anchor-dot';
    tertiarySwatch.appendChild(dot);

    // Copy icons — stacked in icon-slot, toggled by opacity only (no layout shift)
    const copyIcon  = createCopyIcon();
    const checkIcon = createCheckIcon();
    const iconSlot  = document.createElement('span');
    iconSlot.className = 'icon-slot';
    iconSlot.append(copyIcon, checkIcon);
    info.append(iconSlot);

    tertiarySwatch.addEventListener('click', () => {
        const hex = tertiarySwatch.dataset.hex || '';
        navigator.clipboard?.writeText(hex).catch(() => {});
        copyIcon.style.opacity  = '0';
        checkIcon.style.opacity = '1';
        setTimeout(() => {
            checkIcon.style.opacity = '';
            copyIcon.style.opacity  = '';
        }, 1500);
    });

    // Insert before the secondary swatch (last child)
    const secondarySwatch = container.lastElementChild;
    if (secondarySwatch) {
        container.insertBefore(tertiarySwatch, secondarySwatch);
    } else {
        container.appendChild(tertiarySwatch);
    }
    refreshTertiaryRootSwatch();
}

/** Update color + labels on the existing tertiary swatch, re-appending if rootGroup wiped it. */
function refreshTertiaryRootSwatch() {
    if (!tertiarySwatch || !tertiaryColor) return;
    const container = rootGroup?._swatchEl;
    if (!container) return;

    // Re-insert before secondary (last child) if rootGroup._refresh() wiped the container
    if (!container.contains(tertiarySwatch)) {
        const secondarySwatch = container.lastElementChild;
        if (secondarySwatch) {
            container.insertBefore(tertiarySwatch, secondarySwatch);
        } else {
            container.appendChild(tertiarySwatch);
        }
    }

    const hex = tertiaryColor.to('srgb').toString({ format: 'hex' });
    const textClr = colorUtils.getContrastTextColor(hex);
    tertiarySwatch.style.backgroundColor = hex;
    tertiarySwatch.dataset.hex = hex;
    tertiarySwatch.setAttribute('aria-label', `Copy ${hex}`);

    // Update text nodes (don't wipe innerHTML — copy icon nodes live here)
    const ratio  = tertiarySwatch.querySelector('.contrast-ratio');
    const hexVal = tertiarySwatch.querySelector('.hex-value');
    const copyIcon  = tertiarySwatch.querySelector('.copy-icon');
    const checkIcon = tertiarySwatch.querySelector('.check-icon');
    if (ratio)  { ratio.style.color  = textClr; }
    if (hexVal) { hexVal.style.color = textClr; hexVal.textContent = hex; }
    if (copyIcon)  copyIcon.style.color  = textClr;
    if (checkIcon) checkIcon.style.color = textClr;
}

/** Remove the tertiary swatch from the root group. */
function removeTertiaryRootSwatch() {
    tertiarySwatch?.remove();
    tertiarySwatch = null;
}

function setupTertiaryToggle() {
    const checkbox = document.getElementById('tertiary-checkbox');
    if (!checkbox) return;

    // Patch rootGroup.update once so the tertiary swatch survives every refresh
    if (rootGroup && !rootGroup._tertiaryPatched) {
        const _base = rootGroup.update.bind(rootGroup);
        rootGroup.update = function(payload) {
            _base(payload);
            if (tertiaryActive) refreshTertiaryRootSwatch();
        };
        rootGroup._tertiaryPatched = true;
    }

    function enableTertiary() {
        const palettesSection = document.querySelector('.palettes-section');
        if (!palettesSection) return;

        tertiaryColor = computeTertiaryColor();
        colorManager.tertiaryColor = tertiaryColor;

        tertiaryScaleGroup = new ScaleGroup({
            label:         'Tertiary Scales',
            sourceColor:    tertiaryColor,
            steps:          10,
            isPrimaryBased: false,
        });
        tertiaryScaleGroup.update = function() {
            const t = computeTertiaryColor();
            this.sourceColor = t;
            this._refresh();
        };

        // Insert after "Secondary Scales"
        let insertAfter = null;
        for (const el of palettesSection.children) {
            const h = el.querySelector('.color-group__label, h4');
            if (h && h.textContent.trim() === 'Secondary Scales') insertAfter = el;
        }
        const tempDiv = document.createElement('div');
        tertiaryScaleGroup.render(tempDiv);
        const groupEl = tempDiv.firstElementChild;
        if (insertAfter?.nextSibling) {
            palettesSection.insertBefore(groupEl, insertAfter.nextSibling);
        } else {
            palettesSection.appendChild(groupEl);
        }
        colorManager.addObserver(tertiaryScaleGroup);
        rows.push(tertiaryScaleGroup);

        tertiaryActive = true;
        addTertiaryRootSwatch();
        document.querySelector('.ctrl-hues-columns')?.classList.add('has-tertiary');
    }

    function disableTertiary() {
        const palettesSection = document.querySelector('.palettes-section');
        if (tertiaryScaleGroup) {
            colorManager.removeObserver?.(tertiaryScaleGroup);
            rows = rows.filter(r => r !== tertiaryScaleGroup);
            palettesSection?.querySelectorAll('.color-group').forEach(el => {
                const h = el.querySelector('.color-group__label, h4');
                if (h && h.textContent.trim() === 'Tertiary Scales') el.remove();
            });
            tertiaryScaleGroup = null;
        }
        tertiaryColor = null;
        colorManager.tertiaryColor = null;
        removeTertiaryRootSwatch();
        tertiaryActive = false;
        document.querySelector('.ctrl-hues-columns')?.classList.remove('has-tertiary');
    }

    checkbox.addEventListener('change', () => {
        checkbox.checked ? enableTertiary() : disableTertiary();
    });
}

// Single DOMContentLoaded entry point — all startup logic runs here once.
document.addEventListener('DOMContentLoaded', () => {
    setupThemeSwitch();

    // Share button
    const shareButton = document.getElementById('generate-shareable-url-button');
    if (shareButton) {
        shareButton.addEventListener('click', generateShareableURL);
    }

    // Copy Theme JSON button (copies rootGroup swatches JSON)
    const copyJsonBtn = document.getElementById('copy-theme-json-button');
    if (copyJsonBtn) {
        copyJsonBtn.addEventListener('click', () => {
            if (!rootGroup) return;
            const json = rootGroup.getSwatchesAsJson();
            uiManager.copyToClipboard(json, copyJsonBtn);
        });
    }

    // Custom hue dropdown
    setupHueCustomDropdown();

    // Tertiary color toggle
    setupTertiaryToggle();

    // init() must run first — it sets the primaryColor / secondaryColor globals
    // and calls colorManager.setPrimaryColor / setSecondaryColor.
    init();

    // setupRows reads primaryColor and secondaryColor, so it must come after init().
    try {
        setupRows(colorManager);
    } catch (error) {
        console.error('Error during row setup:', error);
    }
});



