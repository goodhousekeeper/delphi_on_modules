export default class TComponent {
    constructor(properties) {
        Object.defineProperties(this, {
            _properties: {
                value: properties
            }
        });
    }

    setProperty(name, value) {
        this._properties[name] = value;
    }

    getProperty(name) { 
        return this._properties.hasOwnProperty(name) ? this._properties[name] : undefined;
    }

}