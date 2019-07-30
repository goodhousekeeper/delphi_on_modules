import TApplication from './TApplication.js';
import TControl from './TControl.js';
import Utils from './Utils.js';
import * as Constants from './Constants.js';


const buttonsModuleStyle = `
.TApplication .TForm .TButton {
    box-sizing: border-box;
    background-color: #D6D6D6;
    border: 1px solid #8D8D8D;
    border-left-color: #FFF;
    border-top-color: #FFF;
    cursor: pointer;
    filter: grayscale(33%);
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
    filter: grayscale(0%);
  }
  .TApplication .TForm .TButton:hover .Caption {
    background-color: #e3e3e3;
  }
  .TApplication .TForm .TButton:active {
    filter: grayscale(33%);
    border: 1px solid #8D8D8D;
    border-right-color: #FFF;
    border-bottom-color: #FFF;
  }
  .TApplication .TForm .TButton:active .Caption {
    text-shadow: 1px 1px 0 #FFF;
    background-color: #c9c9c9;
  }
  .TApplication .TForm .TButton.Disabled {
    border-color: #b3b3b3;
    background-color: #f0f0f0;
    cursor: default !important;
    filter: grayscale(100%);
  }
  .TApplication .TForm .TButton.Disabled .Caption {
    background-color: transparent !important;
  }
  .TApplication .TForm .TBitButton .Caption {
    padding-left: 24px;
    background: no-repeat 4px center;
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