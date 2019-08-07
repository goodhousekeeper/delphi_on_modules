import TControl from './TControl.js';
import Utils from './Utils.js';


const buttonsModuleStyle = `
.TApplication .TForm .TButton {
    box-sizing: border-box;
    background-color: var(--button-background-color);
    border: 1px solid var(--button-border-color);
    border-radius: 4px;
    cursor: pointer;
    box-shadow: inset -1px -1px 1px 1px #D1CCC1,
    inset  1px  1px 1px 1px #F0F0F0;
}

.TApplication .TForm .TButton .Caption {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    text-align: inherit;
    font-style: inherit;
    font-family: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
}
.TApplication .TForm .TButton:hover {
    box-shadow: inset  -1px  -1px 2px 0px #F8B230,
                inset   1px   1px 2px 0px #FDD889;                   
}

.TApplication .TForm .TButton:active {
    background-color: var(--button-background-active-color);
    box-shadow: inset -1px -1px 1px 1px #F0F0F0,
                inset  1px  1px 1px 1px #D1CCC1;
}

.TApplication .TForm .TButton.Disabled {
    background-color: var(--button-background-disabled-color);
    border-color: var(--button-border-disabled-color);
    box-shadow: none;
    cursor: default;
}

.TApplication .TForm .TButton.Disabled .Caption {
    color:  var(--button-border-disabled-color);
}

.TApplication .TForm .TBitButton .Caption {
    left: 24px;    
}

.TApplication .TForm .TBitButton .Icon {
    top: 0;
    bottom: 0;
    left: 0;
    width: 24px;
    background: transparent no-repeat 4px center;
    filter: grayscale(25%);
}

.TApplication .TForm .TBitButton:hover .Icon {
    filter: grayscale(0%);
}

.TApplication .TForm .TBitButton:active .Icon {
    filter: grayscale(75%);
}

.TApplication .TForm .TBitButton.Disabled .Icon {
    filter: grayscale(100%);
}
`;

//Utils.addStyleNode(buttonsModuleStyle);

class TButton extends TControl {
    constructor(properties) {
        super(properties);
    }

    createNode() {
        super.createNode();
        let container = this.objectContainer;
        let caption = document.createElement('div');

        container.classList.add('TButton');
        
        container.appendChild(caption);
        if (this.getProperty('toolTip')) {
            container.title = this.getProperty('toolTip');
        }
        
        caption.className = 'Caption';
        caption.id = container.id + '.Caption';
        caption.style.lineHeight = (parseInt(container.style.height, 10) - 2) + 'px';
        this.caption = this.getProperty('caption');
    }
}

class TBitButton extends TButton {
    constructor(properties) {
        super(properties);
    }

    createNode() {
        super.createNode();
        let container = this.objectContainer;
        let icon = document.createElement('div');
        container.classList.add('TBitButton');
        container.appendChild(icon);
        icon.className = 'Icon';
        icon.id = container.id + '.Icon';
        if (this.getProperty('icon')) {
            this.icon = this.getProperty('icon');
        }
    }
}
export default buttonsModuleStyle;
export { TButton, TBitButton }