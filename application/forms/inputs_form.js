const properties = {
    name: 'inputsForm',
    className: 'TForm',
    caption: 'Delphi.js - Inputs',
    width: 500,
    height: 224,
    left: 540,
    top: 390,
    noMaximizeButton: true,
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUhJREFUeNqcUjtug0AQnYUt6FxHQrkBJ+AM6WgiUaJENO4oIgHyDSgRgQO4SEVOYImCS6Smc2HExwZMdjaiAJtA8qSn1c4Mj5k3S3e73RMAPMAKXK/X0b3v+wxs237tVyJN056J9F3X8dOyrBeBXVAJgiDgf5gj1jRNA1VVQRiG/MzzHCgLEkwahsGLfsPlcuHUNI2fp9MJaJIkEEURYCfItm1vOOT2+/2bLMvHQZBSmgmDMaZpLpqIbZdl+V7XNScT/+QeIHzfX7MIYB+OtkEVRRF1Xb9Z0RSCIEAcx8dBRJKknzgzg+CcruvC+XyeJdZMO8GRKEsSDDiOA38FF8AODocD/Be8A1VVYTBzDqIo3vemKAruwXa75S3NEWuY0WT6QmmWZRQd9jxvcQvs5dFpnGw2m2em9Lhy5C9CyMdIYOn9L+FbgAEA/2pJllIXXlIAAAAASUVORK5CYII=',
    contentProperties: [
      {
        name: 'TButtonsTGroupBox',
        className: 'TGroupBox',
        top: 8,
        left: 8,
        right: 8,
        height: 166,
        caption: 'TEdit component',
        contentProperties: [
          {
            name: 'placeHolderTEdit',
            className: 'TEdit',
            placeholder: 'TEdit with placeholder and custom font color',
            height: 26,
            top: 4,
            right: 8,
            left: 8,
            color: 'maroon'
          },
          {
            name: 'defaultTEdit',
            className: 'TEdit',
            text: 'Default TEdit with default color and alignment',
            height: 26,
            top: 38,
            right: 8,
            left: 8
          },
          {
            name: 'disabledTEdit',
            className: 'TEdit',
            text: 'Disabled TEdit with textAlign: center',
            height: 26,
            top: 72,
            right: 8,
            left: 8,
            enabled: false,
            textAlign: 'center'
          },
          {
            name: 'customTEdit',
            className: 'TEdit',
            text: 'TEdit with custom font and left alignment',
            height: 40,
            top: 106,
            right: 8,
            left: 8,
            color: 'navy',
            fontWeight: 'bold',
            fontSize: '20px',
            textAlign: 'right'
          }
        ]
      }
    ]
  }
  
  const onFormCreate = (formObject) => {
  
  }
  
  
  export { properties, onFormCreate }
  