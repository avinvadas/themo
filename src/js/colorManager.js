import ObserverManager from "./observerManager.js"
import { Color, isValidColor } from "./colorUtils.js"

export default class ColorManager {
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

  setPrimaryColor(color, segCtrl) {
    if (color && color instanceof Color) {
      this.primaryColor = color
      this.updateTertiaryColor(segCtrl)
      this.updateQuaternaryColor(segCtrl)
      this.updateIndicationColors()
      this.notify()
    }
  }

  setSecondaryColor(color) {
    if (color && color instanceof Color) {
      this.secondaryColor = color
      this.updateTertiaryColor()
      this.updateQuaternaryColor()
      this.updateIndicationColors()
      this.notify()
    }
  }

  updateTertiaryColor(segCtrl) {
    // Existing code unchanged
  }

  updateQuaternaryColor(segCtrl) {
    // Existing code unchanged
  }

  updateIndicationColors() {
    if (!this.primaryColor || !this.secondaryColor) return;

    const avgLightness = (this.primaryColor.lch.l + this.secondaryColor.lch.l) / 2;
    const maxChroma = Math.max(this.primaryColor.lch.c, this.secondaryColor.lch.c);
    const avgHue = (this.primaryColor.lch.h + this.secondaryColor.lch.h) / 2;

    // Define hue ranges for each type
    const hueRanges = {
      alert: { min: 0, max: 30, target: 15 },    // Red
      warning: { min: 60, max: 90, target: 75 },  // Yellow
      success: { min: 100, max: 130, target: 115 }, // Green
      info: { min: 240, max: 270, target: 255 }    // Blue
    };

    // Update each indication color
    Object.entries(hueRanges).forEach(([type, range]) => {
      // Calculate balanced hue within allowed range
      let balancedHue = range.target;
      if (avgHue >= range.min && avgHue <= range.max) {
        balancedHue = avgHue;
      }

      this.indicationColors[type] = new Color('lch', [
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

  updateColors(primaryColor, secondaryColor) {
    // ... existing color updates ...

    // Update indication colors
    this.updateIndicationColors(primaryColor, secondaryColor);

    // ... rest of the method ...
  }
}

