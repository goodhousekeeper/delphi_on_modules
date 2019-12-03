const properties = {
    name: 'panelsForm',
    className: 'TForm',
    caption: 'Delphi.js - Panels',
    width: 500,
    height: 590,
    left: 1060,
    top: 20,
    noMaximizeButton: true,
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARRJREFUeNqckr1thEAQhWeXJSRCBLZkiQS6cAku4Dq4Di5BIiHFsTtwAW7AGQldXHCUwD+3b6VBa0u3XjPSaDUjzfveDIiyLGnbNhJC8PtGRE/kFzdlVxCZ5/m5qqoPn+miKM62gCFrkde2bY2bRxFFEeV5DphQR8hN09C6rjSOI6mDZFqWhYZhEOoIeZqmHwICTRfZWtMMwvougAICSFdIKXcyv33fSwUVFEhXBEGwk/nVAmIXgL2/gsns+l8CuAGTMYy667pAYg8WcKVNruv6K8uyy02Hgg0fB7gBk/Uq3/p9xxwcmM/Ih3yUv8lhGBphhT2gyg3XDWwyHJl+HMcn3Xjx+RP10FXnZ5IklKapcXYXYAAH+jeXqzlizwAAAABJRU5ErkJggg==',
    contentProperties: [
        {
            name: 'defaultTGroupBox',
            className: 'TGroupBox',
            top: 8,
            left: 8,
            width: 234,
            height: 100,
            caption: 'Default TGroupBox, no scroll',
            contentProperties: []
        },
        {
            name: 'disabledTGroupBox',
            className: 'TGroupBox',
            top: 8,
            right: 8,
            width: 234,
            height: 100,
            caption: 'TGroupBox, disabled',
            enabled: false,
            contentProperties: []
        },
        {
            name: 'defaultTPanel',
            className: 'TPanel',
            top: 124,
            left: 8,
            width: 234,
            height: 100,
            contentProperties: []
        },
        {
            name: 'disabledTPanel',
            className: 'TPanel',
            top: 124,
            right: 8,
            width: 234,
            height: 100,
            enabled: false,
            contentProperties: []
        },
        {
            name: 'loweredTPanel',
            className: 'TPanel',
            top: 232,
            left: 8,
            width: 234,
            height: 100,
            lowered: true,
            contentProperties: []
        },
        {
            name: 'raisedTPanel',
            className: 'TPanel',
            top: 232,
            right: 8,
            width: 234,
            height: 100,
            raised: true,
            contentProperties: []
        },
        {
            name: 'overflowXTPanel',
            className: 'TPanel',
            top: 340,
            left: 8,
            width: 234,
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
            top: 340,
            right: 8,
            width: 234,
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
            top: 448,
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
    ]
};

const onFormCreate = (formObject) => {

};


export {properties, onFormCreate}
  