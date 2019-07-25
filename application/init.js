/* Get application instance */
import { TApplication as app } from '../delphi/TApplication.js';
/* Set up application instance */
app.caption = 'New project on Delphi.js';

/* Add custom components */

/* get forms definition */
import mainFormProperties from  './forms/main_form.js';
import oneMoreFormProperties from  './forms/one_more_form.js';
import splashFormProperties from  './forms/splash.js';


let mainForm = app.createObject(mainFormProperties);
let oneMoreForm = app.createObject(oneMoreFormProperties);
let splashForm = app.createObject(splashFormProperties);

console.info('Get mainForm', app.mainForm);

mainForm.show();
oneMoreForm.show();
splashForm.showModal();



