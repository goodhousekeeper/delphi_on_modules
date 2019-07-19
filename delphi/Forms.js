import TControl from './TControl.js';

class TForm extends TControl {
    constructor(properties) {
       super(properties);
       this.modalResult = null;
       this.isModal = false;
    }
} 

export { TForm }