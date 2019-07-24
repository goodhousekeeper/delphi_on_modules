/**
 * Utility static class
 */
export default class Utils {
    /**
     * add HTML node <STYLE> in <HEAD> section with @param {string} style 
     * @param {string} style - css styles in text format 
     */
    static addStyleNode(style) {
        let styleNode = document.createElement('style');
        styleNode.innerHTML = style;
        document.getElementsByTagName('head')[0].appendChild(styleNode);
    }
}