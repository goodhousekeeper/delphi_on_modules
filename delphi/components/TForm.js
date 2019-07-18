import TControl from './TControl.js';
export default class TForm extends TControl {
    constructor(properties) {
       super(properties);
       this.modalResult = null;
       this.isModal = false;
    }
} 