let TApplication = Object.create(null);

/* Store application properties */
let properties = {
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

Object.defineProperty(TApplication, 'caption', {
    get: () => properties.caption,
    set: (newCaption) => {
        properties.caption = newCaption;
        document.title = newCaption;
    }
})

Object.defineProperty(TApplication, 'animationEnabled', {
    get: () => properties.animation.enabled,
    set: function (value) {
        properties.animation.enabled = Boolean(value)
    }
})

/* ----------------------------------------------------------------------------- */

/* Application Instance Initialize */  

setBaseStyle();
TApplication.caption = properties.caption;

/* Named and default exports */
export default TApplication;
export { TApplication } ;