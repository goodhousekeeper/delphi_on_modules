const properties = {
  name: 'mainForm',
  className: 'TForm',
  caption: 'Delphi.js - Main Form. It is sizeable and draggable',
  top: 20,
  left: 20,
  bottom: 20,
  width: 500,
  minWidth: 300,
  minHeight: 300,
  sizeable: true,
  contentProperties: [
    {
      name: 'openFormComponentsTGroupBox',
      className: 'TGroupBox',
      top: 4,
      left: 8,
      right: 8,
      height: 120,
      caption: 'Choose components to view',
      contentProperties: [
        {
          name: 'pictureTPanel',
          className: 'TPanel',
          top: 4,
          right: 8,
          width: 96,
          height: 96,
          contentProperties: [
            {
              name: 'authorTPicture', 
              className:"TPicture",
              top:0,
              right:0,
              bottom: 0,
              left: 0,
              backgroundSize:"cover",
              imagePath:'application/resources/images/photo.jpg'
            },
          ]
        },

        {
          name: 'delphiTPicture', 
          className:"TPicture",
          top:30,
          right:120,
          width: 48,
          height: 48,
          backgroundSize:"cover",
          image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAwAAAAMADO7oxXAAAEhklEQVRo3u2aPXLjOBCFP+86NxMrVcd24huwb7K6CZs30VGaN1CiiaHUTOgTeAIAEqkfivoZ21O1r4plgwaBfo2HBhow/OV4uLUBM1OgNLMpdfu/1/cg8HiHNkrgvPWHuAuBq0bAzKr4o2+3gRKf0x8OiqqKqmJmF9uRbfj3gg9UVf9zd23bVtu2lSACgwcozjTUrw90IRBCyM4ME82psg2XSGgrlfV6fdSjZ6E6KAZ3gjupXQN8qj+zDZOGzsw+3R13v9zoaR30Sw8j1SrAqgqaRnHX8UmcI4y7x7Hd8+AoQogPDCRzFKr9+hXQkEYj2wDGyws6m0Xj39+fHfB/zphRAnY1Aff4ZCJjBHYELfU7sAGw2QwtS3BXfv16dTOrR4brCtlkgzkekCwbO+aI4VqRBsLpy6YftU5KaLLXe1KREMh+FCFGJZQYXEIiFMA96iNJayHCqutYdd2enByRgAg0Dby/t87eRB8lcNZbmUDyuvS9vi1o6jMR8AAeohVJOgsRliHsCGxl54hAWUJdA6zdbD1YAA8kNFikThE4JZVBIaI/9PtSlMUCWSwAWIbAcm+ufFZG08SuzI5Hp4MR8GTY3sQaQmTnqfxdcroAuIKE+ABFUSAihJ4zRARREFnGOl0BFCxEKIoVRbGiaSCE3KofNeU0gbGJm8PiHgHtE1AfJ6CKyJL5PBEIcfgWIog487kn2Qg7GU4gcBHMUoxgcqQSEUSEstTB+4UIqjp4P6bijME6YGbV6+vrSPXbURSrrWz6eHrave+6NzabBagS6KniCPZHwJ6fn/+k/RTFivncj74vihUAHx9vhLAA9f5+aRKBb0fTeIpIPqn+QEJXbRmuRN0oHmRbzrLZrgcT8W0EzJVmsyOQZXMTga+AufJQ28H7ZQjoiNYnEVDVFMcvb+gWbDYLuu7tqm9/BIEQridwVRQydarSj0rhonZcMVemZ5KH2J8D1rbtaGumTjkPQFw934riJhKjcI8biZGgsr8S1+v1epRAVToqP5TAAGaDuWDqfFZ2WO3E+/txcBs7NzpGoCFlf0LcB/Zl04fIkqen1R8zfgqOTWJPj2UCVelHP85b4Z9GABgexH45dhnf2XOr0TAaE+pA02hKyw9Ho+ve+Ph4A5Z3M16ICY9PWI9GtxIigbJ03JXlNmYPsd363gsTIk8fByOQk/oqJdR1neR0JDW6dOt7znDcs3Rt6v3BgICZVS8va53N2nQOs8sYadt4tFCBB6HZCOHCneM5r0t0kBEj4SQcZGSzWUtZ5oQaN0sXEfE0WAGajSQ5hduNzwR2dwUXXXw8Zs9zIJthBMhBqa5TjurOpEuNUzg4QpwumwGBUdkMnQSkHavkYyGPg+DTOgO2x4aqStu23tu6TJbNgABjshkhEI+FjG18vYSAOxq97uv1ur5lzXk0s3RXZefuqmpgrLPPKR2qqrn7TUYPCHDdDeOPwSNQb+8B/kJ8eVJ/b9x6sFX1C7urAk+FGGG7bkXXLeO7tlXbfdLYLfkkt/+rwdmJa2f+bDfe2P/1EvqfwHfjN57qfUzoi+OGAAAAJXRFWHRjcmVhdGUtZGF0ZQAyMDEwLTA3LTI3VDEyOjEyOjQ3KzAwOjAwA3zMRwAAACV0RVh0bW9kaWZ5LWRhdGUAMjAxMC0wNy0yN1QxMjoxMjo0NyswMDowMFzNunMAAAAASUVORK5CYII='
        },

        {
          name: 'showButtonsForm',
          className: 'TBitButton',
          caption: 'View buttons',
          toolTip: 'Form with TButton, TBitButton',
          height: 26,
          top: 8,
          width: 120,
          left: 8,
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXNJREFUeNrEk8tqwlAQhicnJ6m5LSSg4KaCUujORVYBwVVfwAfwSXwHH6CvUAlCV6UgLgqF7hQqhSyyE0Ehai71knQm7a7VtLjogX+ROef/+WaGCGmawjmHwZmHd7tdEAQBDocDMMZkURQtrNdQyglfhHLR88IzDMZgt9tBkiSWbdudVqvVLhQK5jF3HMeL4XB4NxqNPlsgAkmS6OKq2Wy2Oefmfr+HY6J7ekfviUDGQVpIUcOQm8lkYiLJ9145h2KxCOVyGbDNLCQMQ5Vj4m+xwXVd8DwPKpVKRhwEAWN/wIZqtQqz2Qy22y2sVqvFZrOJeYaBZirmrgxDiAS1dBxngCFvnDDITFvIO4Td6/Wc6XT6gJ+vpVLpmRMG4eBgzLyAKIoWhmHcY9Ct7/tZTcSB6NijUq/XL2VZVmilPwnNy36/PxiPx4+4DW+9XoOmaSA0Go2L+XxuY9g1SjsBEHxhP+m6/o4eUFUVhH//mc4O+BBgAMk901dp5NndAAAAAElFTkSuQmCC',
          textAlign: 'left'
        },
        {
          name: 'showInputsForm',
          className: 'TBitButton',
          caption: 'View inputs',
          height: 26,
          top: 42,
          width: 120,
          left: 8,
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUhJREFUeNqcUjtug0AQnYUt6FxHQrkBJ+AM6WgiUaJENO4oIgHyDSgRgQO4SEVOYImCS6Smc2HExwZMdjaiAJtA8qSn1c4Mj5k3S3e73RMAPMAKXK/X0b3v+wxs237tVyJN056J9F3X8dOyrBeBXVAJgiDgf5gj1jRNA1VVQRiG/MzzHCgLEkwahsGLfsPlcuHUNI2fp9MJaJIkEEURYCfItm1vOOT2+/2bLMvHQZBSmgmDMaZpLpqIbZdl+V7XNScT/+QeIHzfX7MIYB+OtkEVRRF1Xb9Z0RSCIEAcx8dBRJKknzgzg+CcruvC+XyeJdZMO8GRKEsSDDiOA38FF8AODocD/Be8A1VVYTBzDqIo3vemKAruwXa75S3NEWuY0WT6QmmWZRQd9jxvcQvs5dFpnGw2m2em9Lhy5C9CyMdIYOn9L+FbgAEA/2pJllIXXlIAAAAASUVORK5CYII=',
          textAlign: 'left'
        },
        {
          name: 'showPanelsForm',
          className: 'TBitButton',
          caption: 'View panels',
          height: 26,
          top: 76,
          width: 120,
          left: 8,
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARRJREFUeNqckr1thEAQhWeXJSRCBLZkiQS6cAku4Dq4Di5BIiHFsTtwAW7AGQldXHCUwD+3b6VBa0u3XjPSaDUjzfveDIiyLGnbNhJC8PtGRE/kFzdlVxCZ5/m5qqoPn+miKM62gCFrkde2bY2bRxFFEeV5DphQR8hN09C6rjSOI6mDZFqWhYZhEOoIeZqmHwICTRfZWtMMwvougAICSFdIKXcyv33fSwUVFEhXBEGwk/nVAmIXgL2/gsns+l8CuAGTMYy667pAYg8WcKVNruv6K8uyy02Hgg0fB7gBk/Uq3/p9xxwcmM/Ih3yUv8lhGBphhT2gyg3XDWwyHJl+HMcn3Xjx+RP10FXnZ5IklKapcXYXYAAH+jeXqzlizwAAAABJRU5ErkJggg==',
          textAlign: 'left'
        },
      ]
    },
    {
      name: 'myFirstPanel',
      className: 'TPanel',
      top: 140,
      left: 8,
      right: 8,
      height: 100,
      raised: true,
      enabled: false, 
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
};

import  { 
  TApplication as app, 
  otherFormModule, 
  buttonsFormModule,
  inputsFormModule,
  panelsFormModule
 }  from '../index.js'

const onFormCreate = (formObject) => {
  let oneMoreForm;
  const buttonsForm = app.createForm(buttonsFormModule);
  const inputsForm = app.createForm(inputsFormModule);
  const panelsForm = app.createForm(panelsFormModule);

  const viewComponentsGroupBox = formObject.openFormComponentsTGroupBox;

  const buttonsFormButton = viewComponentsGroupBox.showButtonsForm;
  const inputsFormButton = viewComponentsGroupBox.showInputsForm;
  const panelsFormButton = viewComponentsGroupBox.showPanelsForm;

  /* TODO add modal forms and dynamically create / destroy components */ 
  const button = formObject.myFirstPanel.theVeryFirstButton;
  const button2 = formObject.myFirstPanel.theVeryFirstTBitButton;


  formObject.hideQuery = function (callback) {
    /*
    let dlg = TApplication.messageDlgConfirmation('Вы действительно хотите завершить работу с приложением?')
    dlg.onHide(function () {
      if (dlg.modalResult === TApplication.mrYes) {
        TApplication.terminate()
      }
    }, true)
    */
   console.info('mainForm hideQuery');
   if (callback) {
    callback()
   }
  };

  /* Open form with various buttons */ 
  buttonsFormButton.onClick(() => {
    if (!buttonsFormButton.enabled()) {
      return false
    }
    buttonsForm.show()
  });

  /* Open form with various inputs */ 
  inputsFormButton.onClick(() => {
    if (!inputsFormButton.enabled()) {
      return false
    }
    inputsForm.show()
  });

  /* Open form with various panels */ 
  panelsFormButton.onClick(() => {
    if (!panelsFormButton.enabled()) {
      return false
    }
    panelsForm.show()
  });

  /* ------------------------------------------------------------- */
  
  button.onClick(() => {
    if (!button.enabled()) {
      return false
    }
    oneMoreForm = app.createForm(otherFormModule).showModal()
  });

  button2.onClick(() => {
    if (!button2.enabled()) {
      return false
    }
    oneMoreForm = app.destroyObject(oneMoreForm)
  });

  /* ------------------------------------------------------------- */
/*
  buttonsForm.show()
  inputsForm.show()
*/
  buttonsFormButton.click();
  inputsFormButton.click();
  panelsFormButton.click();
};

export { properties, onFormCreate }
