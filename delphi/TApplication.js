/* Import components module */
import * as Forms from './Forms.js';
/* Application instance */
let TApplication = Object.create(null);
/* Private properties */
let componentLibrary = {};
let objectStorage = {};
let caption = 'Delphi.js';
let animation = {
    /* use or not */
    enabled: true,
    /* duration in milliseconds */
    speed: 200,
    /* timing functions */
    function: {
        linear: (timeFraction) => timeFraction,
        timingArc: (timeFraction) => 1 - Math.sin(Math.acos(timeFraction))
    }
}

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
        get: () => caption,
        set: (newCaption) => {
            caption = newCaption;
            document.title = newCaption;
        }
    },
    animationEnabled: {
        get: () => animation.enabled,
        set: (value) => {
            animation.enabled = Boolean(value);
        }
    },
    createForm: {
        value:  function (properties) {
            if (this[properties.name]) {
                throw new Error(`Form with name "${properties.name}" already exists.`)
            }
            let newForm = new componentLibrary[properties.class](properties);
            Object.defineProperty(this, properties.name, {
               value: newForm
              })
            return newForm;
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
setBaseStyle();
TApplication.caption = caption;
TApplication.addComponentsToLibrary(Forms);


/* ----------------------------------------------------------------------------- */

/* Named and default exports */
export default TApplication;
export { TApplication } ;