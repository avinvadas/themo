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
    if (this.primaryColor && this.secondaryColor) {
      const avgLightness = (this.primaryColor.lch.l + this.secondaryColor.lch.l) / 2
      const maxChroma = Math.max(this.primaryColor.lch.c, this.secondaryColor.lch.c)

      // Fixed hue ranges for each indication type
      this.indicationColors = {
        alert: new Color('lch', [
          avgLightness,
          maxChroma,
          15  // Center of 0-30° range
        ]),
        warning: new Color('lch', [
          avgLightness,
          maxChroma,
          75  // Center of 60-90° range
        ]),
        success: new Color('lch', [
          avgLightness,
          maxChroma,
          115  // Center of 100-130° range
        ]),
        info: new Color('lch', [
          avgLightness,
          maxChroma,
          255  // Center of 240-270° range
        ])
      }

      // Debug log
      console.log('Updated indication colors:', {
        alert: this.indicationColors.alert.lch,
        warning: this.indicationColors.warning.lch,
        success: this.indicationColors.success.lch,
        info: this.indicationColors.info.lch
      })
    }
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
}

