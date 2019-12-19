import {TApplication as App, Panels} from '../delphi-js/index.js';

App.addComponentsToLibrary(Panels);

const MODULE_STYLES = `
/* Styles for TAwesomePanel */
.TApplication .TAwesomePanel {
   

}
    
`;

class TAwesomePanel extends Panels.TPanel {
    createNode() {
        super.createNode();
        const container = this.objectContainer;
        container.classList.add('TAwesomePanel');
        Object.assign(container.style, {
            borderRadius: this.getProperty('borderRadius') !== undefined ? this.getProperty('borderRadius') + 'px' : ''
        });
    }
}

export {MODULE_STYLES, TAwesomePanel}