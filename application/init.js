/* Get application instance */
import { TApplication as app } from '../delphi/TApplication.js';
/* Set up application instance */
app.caption = 'New project on Delphi.js';

/* Add custom components */

/* get forms definition */
import mainFormProperties from  './forms/main_form.js'


let form = app.createForm(mainFormProperties);

console.info(form)