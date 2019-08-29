const properties = {
    name: 'inputsForm',
    className: 'TForm',
    caption: 'Delphi.js - Inputs',
    width: 500,
    height: 350,
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
            caption: 'TButton with custom font',
            height: 40,
            top: 72,
            right: 8,
            left: 8,
            color: 'green',
            fontWeight: 'bold',
            fontSize: '20px',
            textAlign: 'right'
          }
        ]
      },
      {
        name: 'TBitButtonsTGroupBox',
        className: 'TGroupBox',
        top: 164,
        left: 8,
        right: 8,
        height: 132,
        caption: 'TBitButton component',
        contentProperties: [
          {
            name: 'defaultTBitButton',
            className: 'TBitButton',
            caption: 'Default TBitButton with default color and alignment',
            height: 26,
            top: 4,
            right: 8,
            left: 8,
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdpJREFUeNqkk09LG0EYxp+4ycQNHloDIjUlh+SkLSmUHkqDFaoED149ehUEwZvgxU/QD5Cv0FMvpQjWg4dWbIMihdbDiodFUIi7sM3+mc3u68ysbNJoScGBZ2fenff37DuzMxkiwkNaVj4yHybGkMGqGDaExocw10I7IDRp+eqPMgDRanWysvaiXCvpuVHWnz1YoRd6/Pj8pGJcnsnwfWIQoVF7+rzE3YBxBMOqZs+mpkvGxVmjz4DGNWjM8Z1/Uo7jIJ/PgzEGXdeZZOT7ETXbJQRBAM/z7lW73cbX2U9YebKsYt/3FZNuogw456mJ+AJ4yOG6LtyOq2DTNLGYm8Pm6TaKxeJdgzAM0el00FrYRfXjK7jcBUWE1ttdlaJpGqY/vxEDsZzASQ3SJURRhM3qOgzDwNG7PZCWwNlsVmnmSx0YE7m6SM91BwxCgsUtbPzaUqFlWWi97oP3BfxYTBQSRSxSzF8V2JoNekSo/15KQQV/E/BED5aK9fhuBVycAJUwBbz8OZ/AP+oq7oelqEBpBckmBvF1GIvfoCM5hWVg5riu+vta7MVcMr0K7O6Oc9A2SbhgVMRSldt+QHEYcf/QNiXTq8CLm/53G0L/f5nyI011ER96nW8EGAD2LPXn/hZ/XAAAAABJRU5ErkJggg=='
          },
          {
            name: 'disabledTBitButton',
            className: 'TBitButton',
            caption: 'Disabled TBitButton with textAlign: center',
            height: 26,
            top: 38,
            right: 8,
            left: 8,
            enabled: false,
            textAlign: 'center',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkU01L40AYfmKbaMRuMQcR7OKhXpSV7rns9rJID8Ie9y8I/pf9Af0LexcURcSDLPuN7LEtupSFSNWUpE4zSWZ2ZmK+2sMKZniTd2ae55k37/uOxjnHc56yfGmfVpagYU+4bWHWfzh3wo7A0eEfbjwlAM73Nlbr+6/XGzVTXzDy6OkISUDor6vLes/uy+nHWCBCu/Fyu0YffIPCT8Gj0Uh9q9VqXsN4tbZV6/3tt3MC3CqhZLgTN0W5rouL1oHym+e7qFQq6Z5pmobkpDlAyOH7PgghKYhSWvDze5qmKU5BQILyItIfDodqfv3nGoyxmFAuw7KsWYEgCDAej/F95wS2bcPzPCWg6zq+vTtWRGmbh024vjsrEEURSEjQ7XZV5iVYkhNiYhA1CvVwSiDguKf3cHQHb3+/j39UYH6+OVWk7bNWggReiJxrkeIUInBKDviiWFxMCo7s1GWZ+qyOTIyZCKjoAMwhj8oE5pEJy+YSoxiBz+4CJspgIutCceLmj2bsrxV7mRFGJUf68ZlOeOR+vh1woYIFMU+s/mi5NRZEdPLFGUhOFgFhnclXB8Kefpnm5zqqqZ57nf8JMACMJuWZdL+VLAAAAABJRU5ErkJggg=='
          },
          {
            name: 'customTBitButton',
            className: 'TBitButton',
            caption: 'TBitButton with custom font',
            height: 40,
            top: 72,
            right: 8,
            left: 8,
            color: 'maroon',
            fontWeight: 'bold',
            fontSize: '20px',
            textAlign: 'right',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWVJREFUeNqkU0FqwkAU/YnJtE2yEtxJF5VCcelCcNGFK2/QKwi9Sw/QK3TbVQ8gll4gWRYqrkRCEuNkJmb6Rm2oDdWAH94wf5j3/vufGUMpReeEoQVeDMMziMbIR0DzBGcJvKHs84NSiaVPkIyvu93Hu8GgzRyH/cfUxUSaCn867Xz5vj562gpsUPm2328nnDPi/JRrdtPrtT99f/RboFmYJkuSpFbfruuyzb7VrUAOcFSO47iWgG4l3+9LgTRNabValZeklJQi1xBCUJ7vKJZlUavVqgr8XLqfTGg+n1MYhtRoNLRd8jyPGNvN9rXToXUUVQU0WaCFIAi2e9u2K2QdV5oEdwcCEsiWS1KLBQXD4dH+PcBEAfnXgQEBB8Nx6kyxKKoOGGZQO1DowEGG57nBFNEfq8NfF4XIdk+aTL2EeNvvUTSTSolL5McgQf7gfKY5pYM1PgYOCaj9mS7AKX/jOfEtwABLp7brtg4M2QAAAABJRU5ErkJggg=='
          }
        ]
      }
    ]
  }
  
  const onFormCreate = (formObject) => {
  
  }
  
  
  export { properties, onFormCreate }
  