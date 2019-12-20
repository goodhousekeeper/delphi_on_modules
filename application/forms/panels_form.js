const properties = {
    name: 'panelsForm',
    className: 'TForm',
    caption: 'Delphi.js - Panels',
    width: 400,
    height: 548,
    left: 490,
    top: 20,
    noMaximizeButton: true,
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARRJREFUeNqckr1thEAQhWeXJSRCBLZkiQS6cAku4Dq4Di5BIiHFsTtwAW7AGQldXHCUwD+3b6VBa0u3XjPSaDUjzfveDIiyLGnbNhJC8PtGRE/kFzdlVxCZ5/m5qqoPn+miKM62gCFrkde2bY2bRxFFEeV5DphQR8hN09C6rjSOI6mDZFqWhYZhEOoIeZqmHwICTRfZWtMMwvougAICSFdIKXcyv33fSwUVFEhXBEGwk/nVAmIXgL2/gsns+l8CuAGTMYy667pAYg8WcKVNruv6K8uyy02Hgg0fB7gBk/Uq3/p9xxwcmM/Ih3yUv8lhGBphhT2gyg3XDWwyHJl+HMcn3Xjx+RP10FXnZ5IklKapcXYXYAAH+jeXqzlizwAAAABJRU5ErkJggg==',
    contentProperties: [
        {
            name: 'defaultTGroupBox',
            className: 'TGroupBox',
            top: 8,
            left: 8,
            width: 184,
            height: 50,
            caption: 'Default TGroupBox',
            contentProperties: []
        },
        {
            name: 'disabledTGroupBox',
            className: 'TGroupBox',
            top: 8,
            right: 8,
            width: 184,
            height: 50,
            caption: 'TGroupBox, disabled',
            enabled: false,
            contentProperties: []
        },
        {
            name: 'defaultTPanel',
            className: 'TPanel',
            top: 74,
            left: 8,
            width: 184,
            height: 50,
            contentProperties: [
                {
                    name: 'defaultPanelTStaticText',
                    className: 'TStaticText',
                    caption: 'Default TPanel',
                    height: 20,
                    top: 4,
                    right: 8,
                    left: 8
                }
            ]
        },
        {
            name: 'disabledTPanel',
            className: 'TPanel',
            top: 74,
            right: 8,
            width: 184,
            height: 50,
            enabled: false,
            contentProperties: [
                {
                    name: 'disabledPanelTStaticText',
                    className: 'TStaticText',
                    caption: 'Disabled TPanel',
                    height: 20,
                    top: 4,
                    right: 8,
                    left: 8
                }
            ]
        },
        {
            name: 'loweredTPanel',
            className: 'TPanel',
            top: 132,
            left: 8,
            width: 184,
            height: 50,
            lowered: true,
            contentProperties: [
                {
                    name: 'loweredTPanelTStaticText',
                    className: 'TStaticText',
                    caption: 'Lowered TPanel',
                    height: 20,
                    top: 4,
                    right: 8,
                    left: 8
                }
            ]
        },
        {
            name: 'raisedTPanel',
            className: 'TPanel',
            top: 132,
            right: 8,
            width: 184,
            height: 50,
            raised: true,
            contentProperties: [
                {
                    name: 'raisedPanelTStaticText',
                    className: 'TStaticText',
                    caption: 'Raised TPanel',
                    height: 20,
                    top: 4,
                    right: 8,
                    left: 8
                }
            ]
        },
        {
            name: 'overflowXTPanel',
            className: 'TPanel',
            top: 190,
            left: 8,
            width: 184,
            height: 100,
            lowered: true,
            overflowX: true,
            contentProperties: [
                {
                    name: 'overflowXInsideTGroupBox',
                    className: 'TGroupBox',
                    top: 8,
                    left: 20,
                    width: 400,
                    height: 50,
                    caption: 'TPanel with horisontal scroll',
                    contentProperties: []
                }
            ]
        },
        {
            name: 'overflowYTPanel',
            className: 'TPanel',
            top: 190,
            right: 8,
            width: 184,
            height: 100,
            lowered: true,
            overflowY: true,
            contentProperties: [
                {
                    name: 'overflowYInsideTGroupBox',
                    className: 'TGroupBox',
                    top: 20,
                    left: 20,
                    right: 20,
                    height: 200,
                    caption: 'Vertical scroll',
                    contentProperties: []
                }
            ]
        },
        {
            name: 'overflowALLTPanel',
            className: 'TPanel',
            top: 298,
            left: 8,
            right: 8,
            height: 100,
            lowered: true,
            overflowX: true,
            overflowY: true,
            contentProperties: [
                {
                    name: 'overflowAllTGroupBox',
                    className: 'TGroupBox',
                    top: 20,
                    left: 20,
                    width: 500,
                    height: 200,
                    caption: 'TPanel with both vertical and horisontal scroll',
                    contentProperties: []
                }
            ]
        },
        {
            name: 'firstTAwesomePanel',
            className: 'TPanel',
            raised: true,
            top: 406,
            left: 8,
            right: 8,
            height: 100,
            borderRadius: 30,
            contentProperties: [
                {
                    name: 'secondTAwesomePanel',
                    className: 'TPanel',
                    lowered: true,
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10,
                    borderRadius: 20,
                    contentProperties: [
                        {
                            name: 'thirdTAwesomePanel',
                            className: 'TPanel',
                            raised: true,
                            top: 10,
                            right: 10,
                            bottom: 10,
                            left: 10,
                            borderRadius: 10,
                            contentProperties: [
                                {
                                    name: 'customTPanelTStaticText',
                                    className: 'TStaticText',
                                    caption: 'Stockpile of TAwesomePanels',
                                    textAlign: 'center',
                                    top: 12,
                                    right: 8,
                                    left: 8,
                                    height: 20
                                }

                            ]
                        },

                    ]
                },

            ]
        },
    ]
};

const onFormCreate = (formObject) => {

};


export {properties, onFormCreate}
  