import TControl from './TControl.js'

export default `
/* Styles for TPanel */

.TApplication .TForm .TPanel, .TApplication .TForm .TGroupBox {
    box-sizing: border-box;
    background-color: var(--form-back-layer);
    border: 1px solid var(--panel-border-color);
    box-shadow: inset 1px 1px 0 0 var(--panel-border-shadow-color), 1px 1px 0 0 var(--panel-border-shadow-color);
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
    box-shadow: none;
}

.TApplication .TForm .TPanel.Raised {
    box-sizing: border-box;
    border-left-color: var(--panel-border-shadow-color);
    border-top-color: var(--panel-border-shadow-color);
    box-shadow: none;
}

.TApplication .TForm .TPanel.Disabled, .TApplication .TForm .TGroupBox.Disabled {
    box-sizing: border-box;
    border-color: var(--panel-border-disabled-color);
    box-shadow: none;
}

.TApplication .TForm .TGroupBox {
  margin-top: 12px;
  border-radius: 4px;
}

.TApplication .TForm .TGroupBox .Caption {
  display: inline-block;
  padding: 0 4px;
  top: -12px;
  left: 8px;
  height: 24px;
  line-height: 24px; 
  background-color: var(--form-back-layer);
}

.TApplication .TForm .TGroupBox.Disabled .Caption {
  color:  var(--panel-border-disabled-color);
}


`

class TPanel extends TControl {
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

class TGroupBox extends TControl {
  createNode () {
    super.createNode()
    const container = this.objectContainer
    const caption = document.createElement('div')
    container.classList.add('TGroupBox')
    container.appendChild(caption)
    caption.className = 'Caption'
    caption.id = container.id + '.Caption'
    this.caption = this.getProperty('caption')

  }
}  

export { TPanel, TGroupBox }
