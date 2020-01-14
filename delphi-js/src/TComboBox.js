import {TApplication, TControl} from "./internal.js";

const style = `
/* Styles for TComboBox */

.TApplication .TForm .TComboBox {
  box-sizing: border-box;
  background-color: var(--input-background-color);
  border: 1px solid var(--input-border-color);
}

.TApplication .TForm .TComboBox .TComboBox__Input{
  border: none;
  background-color: transparent;
  top: 0;
  right: 20px;
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

.TApplication .TForm .TComboBox .TComboBox__Button{
    cursor: pointer;
    top: 0;
    bottom: 0;
    right: 2px;
    width: 15px;
    background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAYAAABSx2cSAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABsElEQVR42qSTsYoUQRCGv+qZ2QO5wHsBwdDABzMQ5Dj2LjE7g13lklv0OYx8BMHMWAPhwEQwUJSZ7a76DaZ3dkc02moauqv7r/q7+i/7+r3o2w9j6AvbHGQ3ACKEhxNKSKq+RCgoIR4/7LCPX1z37xlDgW0OXCNYLiKMEhAKADwM93ovD7RDXxgWHeGB+3gIUMKQRHEgxoAO4x6wxkgcYe02x0S3uKbIO+pDNrxm3pkBCdFmN0qBqG9SxOyWV/oAQhiGSCQ4jnYavwQUQhIvXq6xZFgyfvbj1whxu1kRGKoDIOX6TnfjerUC4Hq1os9i0QVusNmsAXhdAwAEf1X7+eXVtH51MwLe3K4n35Ony3nh3n34pbPTxeQYfA88tBlQ0ET/74JdnC//DzwsmIfh2s82jfPq4hKAZ+dLTjo46Q4TixJgb9//1tnpgqaZRw2Nle0FfdbsTEUkz0fKsxRmktyH22frWqvNAqWoik+0HHRKk4TnvY7VCMdQVHlW5UaIFDqSdkTg4cgSEZrRdY1Zy45JiAhhCiRhn+56fb4bsMYw5q0nRFYz2+964NGDlj8DAEt2KjXECGiDAAAAAElFTkSuQmCC') no-repeat center center;
    filter: grayscale(25%);
}

.TApplication .TForm .TComboBox:hover .TComboBox__Button {
    filter: grayscale(0%);
}

.TApplication .TForm .TComboBox:active .TComboBox__Button{
    filter: grayscale(75%);
}

.TApplication .TForm .TComboBox.Disabled {
  background-color: var(--input-disabled-background-color);
  border-color: var(--input-disabled-border-color);
}

.TApplication .TForm .TComboBox.Disabled .TComboBox__Input {
  color: var(--font-disabled-color);    
}

.TApplication .TForm .TComboBox.Disabled .TComboBox__Button {
    filter: grayscale(100%);
}

.TApplication .TForm .TComboBox.Invalidated {
  background-color: var(--input-invalidated-background-color);
  border-color: var(--input-invalidated-border-color);
}
`;

class TComboBox extends TControl {
    static get NAME() {
        return 'TComboBox';
    }

    static get STYLE() {
        return style
    }

    createNode() {
        super.createNode();
        const container = this.objectContainer;
        const input = document.createElement('div');
        const button = document.createElement('div');
        Object.defineProperties(this, {
            value: {
                get: () => document.getElementById(container.id + '.Input').textContent,
                set: (newText) => {
                    document.getElementById(container.id + '.Input').textContent = newText || ''
                }
            },
        });
        container.classList.add('TComboBox');
        input.className = 'TComboBox__Input';
        input.id = container.id + '.Input';
        input.style.lineHeight = (parseInt(container.style.height, 10) - 2) + 'px';
        button.className = 'TComboBox__Button';
        button.id = container.id + '.Button';
        container.appendChild(button);
    }
}

TApplication.addComponentToLibrary(TComboBox);
export default TComboBox;