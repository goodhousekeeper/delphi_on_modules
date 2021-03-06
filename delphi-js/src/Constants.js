/**
 * Constants
 */
const APPLICATION_STYLES = `
/* Reset styles, styles for TApplication,  setting up css variables */

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
    overflow: auto;
    
    --background-color: #E6E6E6; 
    --background-image: url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQMAAAC6caSPAAAAAXNSR0IArs4c6QAAAAZQTFRF////zsrFFOhhzwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfbCA8IIAxOHyTqAAAAbElEQVR42u3PMQ0AAAgDsMlHNhqWcHC0Dpqp5S0XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXF5cjC3IDYNdXepeXAAAAAElFTkSuQmCC");
    --background-image-size: auto;   
    --background-image-repeat: repeat;
    --background-image-position: 0% 0%;  
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; 
    --font-size: 14px;
    --font-color: #1F2933;
    --font-disabled-color: #ACA899;
    --font-shadow-color: #FFF;
    --form-background-color: #EEEBD6;
    --form-caption-font-color: #FFF;
    --form-caption-font-shadow-color: #072BA2;
    --overlay-background-color: rgba(0, 0, 0, 0.25);
    --button-background-color: #F3F3F3;
    --button-border-color: #003C74;
    --button-active-background-color: #E3E3DC;
    --button-disabled-background-color: #F5F4EA;
    --button-disabled-border-color: #C9C7BA;
    --panel-border-color: #ACA899;
    --panel-border-shadow-color: #FFF;
    --panel-disabled-border-color: #C9C7BA;
    --input-background-color: #FFF;
    --input-border-color: #7F9DB9;
    --input-invalidated-background-color: #FFE3E3;
    --input-invalidated-border-color: #E12D39;
    --input-disabled-background-color: #F5F4EA;    
    --input-disabled-border-color: #C9C7BA;
}

body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-attachment: fixed;
    background-color: var(--background-color);
    background-image: var(--background-image);
    background-size: var(--background-image-size);
    background-repeat: var(--background-image-repeat);
    background-position: var(--background-image-position);
    font-family: var(--font-family);
    font-size: var(--font-size);
}

[contenteditable] {
    -webkit-user-select: text;
    user-select: text;
}
`;

const STYLE_TAG_TITLE = 'Delphi.js';

const DISABLED_CLASS_NAME = 'Disabled';
const CHECKED_CLASS_NAME = 'Checked';
const UNCHECKED_CLASS_NAME = 'Unchecked';
const INVALIDATED_CLASS_NAME = 'Invalidated';
const BRING_TO_FRONT_Z_INDEX = 1000;
const ANIMATION_SPEED = 500;
const ANIMATION_FUNCTION_LINEAR = (timeFraction) => timeFraction;
const ANIMATION_FUNCTION_ARC = (timeFraction) => 1 - Math.sin(Math.acos(timeFraction));

const OVERLAY_Z_INDEX = 1000000;
const OVERLAY_PROPERTIES = {
    name: 'overlay',
    className: 'TOverlay',
    visible: false
};

const MODAL_RESULT_CLOSE = 'mrClose';

/* ------------------------------------------------------------------------------------------ */
export {
    APPLICATION_STYLES,

    STYLE_TAG_TITLE,

    DISABLED_CLASS_NAME,
    CHECKED_CLASS_NAME,
    UNCHECKED_CLASS_NAME,
    INVALIDATED_CLASS_NAME,
    BRING_TO_FRONT_Z_INDEX,

    ANIMATION_SPEED,
    ANIMATION_FUNCTION_LINEAR,
    ANIMATION_FUNCTION_ARC,

    OVERLAY_Z_INDEX,
    OVERLAY_PROPERTIES,

    MODAL_RESULT_CLOSE
}
