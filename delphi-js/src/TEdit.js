import {TApplication, TControl} from "./internal.js";

const style = `
/* Styles for TEdit */

.TApplication .TForm .TEdit {
  box-sizing: border-box;
  background-color: var(--input-background-color);
  border: 1px solid var(--input-border-color);
}

.TApplication .TForm .TEdit .TEdit__Input{
  border: none;
  background-color: transparent;
  top: 0;
  right: 4px;
  bottom: 0;
  left: 4px;
  overflow: hidden;
  text-shadow: none;
  user-select: text;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-align: inherit;
  font-style: inherit;
  font-family: inherit;
}
.TApplication .TForm .TEdit .TEdit__Input[contenteditable=true]:empty:before {
  content: attr(placeholder);
  opacity: 0.5;
}
.TApplication .TForm .TEdit.Disabled .TEdit__Input {
  color: var(--font-disabled-color);    
}

.TApplication .TForm .TEdit.Invalidated {
  background-color: var(--input-invalidated-background-color);
  border-color: var(--input-invalidated-border-color);
}

.TApplication .TForm .TEdit.Disabled {
  background-color: var(--input-disabled-background-color);
  border-color: var(--input-disabled-border-color);
}
`;

class TEdit extends TControl {
    static get NAME() { return 'TEdit'}
    static get STYLE() { return style }

    createNode() {
        super.createNode();
        const container = this.objectContainer;
        const input = document.createElement('div');
        Object.defineProperties(this, {
            value: {
                get: () => document.getElementById(container.id + '.Input').textContent,
                set: (newText) => {
                    document.getElementById(container.id + '.Input').textContent = newText || ''
                }
            },
        });
        container.classList.add('TEdit');
        input.className = 'TEdit__Input';
        input.id = container.id + '.Input';
        input.style.lineHeight = (parseInt(container.style.height, 10) - 2) + 'px';
        container.appendChild(input);
        if (this.getProperty('placeholder')) {
            input.setAttribute('placeholder', this.getProperty('placeholder'));
        }
        if (this.getProperty('text')) {
            this.value = this.getProperty('text');
        }
        if (this.getProperty('enabled') === false) {
            this.enabled(false);
        } else {
            this.enabled(true);
        }

    }

    enabled(status) {
        const result = super.enabled(status);
        const input = document.getElementById(this.objectContainer.id + '.Input');
        if (result !== undefined) {
            return result;
        }
        if (input) {
            input.contentEditable = status;
        }
    }
}

TApplication.addComponentToLibrary(TEdit);
export default TEdit;