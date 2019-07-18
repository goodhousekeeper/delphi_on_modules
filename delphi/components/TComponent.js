export default class TComponent extends Object {
    constructor(properties) {
        super(properties);
        this.properties = properties;
    }

    setProperty = function(name, value) {
        this.properties[name] = value;
    }

    getProperty = function(name) { 
        return this.properties.hasOwnProperty(name) ? this.properties[name] : undefined;
    }

}