import TComponent from './TComponent.js';


export default class TControl extends TComponent {
    constructor(properties) {
        super(properties);
    }

    addStyle(style) {
        let styleNode = document.createElement('style');
        styleNode.innerHTML = style;
        document.getElementsByTagName('head')[0].appendChild(styleNode);
    }

}