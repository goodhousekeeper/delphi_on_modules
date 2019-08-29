const properties = {
  name: 'buttonsForm',
  className: 'TForm',
  caption: 'Delphi.js - Buttons',
  width: 500,
  height: 400,
  left: 540,
  top: 20,
  noMaximizeButton: true,
  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXNJREFUeNrEk8tqwlAQhicnJ6m5LSSg4KaCUujORVYBwVVfwAfwSXwHH6CvUAlCV6UgLgqF7hQqhSyyE0Ehai71knQm7a7VtLjogX+ROef/+WaGCGmawjmHwZmHd7tdEAQBDocDMMZkURQtrNdQyglfhHLR88IzDMZgt9tBkiSWbdudVqvVLhQK5jF3HMeL4XB4NxqNPlsgAkmS6OKq2Wy2Oefmfr+HY6J7ekfviUDGQVpIUcOQm8lkYiLJ9145h2KxCOVyGbDNLCQMQ5Vj4m+xwXVd8DwPKpVKRhwEAWN/wIZqtQqz2Qy22y2sVqvFZrOJeYaBZirmrgxDiAS1dBxngCFvnDDITFvIO4Td6/Wc6XT6gJ+vpVLpmRMG4eBgzLyAKIoWhmHcY9Ct7/tZTcSB6NijUq/XL2VZVmilPwnNy36/PxiPx4+4DW+9XoOmaSA0Go2L+XxuY9g1SjsBEHxhP+m6/o4eUFUVhH//mc4O+BBgAMk901dp5NndAAAAAElFTkSuQmCC',
  contentProperties: [
    {
      name: 'TButtonsTGroupBox',
      className: 'TGroupBox',
      top: 4,
      left: 8,
      right: 8,
      height: 132,
      caption: 'TButton component',
      contentProperties: [
        {
          name: 'defaultTButton',
          className: 'TButton',
          caption: 'Default TButton with default color and alignment',
          height: 26,
          top: 4,
          right: 8,
          left: 8
        },
        {
          name: 'disabledTButton',
          className: 'TButton',
          caption: 'Disabled TButton with textAlign: center',
          height: 26,
          top: 38,
          right: 8,
          left: 8,
          enabled: false,
          textAlign: 'center'
        },
        {
          name: 'customTButton',
          className: 'TButton',
          caption: 'TButton with custom font. TextAlign: right',
          height: 40,
          top: 72,
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
