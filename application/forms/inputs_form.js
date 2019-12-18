const properties = {
    name: 'inputsForm',
    className: 'TForm',
    caption: 'Delphi.js - Inputs',
    width: 400,
    height: 412,
    left: 560,
    top: 100,
    noMaximizeButton: true,
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUhJREFUeNqcUjtug0AQnYUt6FxHQrkBJ+AM6WgiUaJENO4oIgHyDSgRgQO4SEVOYImCS6Smc2HExwZMdjaiAJtA8qSn1c4Mj5k3S3e73RMAPMAKXK/X0b3v+wxs237tVyJN056J9F3X8dOyrBeBXVAJgiDgf5gj1jRNA1VVQRiG/MzzHCgLEkwahsGLfsPlcuHUNI2fp9MJaJIkEEURYCfItm1vOOT2+/2bLMvHQZBSmgmDMaZpLpqIbZdl+V7XNScT/+QeIHzfX7MIYB+OtkEVRRF1Xb9Z0RSCIEAcx8dBRJKknzgzg+CcruvC+XyeJdZMO8GRKEsSDDiOA38FF8AODocD/Be8A1VVYTBzDqIo3vemKAruwXa75S3NEWuY0WT6QmmWZRQd9jxvcQvs5dFpnGw2m2em9Lhy5C9CyMdIYOn9L+FbgAEA/2pJllIXXlIAAAAASUVORK5CYII=',
    contentProperties: [
        {
            name: 'TEditTGroupBox',
            className: 'TGroupBox',
            top: 8,
            left: 8,
            right: 8,
            height: 200,
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
                    name: 'invalidatedTEdit',
                    className: 'TEdit',
                    text: 'TEdit with wrong value, invalidated',
                    height: 26,
                    top: 72,
                    right: 8,
                    left: 8
                },
                {
                    name: 'disabledTEdit',
                    className: 'TEdit',
                    text: 'Disabled TEdit with textAlign: center',
                    height: 26,
                    top: 106,
                    right: 8,
                    left: 8,
                    enabled: false,
                    textAlign: 'center'
                },
                {
                    name: 'customTEdit',
                    className: 'TEdit',
                    text: 'Custom font and right alignment',
                    height: 40,
                    top: 140,
                    right: 8,
                    left: 8,
                    color: 'navy',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    textAlign: 'right'
                }
            ]
        },
        {
            name: 'TStaticTextTGroupBox',
            className: 'TGroupBox',
            top: 218,
            left: 8,
            right: 8,
            height: 144,
            caption: 'TStaticText component',
            contentProperties: [
                {
                    name: 'defaultTStaticText',
                    className: 'TStaticText',
                    caption: 'Default TStaticText with default color and alignment',
                    height: 20,
                    top: 4,
                    right: 8,
                    left: 8
                },
                {
                    name: 'disabledTStaticText',
                    className: 'TStaticText',
                    caption: 'Disabled TStaticText with textAlign: center',
                    height: 20,
                    top: 24,
                    right: 8,
                    left: 8,
                    textAlign: 'center',
                    enabled: false
                },
                {
                    name: 'customTStaticText',
                    className: 'TStaticText',
                    caption: 'Custom font and right alignment',
                    top: 44,
                    right: 8,
                    left: 8,
                    height: 26,
                    color: 'navy',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    textAlign: 'right',
                },
                {
                    name: 'ellipsisTStaticText',
                    className: 'TStaticText',
                    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
                    top: 70,
                    right: 8,
                    left: 8,
                    height: 20,
                    color: 'red'
                },
                {
                    name: 'multilineTStaticText',
                    className: 'TStaticText',
                    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    top: 90,
                    right: 8,
                    left: 8,
                    height: 40,
                    color: 'maroon',
                    textAlign: 'center',
                    multiLine: true
                },
            ]
        }
    ]
};

const onFormCreate = (formObject) => {
    const invalidatedTEdit = formObject.TEditTGroupBox.invalidatedTEdit;
    invalidatedTEdit.invalidated(true);
};

export {properties, onFormCreate}
  