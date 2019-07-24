import TControl from './TControl.js';

const TFormStyle = `

.TApplication .TForm {
    background-color: #2E86C1;
    border: 1px solid #8D8D8D;
    box-shadow: 0 0 10px 2px #8D8D8D, 0 1px 2px 0 #fff inset;
    overflow: hidden;
    min-height: 24px;
    min-width: 100px;
    box-sizing: border-box;
  }
  .TApplication .TForm .Title {
    height: 24px;
    width: 100%;
    cursor: pointer;
  }
  .TApplication .TForm .Title .Icon,
  .TApplication .TForm .Title .CloseButton,
  .TApplication .TForm .Title .Caption {
    height: 24px;
    top: 0;
  }
  .TApplication .TForm .Title .Icon {
    width: 24px;
    left: 0;
    background: url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAwAAAAMADO7oxXAAAEhklEQVRo3u2aPXLjOBCFP+86NxMrVcd24huwb7K6CZs30VGaN1CiiaHUTOgTeAIAEqkfivoZ21O1r4plgwaBfo2HBhow/OV4uLUBM1OgNLMpdfu/1/cg8HiHNkrgvPWHuAuBq0bAzKr4o2+3gRKf0x8OiqqKqmJmF9uRbfj3gg9UVf9zd23bVtu2lSACgwcozjTUrw90IRBCyM4ME82psg2XSGgrlfV6fdSjZ6E6KAZ3gjupXQN8qj+zDZOGzsw+3R13v9zoaR30Sw8j1SrAqgqaRnHX8UmcI4y7x7Hd8+AoQogPDCRzFKr9+hXQkEYj2wDGyws6m0Xj39+fHfB/zphRAnY1Aff4ZCJjBHYELfU7sAGw2QwtS3BXfv16dTOrR4brCtlkgzkekCwbO+aI4VqRBsLpy6YftU5KaLLXe1KREMh+FCFGJZQYXEIiFMA96iNJayHCqutYdd2enByRgAg0Dby/t87eRB8lcNZbmUDyuvS9vi1o6jMR8AAeohVJOgsRliHsCGxl54hAWUJdA6zdbD1YAA8kNFikThE4JZVBIaI/9PtSlMUCWSwAWIbAcm+ufFZG08SuzI5Hp4MR8GTY3sQaQmTnqfxdcroAuIKE+ABFUSAihJ4zRARREFnGOl0BFCxEKIoVRbGiaSCE3KofNeU0gbGJm8PiHgHtE1AfJ6CKyJL5PBEIcfgWIog487kn2Qg7GU4gcBHMUoxgcqQSEUSEstTB+4UIqjp4P6bijME6YGbV6+vrSPXbURSrrWz6eHrave+6NzabBagS6KniCPZHwJ6fn/+k/RTFivncj74vihUAHx9vhLAA9f5+aRKBb0fTeIpIPqn+QEJXbRmuRN0oHmRbzrLZrgcT8W0EzJVmsyOQZXMTga+AufJQ28H7ZQjoiNYnEVDVFMcvb+gWbDYLuu7tqm9/BIEQridwVRQydarSj0rhonZcMVemZ5KH2J8D1rbtaGumTjkPQFw934riJhKjcI8biZGgsr8S1+v1epRAVToqP5TAAGaDuWDqfFZ2WO3E+/txcBs7NzpGoCFlf0LcB/Zl04fIkqen1R8zfgqOTWJPj2UCVelHP85b4Z9GABgexH45dhnf2XOr0TAaE+pA02hKyw9Ho+ve+Ph4A5Z3M16ICY9PWI9GtxIigbJ03JXlNmYPsd363gsTIk8fByOQk/oqJdR1neR0JDW6dOt7znDcs3Rt6v3BgICZVS8va53N2nQOs8sYadt4tFCBB6HZCOHCneM5r0t0kBEj4SQcZGSzWUtZ5oQaN0sXEfE0WAGajSQ5hduNzwR2dwUXXXw8Zs9zIJthBMhBqa5TjurOpEuNUzg4QpwumwGBUdkMnQSkHavkYyGPg+DTOgO2x4aqStu23tu6TJbNgABjshkhEI+FjG18vYSAOxq97uv1ur5lzXk0s3RXZefuqmpgrLPPKR2qqrn7TUYPCHDdDeOPwSNQb+8B/kJ8eVJ/b9x6sFX1C7urAk+FGGG7bkXXLeO7tlXbfdLYLfkkt/+rwdmJa2f+bDfe2P/1EvqfwHfjN57qfUzoi+OGAAAAJXRFWHRjcmVhdGUtZGF0ZQAyMDEwLTA3LTI3VDEyOjEyOjQ3KzAwOjAwA3zMRwAAACV0RVh0bW9kaWZ5LWRhdGUAMjAxMC0wNy0yN1QxMjoxMjo0NyswMDowMFzNunMAAAAASUVORK5CYII=') no-repeat center center;
    background-size: 16px 16px;
  }
  .TApplication .TForm .Title .CloseButton {
    width: 24px;
    right: 0;
    background: url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc1JREFUeNqkUz1LA0EQnb1cVk1iE0zlqWCUiI0gKsQqnX9A/AuC/8UfYGchFmJhayMRBINWNh5KBEWbQAiSXC6X+/TN5oNEIwo5eNzO3L43b+dmRRRFNM4jWOBMiJQg2ke8A6T/4NSAS5Q92osiS+cMgv351dWDlXzekImE/I3JxVzbds3b2+y7aXLqUAkEqLy8tWVYjiPJcf5yLRfX141X02S3h1pXIB1qmrQsixjGyQn11qNyXhTJoHtUJeADDio3Gg1aubhQZfjN8agci/hdO3pPwLZtajabdL60RLvlshKcPz1V+TJiTdPoamOD4vE4ZTKZvkDfgeu65Ps+TSeTdDwzQyaaVKlUlJAQgq5B5u4Kz6NWvf7TAZNd2LNrNUqGIcViMVVNSqmQGuiiDpEhBx7QBjGqVmkqCChXLA6RdV2nwtMTJbCPIVHM+34EAYEE/vPcAPlhc5Pu19aUAGP75UUJTMLhDwcSPeCPb4WCIj+CPIuYUcrl1OabbLbjAoW8wR60MZ4BujgFnQXEzyAvDJyZ1yWQe7lWGLrtzkh3HHxitkv1+gcGxJ1EnGWb39DLeSDfOc4Hc/oOWrgYSBLw78s0AU7/No7zfAkwALzl9C/AJe10AAAAAElFTkSuQmCC') no-repeat center center;
    filter: grayscale(33%);
  }
  .TApplication .TForm .Title .CloseButton:hover {
    filter: grayscale(0%);
  }
  .TApplication .TForm .Title .CloseButton:active {
    filter: grayscale(100%);
  }
  .TApplication .TForm .Title .Caption {
    left: 28px;
    right: 28px;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    font-weight: bold;
    line-height: 24px;
    color: #FFF;
  }
  .TApplication .TForm .ClientArea {
    top: 24px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    background-color: #D6D6D6;
    overflow: hidden;
    box-sizing: inherit;
  }
  .TApplication .TForm .SizeHandle {
    background-color: #2E86C1;
    width: 16px;
    height: 16px;
    left: auto;
    top: auto;
    right: -8px;
    bottom: -8px;
    cursor: se-resize;
    transform: rotate(45deg);
  }
  .TApplication .TForm.noTitle .Title {
    display: none;
  }
  .TApplication .TForm.noTitle .ClientArea {
    top: 2px;
  }
  .TApplication .TForm.noCloseButton .Title .CloseButton {
    display: none;
  }
  .TApplication .TForm .Disabled {
    color: #8D8D8D !important;
    text-shadow: 1px 1px 0 #FFF !important;
    cursor: default !important;
  }
`;

class TForm extends TControl {
    constructor(properties) {
       super(properties);
       this.modalResult = null;
       this.isModal = false;
       this.addStyle(TFormStyle);
    }

    addStyle(style) {
        super.addStyle(style);
    }


} 

export { TForm }