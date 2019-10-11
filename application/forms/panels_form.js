const properties = {
    name: 'panelsForm',
    className: 'TForm',
    caption: 'Delphi.js - Panels',
    width: 500,
    height: 400,
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
        contentProperties: [
         
        ]
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
        contentProperties: [
         
        ]
      },
      {
        name: 'defaultTPanel',
        className: 'TPanel',
        top: 124,
        left: 8,
        width: 234,
        height: 100,
        contentProperties: [
        ]
      },
      {
        name: 'disabledTPanel',
        className: 'TPanel',
        top: 124,
        right: 8,
        width: 234,
        height: 100,
        enabled: false,
        contentProperties: [
        ]
      },
      {
        name: 'loweredTPanel',
        className: 'TPanel',
        top: 234,
        left: 8,
        width: 234,
        height: 100,
        lowered: true,
        contentProperties: [
        ]
      },
      {
        name: 'raisedTPanel',
        className: 'TPanel',
        top: 234,
        right: 8,
        width: 234,
        height: 100,
        raised: true,
        contentProperties: [
        ]
      },
    ]
  }
  
  const onFormCreate = (formObject) => {
  
  }
  
  
  export { properties, onFormCreate }
  