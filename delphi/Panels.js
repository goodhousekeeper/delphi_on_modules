import TControl from './TControl.js'

export default `
/* Styles for TPanel */

.TApplication .TForm .TPanel {
    box-sizing: border-box;
    border: 1px solid var(--panel-border-color);
}

.TApplication .TForm .TPanel .ContentContainer {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.TApplication .TForm .TPanel.Lowered {
    box-sizing: border-box;
    border-right-color: var(--panel-border-shadow-color);
    border-bottom-color: var(--panel-border-shadow-color);
}

.TApplication .TForm .TPanel.Raised {
    box-sizing: border-box;
    border-left-color: var(--panel-border-shadow-color);
    border-top-color: var(--panel-border-shadow-color);
}

.TApplication .TForm .TPanel.Disabled {
    box-sizing: border-box;
    border-color: var(--panel-border-disabled-color);
}
`

class TPanel extends TControl {
  constructor (properties) {
    super(properties)
  }

  createNode () {
    super.createNode()
    const container = this.objectContainer
    container.classList.add('TPanel')
    if (this.getProperty('lowered')) {
      this.low()
    }
    if (this.getProperty('raised')) {
      this.raise()
    }
  }

  low () {
    this.objectContainer.classList.remove('Raised')
    this.objectContainer.classList.add('Lowered')
  }

  raise () {
    this.objectContainer.classList.remove('Lowered')
    this.objectContainer.classList.add('Raised')
  }
}

export { TPanel }
