const properties = {
  name: 'oneMoreForm',
  className: 'TForm',
  caption: 'Delphi.js Boilerplate - One More Form',
  width: 700,
  height: 400,
  screenCenter: true,
  visible: false,
  noMaximizeButton: true,
  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAz5JREFUeNpMVG1IU1EYfrZ7d6denVa26WItHaVlrSDLoi+WFRGpRflHWgXVjyAq+vgTEdXffkRQRH8CIdwPjSlBQRR9UTEzmgm1tpZu1XKT6bzb3If3zt5zi/LAc8+597zP877nPe97NW1tbdBoNNBqtepMmE9YCsBEMODPkAjRmZmZz4QxAgqFAtjM4//QE9ZardYN7e3tHbW1tStkWVY3eJ5HMBgc6u7u7gqFQq/pUz8hx/a4+vp65pWRd7S0tBxwOp1nB77A5H6WwN0HEh68SiEQSoMXRFPH/i3bKFLO7/czcoigcHV1dSyUja2trQccDsfBi7ej8EVKUFRWjaoqEyorK5EtiPhAnBfv4ji0t24lx3EyiYwxEV5RFFNNTc2m5uatzgu3otAbzEAmjxun5sw6nYjLd9IIRnS4dCeKS0e2OL1erz8cDvs4m83WdOzY0fNvhqaNgWgZBEGPiYkk4vE4PB/HMC7JWGwtQzCcwLdflM2pArSFJNbYzSaPp/89i8BssVgaup7+RGmpEaOjcdVn38ss0ukpbLbHYSyJIBBIoL9/EmazEYMBBev2VDcwrpYeFclkCp+GZShKAblcHtHYOH5EYqitltGxsxxfwtO4/3wKGk5AKp1XbTOZLBiXp6tiIpBlBVIqi9j4FEgH0Ohw9bhVjebK3VFwgqiu5RmebFUyGJcJJDmOxxILpTSRp0svAfc3dbvPjPypg6KKf+ksQFZtAS0TSDLvkUDgq2+5TY+klECxWE7eSlWDt52rVbA1+8agTGfQUCNgeHjEx7hM4KPL5XJvb6rEvOIU5OwkdHoy1hX988rWnI7IuSQWVGTgaJyDvj63m3E5o9GYmpgY19Ghi08fcSx78sqP0ViCTjIX955x6HwsU6h5SLEAqsQ4rp9rQG9vz32P542bCtDLBFhj/Bwc/KCl/tBePNlaX16UQzo+jCHvO0xGfVi1MIt9jvk4d3gZXK7O3p6eLjeV9COWU43dblc7S5Kk4lwut8NmW9J84sT5XY2N622zShEDA2+DN29eexgM+p/q9frHBoMho3bwLAEqnDTy+byF3puIs4gw7y+fVdcIETyCIHwXRREkoP4CfgswAD0VkVFpyDl9AAAAAElFTkSuQmCC',
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
        }
      ]
    }

  ]
}

import  { TApplication as app }  from '../index.js'

const onFormCreate = (formObject) => {
  formObject.onShow(() => {
    console.info(formObject.getProperty('name') + 'is visible now.')
  },
  true)

  const button = formObject.myFirstPanel.theVeryFirstButton

  button.onClick(() => {
    if (!button.enabled()) {
      return false
    }
    app.destroyObject(formObject.myFirstPanel)
  })
}


export { properties, onFormCreate }
