/* Get application instance */
import {TApplication as App, Panels} from '../delphi-js/index.js'

/* Get custom component modules */

/* Set up application instance */
App.caption = 'New project on Delphi.js';
App.mainFormName = 'mainForm';
App.animationSpeed = 250;
App.icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNqcU0FoE0EUfZsuG7AhWdIG2x5CcymylAqKR81FpKB48CYIvdVb9SAIxUNP4i0e7aW1CBVEEAqCB8XWi4ekh1pKFdSUoJHaWAy03elMsuv/m+xm0+zJD29m/vszb+f/P6tpjz6gyzTtOo2P0Wt34borYcK5fxE6Gs2TG2cuTJzJZIdPJ3yi8mv3oPjp8wwtV05u1qfeLmDp0q0wN9pv6IlyuRwQyWQyASlHI26F2NTqMxSe3gOE8OE2Gg00m80A7DMf2gNrYKklwMPZyiYKy7N+0FFSeod8sM+8fzg/NgtreLkj4In82ELh5RxgC0cqBRUC+8wTkB+fQya51UnBBSYJJcZEdbt0s/gqxQHDMAJ4dnjk5M89RMbc7i4iZTc9fvVabsiy0kz8/NMH9XzRC24efv9bH2pttEaq5mD6S8l1g7MPCG90yi6b+C3Te69feOyVNtjmb+x8M+5cPp/L5cgbMwkjzO9Uv+5/3Hg/7QtAUmGobD0tkkTpjoNarYZ6vR7wqZSZlgJZLwWqKxVWQKDnQeGYBIxQN3zjtRTtGvAsbTvyBoKoU/QOlFTee/CNfWG3BXh2YjH0DZi9Amqv9TUlu27AvjhqC+wC6wuVjahXin0q0CDVQNM0xOPx0P+mwT7otPH2MaJtLYv5d0+KkTFdx7on5oYa+z/2T4ABABYwC08F33G2AAAAAElFTkSuQmCC';

/*  Set up application style */
App.setCSSVariable('--background-color', '#FFF');
App.setCSSVariable('--background-image-repeat', 'no-repeat');
App.setCSSVariable('--background-image-size', 'cover');
App.setCSSVariable('--background-image-position', 'center center');
App.setCSSVariable('--background-image', 'url("application/resources/images/windows_xp.jpg")');

/* Add components */
App.addComponentsToLibrary(Panels);

/* Import forms */
import * as mainFormModule from './forms/main_form.js'
import * as splashFormModule from './forms/splash.js'
import * as otherFormModule from './forms/one_more_form.js'

import * as buttonsFormModule from './forms/buttons_form.js'
import * as inputsFormModule from './forms/inputs_form.js'
import * as panelsFormModule from './forms/panels_form.js'

/* Export TApplication, Modules and Forms */
export {
    App,
    /*-------------*/
    mainFormModule,
    splashFormModule,
    otherFormModule,

    buttonsFormModule,
    inputsFormModule,
    panelsFormModule
}

/* Initial custom code */

let mainForm;
let splashForm;

App.addComponentsToLibrary(Panels);

function showMainForm() {
    mainForm = App.createForm(mainFormModule);
    mainForm.show();
}


function showSplashForm() {
    splashForm = App.createForm(splashFormModule);
    splashForm.show();
}

//showMainForm()


showSplashForm();

setTimeout(() => {
    splashForm.hide();
    showMainForm();
}, 2000);

