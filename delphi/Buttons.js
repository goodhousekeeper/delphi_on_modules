import TApplication from './TApplication.js';
import TControl from './TControl.js';
import Utils from './Utils.js';
import * as Constants from './Constants.js';


const buttonsModuleStyle = `
.TApplication .TForm .TButton {
    box-sizing: border-box;
    background-color: var(--button-background-color);
    border: 1px solid var(--button-border-color);
    border-radius: 3px;
    cursor: pointer;
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
    box-shadow: inset  0  0 2px 2px #EFBB56;
}

.TApplication .TForm .TButton:active {
    background-color: var(--button-background-active-color);
    box-shadow: inset 0 -1px 1px 1px #F0F0F0,
                inset 0 1px 1px 1px #D1CCC1;
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
`;

Utils.addStyleNode(buttonsModuleStyle);

class TButton extends TControl {
    constructor(properties) {
        super(properties);
        this.createNode();
    }

    createNode() {
        super.createNode();
        let style = this.style;
        let container = this.objectContainer;
        let caption = document.createElement('div');
        
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

export { TButton }