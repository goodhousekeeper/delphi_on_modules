import Utils from './Utils.js'
import TControl from './TControl.js';

const formsModuleStyle = `
.TApplication .TForm {
    box-sizing: border-box;
    border-radius: 7px 7px 0 0;
    overflow: hidden;
    min-height: 32px;
    min-width: 100px;
}

.TApplication .TForm .BorderTop {
    top: 0;
    right: 4px;
    left: 4px;
    height: 30px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAMAAADaS4T1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0M0NBNEU0Q0FFMDkxMUU5OTVBQUI3OEEzMTQ3MDQyMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0M0NBNEU0QkFFMDkxMUU5OTVBQUI3OEEzMTQ3MDQyMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUwNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lgl1FgAAADxQTFRFAGD/AGX1AFntAETlAGz/AJb/AFr5AEHUAFztAFDqAFfyAFfrAJH/AFf3AFTvAGX/AGD9AGr/AFLmAFTqAXFw1gAAADBJREFUeNocx4cJADAMwDB37/3/rw1BYDCWQMdjyDSueqJop6gMIhtYHLXkHOkLMAAoZgFrf25PLgAAAABJRU5ErkJggg==');
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
}

.TApplication .TForm .BorderRight {
    top: 0;
    bottom: 4px;
    right: 0;
    width: 4px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAMAAADO4v//AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MTQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OTYyMjM5NUFFMTIxMUU5QkYwQUZGRTUyQUI1QzUzMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OTYyMjM5NEFFMTIxMUU5QkYwQUZGRTUyQUI1QzUzMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wwXRuQAAAAxQTFRFABelADvhAEb2AAuQ52Br3gAAAA9JREFUeNpiYGJkYAYIMAAAEwAHOqAc6gAAAABJRU5ErkJggg==');
    background-repeat-x: no-repeat;
    background-repeat-y: repeat;
}

.TApplication .TForm .BorderBottom {
    bottom: 0;
    right: 0;
    left: 0;
    height: 4px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAMAAAB4BqUIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MjQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUQyOURGNUFFMTIxMUU5ODZFRThDNjI4NjQ4MTdCNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUQyOURGNEFFMTIxMUU5ODZFRThDNjI4NjQ4MTdCNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5YzMsgAAAAxQTFRFADviABimAEb2AAuQ4dVEVQAAABJJREFUeNpiYGJgYGBkYAYIMAAAHAAHyPMm+AAAAABJRU5ErkJggg==');
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
}

.TApplication .TForm .BorderLeft {
    top: 0;
    bottom: 4px;
    left: 0;
    width: 4px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAMAAADO4v//AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MzQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjEwN0VGNUFFMTIxMUU5OTdDQ0I0MjI2NjVCREY1NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjEwN0VGNEFFMTIxMUU5OTdDQ0I0MjI2NjVCREY1NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUzNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hEs6ggAAAAxQTFRFAFTiABLUAGryAC3eESdBgAAAAA9JREFUeNpiYGRmYgAIMAAAFgAHOLLlfgAAAABJRU5ErkJggg==');
    background-repeat-x: no-repeat;
    background-repeat-y: repeat;
}

.TApplication .TForm .Title {
    top: 3px;
    left: 4px;
    right: 4px;
    height: 24px;
    cursor: pointer;
}
.TApplication .TForm .Title .Icon, .TApplication .TForm .Title .CloseButton, .TApplication .TForm .Title .Caption {
    height: 24px;
    top: 0;
}

.TApplication .TForm .Title .Icon {
    width: 24px;
    left: 0;
    background: url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAwAAAAMADO7oxXAAAEhklEQVRo3u2aPXLjOBCFP+86NxMrVcd24huwb7K6CZs30VGaN1CiiaHUTOgTeAIAEqkfivoZ21O1r4plgwaBfo2HBhow/OV4uLUBM1OgNLMpdfu/1/cg8HiHNkrgvPWHuAuBq0bAzKr4o2+3gRKf0x8OiqqKqmJmF9uRbfj3gg9UVf9zd23bVtu2lSACgwcozjTUrw90IRBCyM4ME82psg2XSGgrlfV6fdSjZ6E6KAZ3gjupXQN8qj+zDZOGzsw+3R13v9zoaR30Sw8j1SrAqgqaRnHX8UmcI4y7x7Hd8+AoQogPDCRzFKr9+hXQkEYj2wDGyws6m0Xj39+fHfB/zphRAnY1Aff4ZCJjBHYELfU7sAGw2QwtS3BXfv16dTOrR4brCtlkgzkekCwbO+aI4VqRBsLpy6YftU5KaLLXe1KREMh+FCFGJZQYXEIiFMA96iNJayHCqutYdd2enByRgAg0Dby/t87eRB8lcNZbmUDyuvS9vi1o6jMR8AAeohVJOgsRliHsCGxl54hAWUJdA6zdbD1YAA8kNFikThE4JZVBIaI/9PtSlMUCWSwAWIbAcm+ufFZG08SuzI5Hp4MR8GTY3sQaQmTnqfxdcroAuIKE+ABFUSAihJ4zRARREFnGOl0BFCxEKIoVRbGiaSCE3KofNeU0gbGJm8PiHgHtE1AfJ6CKyJL5PBEIcfgWIog487kn2Qg7GU4gcBHMUoxgcqQSEUSEstTB+4UIqjp4P6bijME6YGbV6+vrSPXbURSrrWz6eHrave+6NzabBagS6KniCPZHwJ6fn/+k/RTFivncj74vihUAHx9vhLAA9f5+aRKBb0fTeIpIPqn+QEJXbRmuRN0oHmRbzrLZrgcT8W0EzJVmsyOQZXMTga+AufJQ28H7ZQjoiNYnEVDVFMcvb+gWbDYLuu7tqm9/BIEQridwVRQydarSj0rhonZcMVemZ5KH2J8D1rbtaGumTjkPQFw934riJhKjcI8biZGgsr8S1+v1epRAVToqP5TAAGaDuWDqfFZ2WO3E+/txcBs7NzpGoCFlf0LcB/Zl04fIkqen1R8zfgqOTWJPj2UCVelHP85b4Z9GABgexH45dhnf2XOr0TAaE+pA02hKyw9Ho+ve+Ph4A5Z3M16ICY9PWI9GtxIigbJ03JXlNmYPsd363gsTIk8fByOQk/oqJdR1neR0JDW6dOt7znDcs3Rt6v3BgICZVS8va53N2nQOs8sYadt4tFCBB6HZCOHCneM5r0t0kBEj4SQcZGSzWUtZ5oQaN0sXEfE0WAGajSQ5hduNzwR2dwUXXXw8Zs9zIJthBMhBqa5TjurOpEuNUzg4QpwumwGBUdkMnQSkHavkYyGPg+DTOgO2x4aqStu23tu6TJbNgABjshkhEI+FjG18vYSAOxq97uv1ur5lzXk0s3RXZefuqmpgrLPPKR2qqrn7TUYPCHDdDeOPwSNQb+8B/kJ8eVJ/b9x6sFX1C7urAk+FGGG7bkXXLeO7tlXbfdLYLfkkt/+rwdmJa2f+bDfe2P/1EvqfwHfjN57qfUzoi+OGAAAAJXRFWHRjcmVhdGUtZGF0ZQAyMDEwLTA3LTI3VDEyOjEyOjQ3KzAwOjAwA3zMRwAAACV0RVh0bW9kaWZ5LWRhdGUAMjAxMC0wNy0yN1QxMjoxMjo0NyswMDowMFzNunMAAAAASUVORK5CYII=') no-repeat center center;
    background-size: 16px 16px;
  }

.TApplication .TForm .Title .Caption {
    left: 24px;
    right: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    font-size: 15px;
    line-height: 24px;
    color: var(--form-caption-color);
    text-shadow: 1px 1px 0 var(--form-caption-shadow-color);
}

.TApplication .TForm .Title .CloseButton {
    width: 24px;
    right: 0;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NjQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTIwQzEwMkFFMjMxMUU5OUNDQkUxOTc4NzU5N0VGOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTIwQzEwMUFFMjMxMUU5OUNDQkUxOTc4NzU5N0VGOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU2NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dQfAqwAAAw1JREFUeNqUVM9LVFEU/u57b0YlUMpQGFu4qFZtqkUURaJBizQaDIpIWgRRFLRoIdEfkIsgTMgICSsJixb9kiiignYRkeDKICo1KNSZcebN+3Hvfbdz3nvjuPVyGe6c977zfec79zwL+fne4X9zi9Kscx0fmsOeaae3K/syX8b4EIqLqLrwPSgJGcCyoELQ0op/Ay8+a4RV47mlltzE9Qlgk6BMuDmIthzsDCpFlIsIfYQhooiRDDackZCUNAzgu6iUSsXCr2xL6/1vFmddWUZDIxqysB04GTjxL/FbNkesZNv1SCZrZbLun58dmzMO490VlEsM86sIaAfMT2xSxswKMmQVFNGSi1KKclk2Y2N+ekDKVwpwS+jux7XbcCuokM5yGi8vobSIsQ84fYU5tBKkxcnW8KFEtQKvzMy79nPkxiQnJSpiVj6X/egLx3vyLMFoUpOshD82LAhZ8NWB9MnoFL8aaVb7ZDoNHu3kiImAiJyv4bk9Pu/E58v9afDeRxiFya/p374t0CF0QEECC6ziqSXUMxkbQ22zDC71ppiHn9NDvhNWBKEBBSNFRFvX8ERL14bwZDVpiwxI2/lDWF0ntsVgsxaPSK36F7JVlC+pjfgpfOddHf/4O0c4hWJ8FAgdcIo1/sUmUyjhH5lKkef2pofxmTQF6LVQKN/Wdf0Bp0guBpUw/DzFXDjI1+bsTj5vaMbTvzQA3DwVWNo3KqrhaTao88mFu/WiBu5mLdykCGe2p8FnLpFTj4w0LLOun65t6PHh0+tYdlc6PGQS+6JwKsfxtw8QOwgqlMtHPH/7GrGxDU3NaGzi8RBIbkislnwlXR40FejR8FL5iOlmStj9w/AMSBnaniuELaj5PHCCOQWSVsWCA77FXCCSTYVKtg/OfCFqau3E8gKksbM+fwUIaiIhjDBaGOVQFu6WMkpbii8kGV0IYTraWX/PXe/VgdnZi8eKC78bMpYRQsdCbIsVUAqHckXGNoaaQzU5BgF1INe+Y+zNyfdbgQF5eNRd78dvbkkfGamgr/pfgAEA4u1YO0cOA2kAAAAASUVORK5CYII=') no-repeat center center;
    filter: grayscale(25%);
  }
  .TApplication .TForm .Title .CloseButton:hover {
    filter: grayscale(0%);
  }
  .TApplication .TForm .Title .CloseButton:active {
    filter: grayscale(75%);
  }
 
.TApplication .TForm .ContentContainer {
    top: 30px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    background-color: var(--form-back-layer);
    overflow: hidden;
    box-sizing: inherit;
}
 
.TApplication .TForm.noTitle .Title {
    display: none;
}
.TApplication .TForm.noTitle .ContentContainer {
    top: 4px;
}

.TApplication .TForm.noCloseButton .Title .CloseButton {
    display: none;
}

.TApplication .TForm .SizeHandle {
    width: 12px;
    height: 12px;
    right: 0;
    bottom: 0;
    cursor: se-resize;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NzQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNEFBRDg3REFFMjMxMUU5OEY5RTgyOEI4NDE5NEI0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNEFBRDg3Q0FFMjMxMUU5OEY5RTgyOEI4NDE5NEI0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU3NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+j9zGmAAAAGxQTFRF4d3K7ejS7ejU5eDJ5+DL6uXQ6ujV39zE4dzJ6eXR39vD39zH5eHL5eHJ3Na+39rF4dzL3NbA4drG7enW4d3I7ebQ6+TO7urT29fA7OfT6uXPu7Wiu7ai7OjR7enU7enT7urWu7Wk7urV////1SXZ2AAAAGxJREFUeNpEilkOwkAMxd50o2VfprQQJmnI/e/Iq4TAkj8sGQt5E5dpwi9e8Q8Nxq1TrSqzlEpBp2YuqwxVNf6JFjzIGFHoiGFo2ye5E7g0jcv+4FLX4Lv5usUcMa9eIo4gOee+P++up48AAwCnMQ4FktRCuQAAAABJRU5ErkJggg==') no-repeat center center;
  }
`;

Utils.addStyleNode(formsModuleStyle);

class TForm extends TControl {
    constructor(properties) {
       super(properties);
       this.modalResult = null;
       this.isModal = false;
       this.createNode();
    }

    createNode() {
        super.createNode();
        let style = this.style;
        let container = this.objectContainer;
        /*------------------------------------------------------------------------------ */        
        function endTransition () {
            document.onmousemove = null
            container.onmouseup = null
            style.opacity = 1.0
        }
        /*------------------------------------------------------------------------------ */
        style.height = this.getProperty('height') ? (this.getProperty('height') + 'px') : '';
        style.width = this.getProperty('width') ? (this.getProperty('width') + 'px') : '';
        /*------------------------------------------------------------------------------ */
        let borderTop = document.createElement('div');
        let borderRight = document.createElement('div');
        let borderBottom = document.createElement('div');        
        let borderLeft = document.createElement('div');
        borderTop.className = 'BorderTop';
        borderRight.className = 'BorderRight';
        borderBottom.className = 'BorderBottom';        
        borderLeft.className = 'BorderLeft';
        container.appendChild(borderTop);
        container.appendChild(borderRight); 
        container.appendChild(borderBottom);               
        container.appendChild(borderLeft);
        /*------------------------------------------------------------------------------ */
        let title = document.createElement('div');
        let caption = document.createElement('div');
        let closeButton = document.createElement('div');
        let icon = document.createElement('div');

        container.appendChild(title);
        title.className = 'Title';
        title.appendChild(icon);
        title.appendChild(caption);
        title.appendChild(closeButton);

        icon.className = 'Icon';
        icon.id = container.id + '.Icon';

        caption.className = 'Caption';
        caption.id = container.id + '.Caption';
        this.caption = this.getProperty('caption');

        closeButton.className = 'CloseButton';
        closeButton.id = container.id + '.CloseButton';
        closeButton.addEventListener('click', () => this.hide())

        /*------------------------------------------------------------------------------ */

        if (this.getProperty('sizeable')) {
            let sizeHandle = document.createElement('div');
            sizeHandle.id = `${container.id}.SizeHandle`;
            sizeHandle.className = 'SizeHandle';

            this.contentContainer.appendChild(sizeHandle);

            sizeHandle.addEventListener('mousedown', (e) => {
                let box = container.getBoundingClientRect();
                let deltaX = e.pageX - box.width;
                let deltaY = e.pageY - box.height;
                this.bringToFront();
        
                function sizeAt (e) {
                    style.width = e.pageX - deltaX + 'px';
                    style.height = e.pageY - deltaY + 'px';
                    style.opacity = 0.5;
                }
        
                document.onmousemove = (e) => sizeAt(e);
                container.onmouseup = () => endTransition();
            })
        }

        /*------------------------------------------------------------------------------ */
        title.addEventListener('mousedown', (e) => {
            let box = container.getBoundingClientRect();
            let deltaX = e.pageX - box.left;
            let deltaY = e.pageY - box.top;
            style.width = (box.width) + 'px';
            style.height = (box.height) + 'px';
            this.bringToFront();
        
            function moveAt (e) {
              style.left = e.pageX - deltaX + 'px'
              style.top = e.pageY - deltaY + 'px'
              style.opacity = 0.5
            }
        
            document.onmousemove = (e) => moveAt(e)
            container.onmouseup = () => endTransition()
        })
    }

    bringToFront() {

    }

} 

export { TForm }