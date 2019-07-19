export default class TComponent extends Object {
    constructor(properties) {
        super(properties);
        this._properties = properties;
    }

    setProperty = function(name, value) {
        this._properties[name] = value;
    }

    getProperty = function(name) { 
        return this._properties.hasOwnProperty(name) ? this._properties[name] : undefined;
    }

}