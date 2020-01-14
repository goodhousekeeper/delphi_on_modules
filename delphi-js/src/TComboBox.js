import {TApplication, TControl} from "./internal.js";

const style = `
/* Styles for TComboBox */

`;

class TComboBox extends TControl {
    static get NAME() { return 'TComboBox'}
    static get STYLE() { return style }

    createNode() {
        super.createNode();
        const container = this.objectContainer;
    }
}

TApplication.addComponentToLibrary(TComboBox);
export default TComboBox;