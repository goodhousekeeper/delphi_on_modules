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
    }
}

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

/* Application Instance Initialize */  
document.body.classList.add('TApplication');  
TApplication.caption = properties.caption;

/* Named and default exports */
export default TApplication;
export { TApplication } ;