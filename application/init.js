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

console.info(app.createForm(form_settings));


import { TForm } from '../delphi/Forms.js'

/*

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

let mainForm = new TForm(form_settings);

/* Create form */
//console.log(mainForm);
