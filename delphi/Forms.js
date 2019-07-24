import Utils from './Utils.js'
import TControl from './TControl.js';

const formsModuleStyle = `
.TApplication .TForm {
    box-sizing: border-box;

    border-radius: 7px 7px 0 0;
    //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
   
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





  .TApplication .TForm .ContentContainer {
    top: 30px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    background-color: var(--form-back-layer);
    overflow: hidden;
    box-sizing: inherit;
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
        let borderTop = document.createElement('div');
        let borderRight = document.createElement('div');
        let borderBottom = document.createElement('div');        
        let borderLeft = document.createElement('div');
        borderTop.className = 'BorderTop';
        borderRight.className = 'BorderRight';
        borderBottom.className = 'BorderBottom';        
        borderLeft.className = 'BorderLeft';
        this.objectContainer.appendChild(borderTop);
        this.objectContainer.appendChild(borderRight); 
        this.objectContainer.appendChild(borderBottom);               
        this.objectContainer.appendChild(borderLeft);
    }


} 

export { TForm }