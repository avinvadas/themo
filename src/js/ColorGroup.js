/**
 * ColorGroup — unified color palette component
 * Base class + ScaleGroup + HarmonyGroup
 *
 * Each group owns its full DOM shell (header + swatch strip).
 * Subclasses provide generateColors() and renderControls().
 * Implements the colorManager observer interface via update(state).
 */

import * as colorUtils from './colorUtils.js';
import * as uiManager  from './uiManager.js';
import { HARMONY_ICONS } from './icons.js';

// ─── Interpolation curve definitions ─────────────────────────────────────────
// Each entry: key fed to colorUtils.interpolate, label, SVG path from (2,22)→(22,2)

const CURVES = [
    {
        key:   'linear',
        label: 'Linear',
        path:  'M 2 22 L 22 2',
    },
    {
        key:   'quadratic',
        label: 'Ease in',
        path:  'M 2 22 Q 22 22 22 2',
    },
    {
        key:   'reverse-quadratic',
        label: 'Ease out',
        path:  'M 2 22 Q 2 2 22 2',
    },
    {
        key:   'easeInOut',
        label: 'S-curve',
        path:  'M 2 22 C 14 22 10 2 22 2',
    },
];

function _curveSVG(path) {
    return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="${path}" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" fill="none"/>
    </svg>`;
}

// ─── Base class ───────────────────────────────────────────────────────────────

export class ColorGroup {
    /**
     * @param {object} cfg
     * @param {string} cfg.label
     * @param {number} [cfg.steps=10]
     * @param {Array<{color, id, deletable}>} [cfg.anchors=[]]
     */
    constructor({ label, steps = 10, anchors = [], embeddedInput = null, embeddedCopy = null }) {
        this.label   = label;
        this.steps   = Math.max(2, Math.min(20, steps));
        this.anchors = anchors;          // [{ color, id, deletable }]

        this.colors          = [];
        this.anchorIndices   = [];       // which color[] indices are anchors
        this.contrastRatios  = [];
        this.contrastMarkers = [];

        // Optional: DOM elements to embed inside the first anchor swatch
        // (used by root group to make the hex input live inside the swatch)
        this.embeddedInput = embeddedInput;
        this.embeddedCopy  = embeddedCopy;

        // Axis ease config — subclass overrides _curveConfig()
        this.eases = this._curveConfig();

        // DOM refs (populated in render)
        this._swatchEl     = null;
        this._stepperEl    = null;
        this._stepperMinus = null;
        this._stepperPlus  = null;
        this._wrapper      = null;
    }

    // ── Subclass hooks ─────────────────────────────────────────────────────

    /** Return { l, c, h } each { visible:bool, ease:string } */
    _curveConfig() {
        return {
            l: { visible: true,  ease: 'linear' },
            c: { visible: false, ease: 'linear' },
            h: { visible: false, ease: 'linear' },
        };
    }

    /** Return Color[] using this.anchors / this.steps / this.eases */
    generateColors() { return []; }

    /** Return an HTMLElement to insert into the header, or null */
    renderControls() { return null; }

    // ── Public API ─────────────────────────────────────────────────────────

    /** Build the full group DOM and append it to parentEl */
    render(parentEl) {
        const wrapper = document.createElement('div');
        wrapper.className = 'color-group';
        this._wrapper = wrapper;

        wrapper.appendChild(this._buildHeader());

        const swatchContainer = document.createElement('div');
        swatchContainer.className = 'color-group__swatches';
        this._swatchEl = swatchContainer;
        wrapper.appendChild(swatchContainer);

        parentEl.appendChild(wrapper);
        this._refresh();
    }

    setSteps(n) {
        this.steps = Math.max(2, Math.min(20, n));
        if (this._stepperEl) this._stepperEl.textContent = this.steps;
        this._updateStepperBounds();
        this._refresh();
    }

    removeAnchor(id) {
        if (this.anchors.length <= 2) return;
        this.anchors = this.anchors.filter(a => a.id !== id);
        this._refresh();
    }

    /** colorManager observer entry point — subclass overrides */
    update(state) {}

    // ── DOM building ────────────────────────────────────────────────────────

    _buildHeader() {
        const header = document.createElement('div');
        header.className = 'color-group__header';

        // Label
        const labelEl = document.createElement('h4');
        labelEl.className = 'color-group__label heading-04';
        labelEl.textContent = this.label;
        header.appendChild(labelEl);

        // Type-specific controls (subclass)
        const typeCtrl = this.renderControls();
        if (typeCtrl) {
            typeCtrl.classList.add('color-group__type-ctrl');
            header.appendChild(typeCtrl);
        }

        // Axis curve pickers
        const curvePickers = this._buildCurvePickers();
        if (curvePickers) header.appendChild(curvePickers);

        // Steps stepper
        header.appendChild(this._buildStepper());

        // Copy JSON
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-json-button';
        copyBtn.textContent = 'Copy as JSON';
        copyBtn.addEventListener('click', () =>
            uiManager.copyToClipboard(this.getSwatchesAsJson(), copyBtn));
        header.appendChild(copyBtn);

        return header;
    }

    _buildCurvePickers() {
        const visible = Object.entries(this.eases).filter(([, v]) => v.visible);
        if (!visible.length) return null;

        const row = document.createElement('div');
        row.className = 'color-group__curves';

        visible.forEach(([axis, cfg]) => {
            const axisEl = document.createElement('div');
            axisEl.className = 'curve-axis';

            const lbl = document.createElement('span');
            lbl.className = 'curve-axis__label';
            lbl.textContent = axis.toUpperCase();
            axisEl.appendChild(lbl);

            CURVES.forEach(curve => {
                const btn = document.createElement('button');
                btn.className = 'curve-btn' +
                    (cfg.ease === curve.key ? ' curve-btn--active' : '');
                btn.title     = curve.label;
                btn.innerHTML = _curveSVG(curve.path);
                btn.addEventListener('click', () => {
                    this.eases[axis].ease = curve.key;
                    axisEl.querySelectorAll('.curve-btn').forEach((b, i) =>
                        b.classList.toggle('curve-btn--active',
                            CURVES[i].key === curve.key));
                    this._refresh();
                });
                axisEl.appendChild(btn);
            });

            row.appendChild(axisEl);
        });

        return row;
    }

    _buildStepper() {
        const wrap = document.createElement('div');
        wrap.className = 'color-group__stepper';

        const minus = document.createElement('button');
        minus.className   = 'stepper-btn';
        minus.textContent = '−';
        minus.addEventListener('click', () => this.setSteps(this.steps - 1));
        this._stepperMinus = minus;

        const display = document.createElement('span');
        display.className   = 'stepper-value';
        display.textContent = this.steps;
        this._stepperEl = display;

        const plus = document.createElement('button');
        plus.className   = 'stepper-btn';
        plus.textContent = '+';
        plus.addEventListener('click', () => this.setSteps(this.steps + 1));
        this._stepperPlus = plus;

        wrap.append(minus, display, plus);
        this._updateStepperBounds();
        return wrap;
    }

    _updateStepperBounds() {
        if (this._stepperMinus) this._stepperMinus.disabled = this.steps <= 2;
        if (this._stepperPlus)  this._stepperPlus.disabled  = this.steps >= 20;
    }

    // ── Core logic ─────────────────────────────────────────────────────────

    _refresh() {
        this.colors = this.generateColors();
        this.calculateContrast();
        this.updateSwatches();
    }

    calculateContrast() {
        if (!this.colors?.length) return;
        // Contrast measured against the lightest color in the strip
        const lightest = [...this.colors].sort((a, b) => b.oklch.l - a.oklch.l)[0];
        this.contrastRatios  = this.colors.map(c => c.contrast(lightest, 'WCAG21'));
        this.contrastMarkers = new Array(this.colors.length).fill('');

        const aaaIdx  = this.contrastRatios.findLastIndex(r => r >= 7);
        const aaIdx   = this.contrastRatios.findLastIndex(r => r >= 4.5);
        const aa18Idx = this.contrastRatios.findLastIndex(r => r >= 3);

        if (aa18Idx !== -1 && aa18Idx !== aaIdx  && aa18Idx !== aaaIdx)
            this.contrastMarkers[aa18Idx] = 'AA18';
        if (aaIdx   !== -1 && aaIdx   !== aaaIdx)
            this.contrastMarkers[aaIdx]   = 'AA';
        if (aaaIdx  !== -1)
            this.contrastMarkers[aaaIdx]  = 'AAA';
    }

    updateSwatches() {
        if (!this._swatchEl) return;

        // If the embedded input is currently focused, save focus state so we
        // can restore it after the DOM rebuild (which would otherwise lose focus).
        const inputWasFocused = this.embeddedInput &&
            document.activeElement === this.embeddedInput;
        const savedSelStart = inputWasFocused ? this.embeddedInput.selectionStart : null;
        const savedSelEnd   = inputWasFocused ? this.embeddedInput.selectionEnd   : null;
        const savedValue    = inputWasFocused ? this.embeddedInput.value          : null;

        this._swatchEl.innerHTML = '';

        this.colors.forEach((color, i) => {
            const hex      = color.to('srgb').toString({ format: 'hex' });
            const l        = color.oklch.l;
            const textClr  = l > 0.5 ? 'black' : 'white';
            const isAnchor = this.anchorIndices.includes(i);

            const swatch = document.createElement('div');
            swatch.className = 'color-swatch' +
                (isAnchor ? ' color-swatch--anchor' : '');
            swatch.style.backgroundColor = hex;
            swatch.setAttribute('tabindex', '0');
            swatch.setAttribute('role',       'button');
            swatch.setAttribute('aria-label', `Copy ${hex}`);

            // First anchor swatch with embedded input — skip normal hex label
            const isEmbedded = this.embeddedInput &&
                isAnchor && this.anchorIndices[0] === i;

            if (isEmbedded) {
                // Input + copy button in a flex row, anchored top-left of the swatch
                const row = document.createElement('div');
                row.className = 'hero-primary-row';

                Object.assign(this.embeddedInput.style, {
                    display:         'block',
                    position:        'static',
                    flex:            '0 0 auto',   // size to content, not stretch
                    minWidth:        '1ch',
                    width:           'auto',
                    background:      'transparent',
                    color:           textClr,
                    border:          'none',
                    outline:         'none',
                    boxSizing:       'border-box',
                    padding:         '0',
                    fontFamily:      'var(--typeface-heading)',
                    fontWeight:      'var(--font-weight-h1)',
                    fontSize:        'inherit',   // inherits clamp from .hero-primary-row
                    textTransform:   'uppercase',
                    caretColor:      textClr,
                    cursor:          'text',
                });
                row.appendChild(this.embeddedInput);

                // Icon-slot: identical construction to non-embedded swatches
                const embCopyIcon  = uiManager.createCopyIcon();
                const embCheckIcon = uiManager.createCheckIcon();
                embCopyIcon.style.color  = textClr;
                embCheckIcon.style.color = textClr;
                const embSlot = document.createElement('span');
                embSlot.className = 'icon-slot';
                embSlot.append(embCopyIcon, embCheckIcon);
                row.appendChild(embSlot);

                embSlot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const hexVal = this.embeddedInput?.value || '';
                    navigator.clipboard.writeText(hexVal).catch(() => {});
                    embCopyIcon.style.opacity  = '0';
                    embCheckIcon.style.opacity = '1';
                    setTimeout(() => {
                        embCopyIcon.style.opacity  = '';
                        embCheckIcon.style.opacity = '';
                    }, 1500);
                });

                swatch.appendChild(row);

                // Suppress click-to-copy on this swatch (user is typing)
                swatch.removeAttribute('role');
                swatch.removeAttribute('tabindex');
            } else {
                // Contrast ratio + hex label
                const info = document.createElement('div');
                info.className = 'hex-value-container';

                const ratio = document.createElement('span');
                ratio.className   = 'contrast-ratio';
                ratio.style.color = textClr;
                ratio.textContent = (this.contrastRatios[i] ?? 0).toFixed(2);
                info.appendChild(ratio);

                const hexVal = document.createElement('span');
                hexVal.className   = 'hex-value';
                hexVal.style.color = textClr;
                hexVal.textContent = hex;
                info.appendChild(hexVal);

                swatch.appendChild(info);
            }

            // WCAG contrast marker
            if (this.contrastMarkers[i]) {
                const mWrap = document.createElement('div');
                mWrap.className = 'swatch__MarkerContainer';
                const m = document.createElement('span');
                m.className   = 'swatch__Marker';
                m.textContent = this.contrastMarkers[i];
                m.setAttribute('data-level', this.contrastMarkers[i]);
                m.style.color = textClr;
                mWrap.appendChild(m);
                swatch.appendChild(mWrap);
            }

            // Anchor indicator dot + optional delete button
            if (isAnchor) {
                const dot = document.createElement('span');
                dot.className = 'swatch__anchor-dot';
                swatch.appendChild(dot);

                // Find which anchor object maps to this index
                const anchorObj = this.anchors.find((_, ai) =>
                    this.anchorIndices[ai] === i);
                if (anchorObj?.deletable && this.anchors.length > 2) {
                    const del = document.createElement('button');
                    del.className   = 'swatch__anchor-delete';
                    del.textContent = '×';
                    del.title       = 'Remove anchor from this group';
                    del.addEventListener('click', e => {
                        e.stopPropagation();
                        this.removeAnchor(anchorObj.id);
                    });
                    swatch.appendChild(del);
                }
            }

            // Copy icons — skip for embedded-input swatch
            if (!isEmbedded) {
                const copyIcon  = uiManager.createCopyIcon();
                const checkIcon = uiManager.createCheckIcon();
                copyIcon.style.color  = textClr;
                checkIcon.style.color = textClr;

                // icon-slot: both icons stacked at same position, toggled by opacity only
                const iconSlot = document.createElement('span');
                iconSlot.className = 'icon-slot';
                iconSlot.append(copyIcon, checkIcon);

                const infoEl = swatch.querySelector('.hex-value-container');
                if (infoEl) {
                    infoEl.append(iconSlot);
                } else {
                    swatch.append(iconSlot);
                }

                swatch.addEventListener('click', () => {
                    navigator.clipboard.writeText(hex);
                    copyIcon.style.opacity  = '0';
                    checkIcon.style.opacity = '1';
                    setTimeout(() => {
                        checkIcon.style.opacity = '';
                        copyIcon.style.opacity  = '';
                    }, 1500);
                });
            }

            uiManager.addColorTickerFunctionality(swatch);
            this._swatchEl.appendChild(swatch);
        });

        // Restore input focus and cursor after DOM rebuild
        if (inputWasFocused && this.embeddedInput) {
            this.embeddedInput.value = savedValue;
            this.embeddedInput.focus();
            this.embeddedInput.setSelectionRange(savedSelStart, savedSelEnd);
        }
    }

    getSwatchesAsJson() {
        const prefix = this.label?.toLowerCase().replace(/\s+/g, '') || 'color';
        const result = {};
        this.colors.forEach((c, i) => {
            result[`${prefix}${(i + 1) * 100}`] =
                c.to('srgb').toString({ format: 'hex' });
        });
        return JSON.stringify(result, null, 2);
    }
}

// ─── ScaleGroup ───────────────────────────────────────────────────────────────

export class ScaleGroup extends ColorGroup {
    /**
     * @param {object} cfg
     * @param {string}  cfg.label
     * @param {Color}   cfg.sourceColor
     * @param {number}  [cfg.steps=10]
     * @param {boolean} [cfg.isPrimaryBased=true]
     * @param {boolean} [cfg.isNeutral=false]
     * @param {number}  [cfg.neutralChroma=0.05]
     */
    constructor({ label, sourceColor, steps = 10,
                  isPrimaryBased = true, isNeutral = false,
                  neutralChroma = 0.05 }) {
        super({
            label,
            steps,
            anchors: [{ color: sourceColor, id: 'source', deletable: false }],
        });
        this.sourceColor    = sourceColor;
        this.isPrimaryBased = isPrimaryBased;
        this.isNeutral      = isNeutral;
        this.neutralChroma  = isNeutral ? neutralChroma : 0;
    }

    _curveConfig() {
        return {
            l: { visible: true,  ease: 'linear' },
            c: { visible: false, ease: 'linear' },
            h: { visible: false, ease: 'linear' },
        };
    }

    generateColors() {
        const src = this.sourceColor;
        if (!src?.oklch) return [];

        const colors = colorUtils.generateColorScale(src, {
            steps:         this.steps,
            startPoint:    {
                l: 0.02,
                c: this.isNeutral ? this.neutralChroma : src.oklch.c,
                h: src.oklch.h || 0,
            },
            endPoint:      {
                l: 0.95,
                c: this.isNeutral ? this.neutralChroma : src.oklch.c,
                h: src.oklch.h || 0,
            },
            interpolation:  this.eases.l.ease,
            lightnessEase:  this.eases.l.ease,
            chromaEase:    'constant',
            huePath:       'constant',
            includeSource: !this.isNeutral,
            isNeutral:      this.isNeutral,
            neutralChroma:  this.neutralChroma,
        });

        // Place anchor dot at the step nearest the source color's lightness
        const srcL = src.oklch.l;
        let anchorIdx = 0, minDist = Infinity;
        colors.forEach((c, i) => {
            const d = Math.abs(c.oklch.l - srcL);
            if (d < minDist) { minDist = d; anchorIdx = i; }
        });
        this.anchorIndices = [anchorIdx];

        return colors;
    }

    renderControls() {
        if (!this.isNeutral) return null;
        const wrap = document.createElement('div');
        wrap.className = 'toggle-comp neutral-chroma-toggle';
        wrap.innerHTML = `
            <span class="body-text-small">Chroma</span>
            <label class="switch">
                <input type="checkbox" ${this.neutralChroma > 0 ? 'checked' : ''}>
                <span class="slider round"></span>
            </label>`;
        wrap.querySelector('input').addEventListener('change', e => {
            this.neutralChroma = e.target.checked ? 0.05 : 0;
            this._refresh();
        });
        return wrap;
    }

    /** Called by colorManager on every color change */
    update({ primaryColor, secondaryColor }) {
        const next = this.isPrimaryBased ? primaryColor : secondaryColor;
        if (!next?.oklch) return;
        this.sourceColor    = next;
        this.anchors[0].color = next;
        this._refresh();
    }
}

// ─── HarmonyGroup ─────────────────────────────────────────────────────────────

export class HarmonyGroup extends ColorGroup {
    /**
     * @param {object} cfg
     * @param {string} cfg.label
     * @param {Color}  cfg.primaryColor
     * @param {Color}  cfg.secondaryColor
     * @param {number} [cfg.steps=6]
     * @param {string} [cfg.huePath='shorter']   'shorter'|'longer'|'full-circle'
     * @param {string} [cfg.harmonyType='complementary']
     */
    constructor({ label, primaryColor, secondaryColor, steps = 6,
                  huePath = 'shorter', harmonyType = 'complementary',
                  embeddedInput = null, embeddedCopy = null }) {
        super({
            label,
            steps,
            anchors: [
                { color: primaryColor,   id: 'primary',   deletable: false },
                { color: secondaryColor, id: 'secondary', deletable: false },
            ],
            embeddedInput,
            embeddedCopy,
        });
        this.huePath     = huePath;
        this.harmonyType = harmonyType;
        // Anchor positions updated in generateColors()
        this.anchorIndices = [0, steps - 1];

        // DOM refs for icon updates
        this._pathBtns = [];
    }

    _curveConfig() {
        return {
            l: { visible: true, ease: 'linear' },
            c: { visible: true, ease: 'linear' },
            h: { visible: true, ease: 'linear' },
        };
    }

    generateColors() {
        const primary   = this.anchors[0]?.color;
        const secondary = this.anchors[1]?.color;
        if (!primary?.oklch || !secondary?.oklch) return [];

        const { steps } = this;
        const lEase = this.eases.l.ease;
        const cEase = this.eases.c.ease;
        const hEase = this.eases.h.ease;

        this.anchorIndices = [0, steps - 1];
        const colors = new Array(steps);

        const hue1    = primary.oklch.h   ?? 0;
        const hue2    = secondary.oklch.h ?? 0;
        const hueDiff = (hue2 - hue1 + 360) % 360;

        if (this.huePath === 'full-circle') {
            for (let i = 0; i < steps; i++) {
                const t  = i / Math.max(steps - 1, 1);
                const h  = (360 * i / steps + hue1) % 360;
                const lv = colorUtils.interpolate(primary.oklch.l, secondary.oklch.l, t, lEase);
                const cv = colorUtils.interpolate(primary.oklch.c, secondary.oklch.c, t, cEase);
                colors[i] = new colorUtils.Color('oklch', [lv, cv, h]);
            }
            colors[0]         = primary;
            colors[steps - 1] = secondary;
        } else {
            let shorterPath, longerPath;
            if (hueDiff <= 180) {
                shorterPath = hueDiff;
                longerPath  = hueDiff - 360;
            } else {
                shorterPath = hueDiff - 360;
                longerPath  = hueDiff;
            }
            const selectedPath = this.huePath === 'shorter' ? shorterPath : longerPath;

            colors[0]         = primary;
            colors[steps - 1] = secondary;

            for (let i = 1; i < steps - 1; i++) {
                const t  = i / (steps - 1);
                const tH = colorUtils.interpolate(0, 1, t, hEase);
                const h  = (hue1 + selectedPath * tH + 360) % 360;
                const lv = colorUtils.interpolate(primary.oklch.l, secondary.oklch.l, t, lEase);
                const cv = colorUtils.interpolate(primary.oklch.c, secondary.oklch.c, t, cEase);
                colors[i] = new colorUtils.Color('oklch', [lv, cv, h]);
            }
        }

        return colors;
    }

    renderControls() {
        const icons = HARMONY_ICONS[this.harmonyType] ?? HARMONY_ICONS.complementary;
        const paths = ['longer', 'shorter', 'full-circle'];
        const labels = ['Wide arc', 'Narrow arc', 'Full circle'];

        const wrap = document.createElement('div');
        wrap.className = 'harmony-path-ctrl';

        this._pathBtns = [];
        paths.forEach((path, i) => {
            const btn = document.createElement('button');
            btn.className = 'harmony-path-btn' +
                (this.huePath === path ? ' harmony-path-btn--active' : '');
            btn.title     = labels[i];
            btn.innerHTML = icons[i];
            btn.addEventListener('click', () => {
                this.huePath = path;
                this._pathBtns.forEach((b, j) =>
                    b.classList.toggle('harmony-path-btn--active', j === i));
                this._refresh();
            });
            wrap.appendChild(btn);
            this._pathBtns.push(btn);
        });

        return wrap;
    }

    /**
     * Called by app.js when the global harmony mode changes.
     * Updates the path-button icons to match the new mode.
     */
    setHarmonyType(type) {
        this.harmonyType = type;
        const icons = HARMONY_ICONS[type] ?? HARMONY_ICONS.complementary;
        this._pathBtns.forEach((btn, i) => {
            btn.innerHTML = icons[i];
        });
    }

    /** Called by colorManager on every color change */
    update({ primaryColor, secondaryColor }) {
        if (!primaryColor?.oklch || !secondaryColor?.oklch) return;
        this.anchors[0].color = primaryColor;
        this.anchors[1].color = secondaryColor;
        this._refresh();
    }
}
