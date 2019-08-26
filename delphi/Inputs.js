import TControl from './TControl.js'

export default `
`

class TEdit extends TControl {
    createNode () {
      super.createNode()
      const container = this.objectContainer
  
      container.classList.add('TButton')
  
    }
  }

export { TEdit }