import ObserverManager from "./observerManager.js"
import { Color, isValidColor } from "./colorUtils.js"

/**
 * ColorManager Class
 * Manages color state and relationships between primary, secondary, tertiary, and quaternary colors
 * Implements Observer pattern for UI synchronization
 */

export default class ColorManager {
  /**
   * State Initialization
   */
  constructor() {
    this.primaryColor = null
    this.secondaryColor = null
    this.tertiaryColor = null
    this.quaternaryColor = null
    this.observerManager = new ObserverManager()
    this.indicationColors = {
      alert: null,
      warning: null,
      success: null,
      info: null,
    }
  }

  /**
   * Primary Color Management
   * Handles primary color updates and triggers related color calculations
   */
  setPrimaryColor(color, segCtrl) {
    if (color && color instanceof Color) {
      this.primaryColor = color
      this.updateTertiaryColor(segCtrl)
      this.updateQuaternaryColor(segCtrl)
      this.updateIndicationColors()
      this.notify()
    }
  }

  /**
   * Secondary Color Management
   * Handles secondary color updates and dependent color calculations
   */
  setSecondaryColor(color) {
    if (color && color instanceof Color) {
      this.secondaryColor = color
      this.updateTertiaryColor()
      this.updateQuaternaryColor()
      this.updateIndicationColors()
      this.notify()
    }
  }

  /**
   * Color Relationship Management
   * Handles tertiary and quaternary color calculations
   */
  updateTertiaryColor(segCtrl) {
    // Existing code unchanged
  }

  updateQuaternaryColor(segCtrl) {
    // Existing code unchanged
  }

  /**
   * Indication Colors Management
   * Handles utility color calculations based on primary and secondary colors
   */
  updateIndicationColors() {
    if (!this.primaryColor || !this.secondaryColor) return;

    const avgLightness = (this.primaryColor.oklch.l + this.secondaryColor.oklch.l) / 2;
    const maxChroma = Math.max(this.primaryColor.oklch.c, this.secondaryColor.oklch.c);
    const avgHue = ((this.primaryColor.oklch.h || 0) + (this.secondaryColor.oklch.h || 0)) / 2;

    // Define hue ranges for each type (OKLCH hues are the same as LCH — degrees 0–360)
    const hueRanges = {
      alert:   { min: 0,   max: 30,  target: 15  },  // Red
      warning: { min: 60,  max: 90,  target: 75  },  // Yellow
      success: { min: 100, max: 130, target: 115 },  // Green
      info:    { min: 240, max: 270, target: 255 }   // Blue
    };

    // Update each indication color
    Object.entries(hueRanges).forEach(([type, range]) => {
      let balancedHue = range.target;
      if (avgHue >= range.min && avgHue <= range.max) {
        balancedHue = avgHue;
      }

      this.indicationColors[type] = new Color('oklch', [
        avgLightness,
        maxChroma,
        balancedHue
      ]);
    });

    // Notify observers of the update
    this.notify()
  }

  getIndicationColor(type) {
    return this.indicationColors[type]
  }

  getIndicationColors() {
    return this.indicationColors
  }

  /**
   * Observer Pattern Implementation
   * Handles notifications and observer management
   */
  notify() {
    this.observerManager.notifyObservers({
      primaryColor: this.primaryColor,
      secondaryColor: this.secondaryColor,
      tertiaryColor: this.tertiaryColor,
      quaternaryColor: this.quaternaryColor,
      indicationColors: this.indicationColors,
    })
  }

  addObserver(observer) {
    this.observerManager.addObserver(observer)
  }

  removeObserver(observer) {
    this.observerManager.removeObserver(observer)
  }

  /**
   * Utility Functions
   * Helper methods for color updates and calculations
   */
  updateColors(primaryColor, secondaryColor) {
    // ... existing color updates ...

    // Update indication colors
    this.updateIndicationColors(primaryColor, secondaryColor);

    // ... rest of the method ...
  }
}

