/* Import components module */
import Utils from './Utils.js';
import * as Constants from './Constants.js';
import * as Forms from './Forms.js';

/* Application instance */
let TApplication = Object.create(null);
/* Private properties */
let componentLibrary = Object.create(null);
let objectStorage = Object.create(null);
let modalStack = [];
let caption = 'Delphi.js';
let animationEnabled = true;

/* ----------------------------------------------------------------------------- */

Object.defineProperties(TApplication, {
    caption: {
        get: () => caption,
        set: (newCaption) => {
            caption = newCaption;
            document.title = newCaption;
        }
    },
    modalStack: {
        value: modalStack
    },
    contentContainer: {
        value: document.body
    },
    animationEnabled: {
        get: () => animationEnabled,
        set: (value) => {
            animationEnabled = Boolean(value);
        }
    },
    createObject: {
        value:  function (properties) {
            const ownerName = properties.ownerName ? properties.ownerName + '.' : '';
            const ownerObject = this.getObject(ownerName);
            let newObject;
            properties.registerName = `${ownerName}${properties.name}`;
            properties.ownerObject = ownerObject;
            if (this.getObject(properties.registerName)) {
                throw new Error(`Object with name "${properties.registerName}" already exists.`)
            }
            newObject = new componentLibrary[properties.className](properties);
            objectStorage[properties.registerName] = newObject;
            Object.defineProperty(ownerObject, properties.name, {
                value: newObject,
                configurable: true
            })
            return newObject;
        }
    },
    getObject:{
        value: function(objectName)  {
            if (objectName === '') {
                return this;
            } else if (objectStorage[objectName]) {
                return objectStorage[objectName];
            } else {
                return false;
            }
        }
    },
    addComponentsToLibrary: {
        value: function(components) {
            for (let [key, value] of Object.entries(components)) {
                if (componentLibrary[key]) {
                    throw new Error(`Component with name ${value.name} already exists`);
                } else {
                    componentLibrary[key] = value;
                }
            }
        }
    }

});

/* ----------------------------------------------------------------------------- */

/* Application Instance Initialize */  
TApplication.addComponentsToLibrary(Forms);
TApplication.caption = caption;
Utils.addStyleNode(Constants.APPLICATION_STYLE);
document.body.classList.add('TApplication'); 
/* Add system Objects */
TApplication.createObject(Constants.OVERLAY_PROPERTIES);


/* ----------------------------------------------------------------------------- */

/* Named and default exports */
export default TApplication;
export { TApplication } ;