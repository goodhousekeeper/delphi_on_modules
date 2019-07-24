export default class TComponent extends Object {
    constructor(properties) {
        super(properties);
        this._properties = properties;
    }

    setProperty(name, value) {
        this._properties[name] = value;
    }

    getProperty(name) { 
        return this._properties.hasOwnProperty(name) ? this._properties[name] : undefined;
    }

}