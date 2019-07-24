/* Import components module */
import Utils from './Utils.js';
import * as Constants from './Constants.js';
import * as Forms from './Forms.js';

/* Application instance */
let TApplication = Object.create(null);
/* Private properties */
let componentLibrary = Object.create(null);
let objectStorage = Object.create(null);
let caption = 'Delphi.js';
let animationEnabled = true;

const TApplicationStyle = `
* {
    margin: 0;
    padding: 0;
    border: 0 none;
    background-color: transparent;
    position: absolute;
  }
  *:focus {
    outline: none;
  }

  html {
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    overflow: auto;
    color: #444444;
  }

  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #E6E6E6;
    background-image: url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQMAAAC6caSPAAAAAXNSR0IArs4c6QAAAAZQTFRF////zsrFFOhhzwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfbCA8IIAxOHyTqAAAAbElEQVR42u3PMQ0AAAgDsMlHNhqWcHC0Dpqp5S0XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXF5cjC3IDYNdXepeXAAAAAElFTkSuQmCC');
    background-size: auto;
    background-repeat: repeat;
    --form-back-layer: #ECE9D6;
    --form-caption-color: #FFF;
    --form-caption-shadow-color: #072BA2;
  }
`;

/* ----------------------------------------------------------------------------- */

Object.defineProperties(TApplication, {
    caption: {
        get: () => caption,
        set: (newCaption) => {
            caption = newCaption;
            document.title = newCaption;
        }
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
Utils.addStyleNode(TApplicationStyle);
document.body.classList.add('TApplication'); 
/* Add system Objects */
TApplication.createObject(Constants.OVERLAY_PROPERTIES);


/* ----------------------------------------------------------------------------- */

/* Named and default exports */
export default TApplication;
export { TApplication } ;