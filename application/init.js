import { TApplication as app } from '../delphi/TApplication.js';
import mainFormProperties from  './forms/main_form.js'


/* Set up our application instance */
app.caption = 'New project on Delphi.js';

let form = app.createForm(mainFormProperties);
