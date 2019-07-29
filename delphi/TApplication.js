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
let icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAwAAAAMADO7oxXAAAEhklEQVRo3u2aPXLjOBCFP+86NxMrVcd24huwb7K6CZs30VGaN1CiiaHUTOgTeAIAEqkfivoZ21O1r4plgwaBfo2HBhow/OV4uLUBM1OgNLMpdfu/1/cg8HiHNkrgvPWHuAuBq0bAzKr4o2+3gRKf0x8OiqqKqmJmF9uRbfj3gg9UVf9zd23bVtu2lSACgwcozjTUrw90IRBCyM4ME82psg2XSGgrlfV6fdSjZ6E6KAZ3gjupXQN8qj+zDZOGzsw+3R13v9zoaR30Sw8j1SrAqgqaRnHX8UmcI4y7x7Hd8+AoQogPDCRzFKr9+hXQkEYj2wDGyws6m0Xj39+fHfB/zphRAnY1Aff4ZCJjBHYELfU7sAGw2QwtS3BXfv16dTOrR4brCtlkgzkekCwbO+aI4VqRBsLpy6YftU5KaLLXe1KREMh+FCFGJZQYXEIiFMA96iNJayHCqutYdd2enByRgAg0Dby/t87eRB8lcNZbmUDyuvS9vi1o6jMR8AAeohVJOgsRliHsCGxl54hAWUJdA6zdbD1YAA8kNFikThE4JZVBIaI/9PtSlMUCWSwAWIbAcm+ufFZG08SuzI5Hp4MR8GTY3sQaQmTnqfxdcroAuIKE+ABFUSAihJ4zRARREFnGOl0BFCxEKIoVRbGiaSCE3KofNeU0gbGJm8PiHgHtE1AfJ6CKyJL5PBEIcfgWIog487kn2Qg7GU4gcBHMUoxgcqQSEUSEstTB+4UIqjp4P6bijME6YGbV6+vrSPXbURSrrWz6eHrave+6NzabBagS6KniCPZHwJ6fn/+k/RTFivncj74vihUAHx9vhLAA9f5+aRKBb0fTeIpIPqn+QEJXbRmuRN0oHmRbzrLZrgcT8W0EzJVmsyOQZXMTga+AufJQ28H7ZQjoiNYnEVDVFMcvb+gWbDYLuu7tqm9/BIEQridwVRQydarSj0rhonZcMVemZ5KH2J8D1rbtaGumTjkPQFw934riJhKjcI8biZGgsr8S1+v1epRAVToqP5TAAGaDuWDqfFZ2WO3E+/txcBs7NzpGoCFlf0LcB/Zl04fIkqen1R8zfgqOTWJPj2UCVelHP85b4Z9GABgexH45dhnf2XOr0TAaE+pA02hKyw9Ho+ve+Ph4A5Z3M16ICY9PWI9GtxIigbJ03JXlNmYPsd363gsTIk8fByOQk/oqJdR1neR0JDW6dOt7znDcs3Rt6v3BgICZVS8va53N2nQOs8sYadt4tFCBB6HZCOHCneM5r0t0kBEj4SQcZGSzWUtZ5oQaN0sXEfE0WAGajSQ5hduNzwR2dwUXXXw8Zs9zIJthBMhBqa5TjurOpEuNUzg4QpwumwGBUdkMnQSkHavkYyGPg+DTOgO2x4aqStu23tu6TJbNgABjshkhEI+FjG18vYSAOxq97uv1ur5lzXk0s3RXZefuqmpgrLPPKR2qqrn7TUYPCHDdDeOPwSNQb+8B/kJ8eVJ/b9x6sFX1C7urAk+FGGG7bkXXLeO7tlXbfdLYLfkkt/+rwdmJa2f+bDfe2P/1EvqfwHfjN57qfUzoi+OGAAAAJXRFWHRjcmVhdGUtZGF0ZQAyMDEwLTA3LTI3VDEyOjEyOjQ3KzAwOjAwA3zMRwAAACV0RVh0bW9kaWZ5LWRhdGUAMjAxMC0wNy0yN1QxMjoxMjo0NyswMDowMFzNunMAAAAASUVORK5CYII=';
let mainFormName;
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
    icon: {
        get: () => icon,
        set: (newIcon) => {
            icon = newIcon;
            Utils.addFaviconNode(newIcon);
            TApplication.getObjectsByClassName('TForm').forEach(function (form) {
                console.info('form.icon', form.icon)
                if (form.icon) {
                    form.icon = newIcon;
                }
            })
        }
    },
    mainFormName: {
        get: () => mainFormName,
        set: (newName) => mainFormName = newName
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
    getObjectsByClassName: {
        value: function(className) {
            let result = [];
            for (let [key, value] of Object.entries(objectStorage)) {
                {
                    if (objectStorage[key].getProperty('className') === className) {
                        result.push(value);
                    }
                }

            }
            return result;
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
TApplication.icon = icon;
Utils.addStyleNode(Constants.APPLICATION_STYLE);
document.body.classList.add('TApplication'); 
/* Add system Objects */
TApplication.createObject(Constants.OVERLAY_PROPERTIES);


/* ----------------------------------------------------------------------------- */

/* Named and default exports */
export default TApplication;
export { TApplication } ;