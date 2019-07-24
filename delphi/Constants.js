/**
 * Constants
 */

const DISABLED_CLASS_NAME = 'Disabled';
const CHECKED_CLASS_NAME = 'Checked';
const UNCHECKED_CLASS_NAME = 'Unchecked';
const INVALIDATED_CLASS_NAME = 'Invalidated';
const BRING_TO_FRONT_Z_INDEX = 1000;
const ANIMATION_SPEED = 200;
const ANIMATION_FUNCTION_LINEAR = (timeFraction) => timeFraction;
const ANIMATION_FUNCTION_ARC = (timeFraction) => 1 - Math.sin(Math.acos(timeFraction));

const OVERLAY_Z_INDEX = 1000000;
const OVERLAY_PROPERTIES = {
    name: 'overlay',
    className: 'TOverlay',
    visible: false
}

export {
    DISABLED_CLASS_NAME, 
    CHECKED_CLASS_NAME,
    UNCHECKED_CLASS_NAME,
    INVALIDATED_CLASS_NAME,
    BRING_TO_FRONT_Z_INDEX,

    ANIMATION_SPEED,
    ANIMATION_FUNCTION_LINEAR,
    ANIMATION_FUNCTION_ARC,

    OVERLAY_Z_INDEX,
    OVERLAY_PROPERTIES
}

