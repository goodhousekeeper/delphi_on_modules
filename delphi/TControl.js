import * as Constants from './Constants.js';
import Utils from './Utils.js';
import TComponent from './TComponent.js';


export default class TControl extends TComponent {
    constructor(properties) {
        super(properties);
    }

    createNode() {
        const objectContainer = document.createElement('div');
        let contentContainer = document.createElement('div');
        objectContainer.id = this.getProperty('registerName'); 
        objectContainer.className = this.getProperty('className');
        this.getProperty('ownerObject').contentContainer.appendChild(objectContainer);
        
        Object.assign(objectContainer.style, {
            whiteSpace: this.getProperty('multiLine') ? 'normal' : 'nowrap',
            color: this.getProperty('color') ? this.getProperty('color') : '',
            fontSize: this.getProperty('fontSize') ? this.getProperty('fontSize') : '',
            fontWeight: this.getProperty('fontWeight') ? this.getProperty('fontWeight') : '',
            fontStyle: this.getProperty('fontStyle') ? this.getProperty('fontStyle') : '',
            textAlign: this.getProperty('textAlign') ? this.getProperty('textAlign') : '',
            width: this.getProperty('width') ? this.getProperty('width') + 'px' : '',
            minWidth: this.getProperty('minWidth') ? this.getProperty('minWidth') + 'px' : '',
            height: this.getProperty('height') ? this.getProperty('height') + 'px' : '',
            minHeight: this.getProperty('minHeight') ? this.getProperty('minHeight') + 'px' : '',
            top: this.getProperty('top') !== undefined ? this.getProperty('top') + 'px' : '',
            left: this.getProperty('left') !== undefined ? this.getProperty('left') + 'px' : '',
            right: this.getProperty('right') !== undefined ? this.getProperty('right') + 'px' : '',
            bottom: this.getProperty('bottom') !== undefined ? this.getProperty('bottom') + 'px' : '',
            visibility: 'hidden'
        })
        

        if (this.getProperty('content') !== undefined) {
            contentContainer.id = `${objectContainer.id}.ContentContainer`;
            contentContainer.className = 'ContentContainer';
            objectContainer.appendChild(contentContainer);
        } else {
             contentContainer = undefined;
        }

        Object.defineProperties(this, {
            objectContainer: {
                value: objectContainer
            },
            contentContainer: {
                value: contentContainer
            },            
            style: {
                value: objectContainer.style
            },
            caption: {
                configurable: true,
                get: () => document.getElementById(objectContainer.id + '.Caption').innerText,
                set: (newCaption) => document.getElementById(objectContainer.id + '.Caption').innerText = newCaption || '' 
            },
            icon: {
                configurable: true,
                get: () => document.getElementById(objectContainer.id + '.Icon'),
                set: (newIcon) => { 
                    if (this.icon) {  
                       this.setProperty('icon', newIcon);
                       document.getElementById(objectContainer.id + '.Icon').style.backgroundImage = `url('${this.getProperty('icon')}')`;
                    }
                } 
            }
        });

        if (this.getProperty('enabled') === false) {
            this.enabled(false);
        } else {
            this.setProperty('enabled', true);
        }

        this.setProperty('visible', this.getProperty('visible') === undefined ? true : Boolean(this.getProperty('visible')))
        if (this.getProperty('visible') === true) {
          this.show();
        }
    }  
    
    setEventListener(eventName, fnc, runOnce = false) {
        let that = this;
        if (runOnce) {
            that.container.addEventListener(eventName, function set (e) {
                e.target.removeEventListener(e.type, set);
                return fnc(e, that);
            })
        } else {
            that.container.addEventListener(eventName, fnc, false);
        }
    }

    show() {
        this.setProperty('visible', true);
        this.style.visibility = 'unset';
        this.objectContainer.dispatchEvent(new CustomEvent('show'));
        return this;
    }

    onShow(fnc, runOnce) {
        this.setEventListener('show', fnc, runOnce);
    }

    hide() {
        this.setProperty('visible', false);
        this.style.visibility = 'hidden';
        this.objectContainer.dispatchEvent(new CustomEvent('hide'));
        return this;
    }

    onHide(fnc, runOnce) {
        this.setEventListener('hide', fnc, runOnce);
    }

    onChange(fnc, runOnce) {
        this.setEventListener('onchange', fnc, runOnce);
    }

    onInput(fnc, runOnce) {
        this.setEventListener('oninput', fnc, runOnce);
    }

    click() {
        this.objectContainer.click();
    }

    onClick(fnc, runOnce) {
        this.setEventListener('click', fnc, runOnce);
    }

    enabled(status) {
        let container = this.objectContainer;
        switch (status) {
            case true:
                container.classList.toggle(Constants.DISABLED_CLASS_NAME, false);
                break;
            case false:
                container.classList.toggle(Constants.DISABLED_CLASS_NAME, true);
                break;
            default:
                return this.getProperty('enabled');
        }
        this.setProperty('enabled', status);
        /*
        Object.keys(this.getProperty('TComponents') || {}).forEach((name, index) => {
          TApplication.core.getComponent(`${this.getProperty('ownerName')}.${name}`).enabled(status)
        })
        */
    }

    checked(status) {
        let container = this.objectContainer;
        switch (status) {
            case true:
                container.classList.toggle(Constants.CHECKED_CLASS_NAME, true);
                container.classList.toggle(Constants.UNCHECKED_CLASS_NAME, false);
            break;
        case false:
            this.container.classList.toggle(Constants.CHECKED_CLASS_NAME, false);
            this.container.classList.toggle(Constants.UNCHECKED_CLASS_NAME, true);
            break;
        default:
            return this.getProperty('checked');
        }
        this.setProperty('checked', status)
        container.dispatchEvent(new CustomEvent('onchange'));
    }

    invalidated(status) {
        let container = this.objectContainer;
        switch (status) {
            case true:
                container.classList.toggle(Constants.INVALIDATED_CLASS_NAME, true);
                break;
            case false:
                container.classList.toggle(Constants.INVALIDATED_CLASS_NAME, false);
                break;
            default:
                return this.getProperty('invalidated');
        }
        this.setProperty('invalidated', status);
        /*
        Object.keys(this.getProperty('TComponents') || {}).forEach((name, index) => {
          TApplication.core.getComponent(`${this.getProperty('ownerName')}.${name}`).invalidated(status)
        })
        */
    }

    fadeIn(callback) {
        let style = this.style
        if (style.opacity === '1') {
            return;
        }
        if (style.opacity !== '1') {
            style.opacity = '0';
        }
        Utils.animate({
            draw: function (progress) {
                style.opacity = String(progress);
            },
            callback: callback
        })
    }

    fadeOut(callback) {
        let style = this.style
        if (style.opacity === '0') {
            return;
        }
        Utils.animate({
            draw: function (progress) {
                style.opacity = String(1 - progress);
            },
            callback: callback
        })
    }


}