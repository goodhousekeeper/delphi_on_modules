import * as Constants from './Constants.js'
import Utils from './Utils.js'

/* import application instance */
import TApplication from './TApplication.js'

/* Import essential components module */
import TComponent from './TComponent.js'
import TControl from './TControl.js'
import TOverlay from './TOverlay.js'
import TForm from './TForm.js'
import TPicture from './TPicture.js'
import * as Buttons from './Buttons.js'
import * as Inputs from './Inputs.js'
import * as Panels from './Panels.js'


TApplication.addComponentsToLibrary(Buttons);
TApplication.addComponentsToLibrary(Inputs);

/* Create  core Objects */
TApplication.createObject(Constants.OVERLAY_PROPERTIES);

export {
    Constants,
    Utils,

    TApplication,

    TComponent,
    TControl,
    TOverlay,
    TForm,
    TPicture,

    Buttons,
    Inputs,
    Panels
}