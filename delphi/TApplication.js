import { TForm } from './Forms.js';

let TApplication = Object.create(null);

/* Store application properties */
let properties = {
    /* */
    pathToRoot: window.origin,
    /* default caption */
    caption: 'Delphi.js',
    /* in-app animation */
    animation: {
        /* use or not */
        enabled: true,
        /* duration in milliseconds */
        speed: 200,
        /* timing functions */
        function: {
            linear: (timeFraction) => timeFraction,
            timingArc: (timeFraction) => 1 - Math.sin(Math.acos(timeFraction))
        }
    },
    /* storage for components */
    componentStorage: {}
}

/* ----------------------------------------------------------------------------- */

const setBaseStyle = () => {
    const style = `
{
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
`;
    let styleNode = document.createElement('style');
    styleNode.innerHTML = style;
    document.getElementsByTagName('head')[0].appendChild(styleNode);
    document.body.classList.add('TApplication');  
}


/* ----------------------------------------------------------------------------- */
Object.defineProperties(TApplication, {
    caption: {
        get: () => properties.caption,
        set: (newCaption) => {
            properties.caption = newCaption;
            document.title = newCaption;
        }
    },
    animationEnabled: {
        get: () => properties.animation.enabled,
        set: (value) => {
            properties.animation.enabled = Boolean(value);
        }
    },
    addComponent: {
        value: function(componentName, componentObject) {
            if (properties.componentStorage.hasOwnProperty(componentName)) {
                throw new Error(`Component with name ${componentName} already exists`);
            }
            properties.componentStorage[componentName] = componentObject;

        }
    },
    getComponent: {
        value: function(componentName) {
            if (properties.componentStorage.hasOwnProperty(componentName)) {
                return properties.componentStorage[componentName]
            } else {
                return false;
            }    
        }
    },
    deleteComponent: {
        value: function(componentName) {
            if (properties.componentStorage.hasOwnProperty(componentName)) {
                delete properties.componentStorage[componentName]
            } else {
                return false;
            }              
        }
    },

    createForm: {
        value:  function (properties) {
            let newForm = new TForm (properties);
            this.addComponent(properties.name, newForm);
            Object.defineProperty(this, properties.name, {
                get: () => this.getComponent(properties.name)
              })
            return newForm;
        }
    }
});

/* ----------------------------------------------------------------------------- */

/* Application Instance Initialize */  
setBaseStyle();
TApplication.caption = properties.caption;

/* ----------------------------------------------------------------------------- */

/* Named and default exports */
export default TApplication;
export { TApplication } ;