let mainFormProperties = {
    name: "mainForm",
    className: "TForm",
    caption: "Delphi.js Boilerplate - Main Form. It is sizeable and draggable",
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
            name: 'theVeryFirstButton',
            className: 'TButton',
            caption: 'I am TButton',
            toolTip: 'The very first button on form',
            height: 26,
            top: 4,
            width: 120,
            left: 4,
            textAlign: 'center'
        },
        {
            name: 'theVeryFirstTBitButton',
            className: 'TBitButton',
            caption: 'Press me',
            toolTip: 'The very first button with icon on form',
            height: 26,
            top: 34,
            width: 120,
            left: 4,
            textAlign: 'center'
        }
    ]
}

export default mainFormProperties;