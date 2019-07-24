/**
 * Utility static class
 */

import * as Constants from './Constants.js';
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

    static animate(options) {
        let start = performance.now()
        const duration = !options.duration ? Constants.ANIMATION_SPEED : options.duration
        const timing = !options.timing ? Constants.ANIMATION_FUNCTION_LINEAR : options.timing

        window.requestAnimationFrame(function animate (time) {
            /* timeFraction от 0 до 1 */
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {
                timeFraction = 1;
            }
            /* current animation state */
            let progress = timing(timeFraction)
            options.draw(progress)
            if (timeFraction < 1) {
                window.requestAnimationFrame(animate)
            } else {
                if (options.callback) {
                    options.callback()
                }
            }
        })
    }
}