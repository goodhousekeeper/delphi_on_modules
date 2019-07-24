import TComponent from './TComponent.js';


export default class TControl extends TComponent {
    constructor(properties) {
        super(properties);
    }

    createNode() {
        const objectContainer = document.createElement('div');
        let contentContainer = document.createElement('div');
        objectContainer.id = this.getProperty('registerName'); 
        objectContainer.className = this.getProperty('registerName');
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
            }
        });
        this.setProperty('visible', this.getProperty('visible') === undefined ? true : Boolean(this.getProperty('visible')))
        if (this.getProperty('visible') === true) {
          this.show();
        }

        return objectContainer;
    }  

    show() {
        this.setProperty('visible', true);
        this.style.visibility = 'unset';
        this.objectContainer.dispatchEvent(new CustomEvent('show'));
        return this;
    }

    hide() {
        this.setProperty('visible', false);
        this.style.visibility = 'hidden';
        this.container.dispatchEvent(new CustomEvent('hide'));
        return this;
      }


}