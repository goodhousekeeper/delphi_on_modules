import {TApplication as App, Panels} from '../delphi-js/index.js';

App.addComponentsToLibrary(Panels);

const MODULE_STYLES = `
/* Styles for TAwesomePanel */
.TApplication .TForm .TAwesomePanel {
    --border-radius: 0px;   
    border-radius: var(--border-radius);
}

.TApplication .TForm .TPanel .TAwesomePanel__ContentContainer {
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
}
`;

class TAwesomePanel extends Panels.TPanel {
    createNode() {
        super.createNode();
        const container = this.objectContainer;
        const style = container.style;
        container.classList.add('TAwesomePanel');
        if (this.getProperty('borderRadius')) {
            style.setProperty('--border-radius', this.getProperty('borderRadius') + 'px');
        }
    }
}

export {MODULE_STYLES, TAwesomePanel}