import { TApplication as app } from '../delphi/TApplication.js';

/* Set up our application instance */
app.caption = 'New project on Delphi.js';



const form_settings = {
    name: "mainForm",
    "caption": "Delphi.js Boilerplate - Main Form. It is sizeable and draggable",
    "top": 50,
    "right": 50,
    "bottom": 50,
    "left": 50,
    "minWidth": 700,
    "minHeight": 600,
    "sizeable": true,
    "visible": true,
}

let form = app.createForm(form_settings);
form.getProperty('name')
console.info(app.caption)