/* Get application instance */
import TApplication from '../delphi/TApplication.js';
/* Set up application instance */
TApplication.caption = 'New project on Delphi.js';
TApplication.mainFormName = 'mainForm';
TApplication.animationSpeed = 250;
TApplication.icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNqcU0FoE0EUfZsuG7AhWdIG2x5CcymylAqKR81FpKB48CYIvdVb9SAIxUNP4i0e7aW1CBVEEAqCB8XWi4ekh1pKFdSUoJHaWAy03elMsuv/m+xm0+zJD29m/vszb+f/P6tpjz6gyzTtOo2P0Wt34borYcK5fxE6Gs2TG2cuTJzJZIdPJ3yi8mv3oPjp8wwtV05u1qfeLmDp0q0wN9pv6IlyuRwQyWQyASlHI26F2NTqMxSe3gOE8OE2Gg00m80A7DMf2gNrYKklwMPZyiYKy7N+0FFSeod8sM+8fzg/NgtreLkj4In82ELh5RxgC0cqBRUC+8wTkB+fQya51UnBBSYJJcZEdbt0s/gqxQHDMAJ4dnjk5M89RMbc7i4iZTc9fvVabsiy0kz8/NMH9XzRC24efv9bH2pttEaq5mD6S8l1g7MPCG90yi6b+C3Te69feOyVNtjmb+x8M+5cPp/L5cgbMwkjzO9Uv+5/3Hg/7QtAUmGobD0tkkTpjoNarYZ6vR7wqZSZlgJZLwWqKxVWQKDnQeGYBIxQN3zjtRTtGvAsbTvyBoKoU/QOlFTee/CNfWG3BXh2YjH0DZi9Amqv9TUlu27AvjhqC+wC6wuVjahXin0q0CDVQNM0xOPx0P+mwT7otPH2MaJtLYv5d0+KkTFdx7on5oYa+z/2T4ABABYwC08F33G2AAAAAElFTkSuQmCC'

/* Add custom components */

let splashForm;
let mainForm;

async function showMainForm() {
    let module = await import('./forms/main_form.js');
    mainForm = TApplication.createObject(module.properties);
    mainForm.show();
    //mainForm.myFirstPanel.enabled(false);
    module.logics(TApplication);
}

async function showSplashForm() {
    let module = await import('./forms/splash.js');
    splashForm = TApplication.createObject(module.properties);
    splashForm.show();
}
/*
showSplashForm();

setTimeout(() => {
    splashForm.hide();
    showMainForm();    
}
, 5000
);
*/

showMainForm() 



