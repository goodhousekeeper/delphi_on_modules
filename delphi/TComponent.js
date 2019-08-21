import TApplication from './TApplication.js'

export default class TComponent {
  constructor (properties) {
    Object.defineProperties(this, {
      _properties: {
        value: properties,
        configurable: true
      }
    })
  }

  destroy() {
    delete this._properties
  }

  setProperty (name, value) {
    this._properties[name] = value
  }

  getProperty (name) {
    return name in this._properties ? this._properties[name] : undefined
  }

  createContent () {
    const contentProperties = this.getProperty('contentProperties')
    if (!contentProperties) {
      return this
    }

    contentProperties.forEach((objectProperties) => {
      objectProperties.ownerName = this.getProperty('registerName')
      TApplication.createObject(objectProperties)
    })
  }
}
