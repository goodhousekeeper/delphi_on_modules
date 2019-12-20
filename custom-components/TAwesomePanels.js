import {TApplication, TPanel} from '../delphi-js/index.js';

const style = `
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

class TAwesomePanel extends TPanel {
    static NAME = 'TAwesomePanel';
    static STYLE = style;
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

TApplication.addComponentToLibrary(TAwesomePanel);
export default TAwesomePanel;