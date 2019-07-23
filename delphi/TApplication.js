import * as Forms from './Forms.js';

let TApplication = Object.create(null);

/* Store application properties */
let properties = {
    /* component library  */
    library: {},
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
    }
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
    library: {
        get: () => properties.library
    },
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
    createForm: {
        value:  function (properties) {
            if (this[properties.name]) {
                throw new Error(`Form with name "${properties.name}" already exists.`)
            }
            let newForm = new this.library[properties.class](properties);
            Object.defineProperty(this, properties.name, {
               value: newForm
              })
            return newForm;
        }
    },
    addComponentsToLibrary: {
        value: function(components) {
            for (let [key, value] of Object.entries(components)) {
                if (this.library[key]) {
                    throw new Error(`Component with name ${value.name} already exists`);
                } else {
                    this.library[key] = value;
                }
            }
        }
    }

});

/* ----------------------------------------------------------------------------- */

/* Application Instance Initialize */  
setBaseStyle();
TApplication.caption = properties.caption;
TApplication.addComponentsToLibrary(Forms);


/* ----------------------------------------------------------------------------- */

/* Named and default exports */
export default TApplication;
export { TApplication } ;