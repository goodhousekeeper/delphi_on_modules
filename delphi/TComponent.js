import TApplication from './TApplication.js';

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

    createContent() {
        const ownerName = this.getProperty('ownerName');
        const content = this.getProperty('content');
        if (!content) {
            return this;
        }
        content.forEach((objectProperties) => {
            objectProperties.ownerName = this.getProperty('registerName');
            TApplication.createObject(objectProperties);

        });
    }
}