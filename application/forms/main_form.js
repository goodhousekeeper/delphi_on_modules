const properties = {
  name: 'mainForm',
  className: 'TForm',
  caption: 'Delphi.js Boilerplate - Main Form. It is sizeable and draggable',
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
  minWidth: 700,
  minHeight: 300,
  sizeable: true,
  visible: false,
  contentProperties: [
    {
      name: 'myFirstPanel',
      className: 'TPanel',
      top: 8,
      left: 8,
      right: 8,
      height: 100,
      raised: true,
      contentProperties: [
        {
          name: 'theVeryFirstButton',
          className: 'TButton',
          caption: 'I am TButton',
          toolTip: 'The very first button on form',
          height: 26,
          top: 8,
          width: 120,
          left: 8,
          textAlign: 'center'
        },
        {
          name: 'theVeryFirstTBitButton',
          className: 'TBitButton',
          caption: 'Press me pls',
          toolTip: 'The very first button with icon on form',
          height: 26,
          top: 42,
          width: 120,
          left: 8,
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAehJREFUeNpi/P//PwMlgImBQsACIhhnCAFZjEAGkANy0B8gwQ00m5kRogpEMYHl5YF4LZBXw/D3/47/Ea/xuOD7PwaGX1AMMvDvfwGGf/8nprkkGQPZLUAVHqR4gY3hH0Ofoby+6ZcvXxjinWL0Gf4wtMC9QAAwAjXXK0jIO8gLyUl9/Pzx98Fjh24AXdOA7gIPoP/PwJwGdvoPoNP/MGQIcwkGq4mrKHz5+uXf0UtH7wBdMRGodgvCgP9ATX/+tyT5JxqCaDAfIu7DwcSWJckjqfzgwQOGU5dP3f3w4cNSoJq5DL//I0Xjn38tMX4xes+ePWOK8IowAPGBmnNZ/jPVS4vLqH7985Xl5YcXDz99+rAJGIDtQAxxIcKA/zVLViy8xM7J9uvU7VPMDnaOOkAb4sVkxTV+sPxgf/fhzdOP797vZ/gLjD4Ghn8oAQRKiYx9/AxADaAwaDF2NtN6+vMZpwCnAMP7b+8Zfrz49vrj3fdHGJgZkhhYmT4wsELTC8iHWe+RAvE/ww6g02vO7jhxjfkv49fXjK8Zvn/5+uHTzXcXgSGeC1TxAWdKRDHk81+Gp5vutnCZ8Mt8v/DpDtCBeUBrnuJNyigAmEQZ3v9h+LbzTQsw+ZYwCLJcBydjXIlkwHMjQIABAIHQ3hY9qLekAAAAAElFTkSuQmCC',
          textAlign: 'left'
        },
        {
          name: 'theVeryFirstEdit',
          className: 'TEdit',
          text: '<p>I am the First TEdit</p>',
          height: 26,
          top: 8,
          width: 150,
          left: 140,
          textAlign: 'left',
          color: 'blue'
        },
        
        {
          name: 'theSecondEdit',
          className: 'TEdit',
          text: 'I am the Second TEdit',
          height: 26,
          top: 42,
          width: 150,
          left: 140,
          enabled: false,
          color: 'red'
        }
      ]
    },
    {
      name: 'mySecondPanel',
      className: 'TPanel',
      top: 116,
      left: 8,
      right: 8,
      height: 100,
      lowered: true,
      overflowX: true,
      overflowY: true,
      contentProperties: [
      ]
    },
    {
      name: 'myThirdPanel',
      className: 'TPanel',
      top: 224,
      left: 8,
      right: 8,
      height: 100,
      overflowY: true,
      contentProperties: [
      ]
    },
    {
      name: 'myFirstTGroupBox',
      className: 'TGroupBox',
      top: 332,
      left: 8,
      right: 8,
      height: 100,
      caption: 'I am TGroupBox',
      contentProperties: []
    }

  ]
}

import  { TApplication as app, otherFormModule }  from '../index.js'

const onFormCreate = (formObject) => {
  let oneMoreForm
  const button = formObject.myFirstPanel.theVeryFirstButton
  const button2 = formObject.myFirstPanel.theVeryFirstTBitButton
  const edit = formObject.myFirstPanel.theVeryFirstEdit

  button.onClick(() => {
    if (!button.enabled()) {
      return false
    }
    oneMoreForm = app.createForm(otherFormModule)
    oneMoreForm.showModal()
  })

  button2.onClick(() => {
    if (!button2.enabled()) {
      return false
    }
    oneMoreForm = app.destroyObject(oneMoreForm)
  })

 
  edit.onInput(() => {
    console.info('onInput fires with', edit.input)
  })
}

export { properties, onFormCreate }
