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
        const styleNode = document.createElement('style');
        styleNode.title = Constants.STYLE_TAG_TITLE;
        styleNode.innerHTML = style;
        document.getElementsByTagName('head')[0].appendChild(styleNode);
    }

    static updateStyleNode(style) {
        let styleNode;
        for (let node of document.getElementsByTagName('style')) {
            if (node.title === Constants.STYLE_TAG_TITLE) {
                styleNode = node;
            }
        }
        if (!styleNode) {
            return;
        }
        styleNode.innerHTML += style;
    }

    static addFaviconNode(favicon) {
        let headNode = document.getElementsByTagName('head')[0];
        let iconNode;
        headNode.childNodes.forEach((item) => {
            if (item.rel === 'shortcut icon') {
                iconNode = item;
            }
        });
        if (!iconNode) {
            iconNode = document.createElement('link'); 
            iconNode.rel = 'shortcut icon';
            document.getElementsByTagName('head')[0].appendChild(iconNode);
        }
        iconNode.href = favicon;
    }

    static animate(options) {
        let start = performance.now();


        const duration = options.duration || options.duration===0 ? options.duration : Constants.ANIMATION_SPEED;
        const timing = options.timing ? options.timing : Constants.ANIMATION_FUNCTION_LINEAR;

        window.requestAnimationFrame(function animate (time) {
            /* timeFraction from 0 to 1 */
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