import TApplication from './TApplication.js';
import TControl from './TControl.js';
import Utils from './Utils.js';
import * as Constants from './Constants.js';



const formsModuleStyle = `
.TOverlay {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
}

.TApplication .TForm {
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    min-height: 32px;
    min-width: 100px;
    color: var(--form-color);
    text-shadow: 1px 1px 0 var(--form-shadow-color);
    background-color: var(--form-back-layer);
}

.TApplication .TForm .Borders {
    filter: grayscale(50%);
}

.TApplication .TForm.Active .Borders {
    filter: grayscale(0%);
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
.TApplication .TForm .Title .Icon, 
.TApplication .TForm .Title .Caption,
.TApplication .TForm .Title .Buttons
 {
    height: 24px;
    top: 0;
}

.TApplication .TForm .Title .Icon {
    width: 24px;
    left: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 16px 16px;
  }

.TApplication .TForm .Title .Caption {
    left: 24px;
    right: 48px;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    font-size: 15px;
    line-height: 24px;
    color: var(--form-caption-color);
    text-shadow: 1px 1px 0 var(--form-caption-shadow-color);
}

.TApplication .TForm .Title .Buttons {
    width: 24px;
    filter: grayscale(25%);
    background-repeat: no-repeat;
    background-position: center center;
}

.TApplication .TForm .Title .Buttons:hover
{
  filter: grayscale(0%);
}

.TApplication .TForm .Title .Buttons:active  
{
  filter: grayscale(75%);
}

.TApplication .TForm .Title .CloseButton {
    right: 0;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NjQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTIwQzEwMkFFMjMxMUU5OUNDQkUxOTc4NzU5N0VGOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTIwQzEwMUFFMjMxMUU5OUNDQkUxOTc4NzU5N0VGOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU2NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dQfAqwAAAw1JREFUeNqUVM9LVFEU/u57b0YlUMpQGFu4qFZtqkUURaJBizQaDIpIWgRRFLRoIdEfkIsgTMgICSsJixb9kiiignYRkeDKICo1KNSZcebN+3Hvfbdz3nvjuPVyGe6c977zfec79zwL+fne4X9zi9Kscx0fmsOeaae3K/syX8b4EIqLqLrwPSgJGcCyoELQ0op/Ay8+a4RV47mlltzE9Qlgk6BMuDmIthzsDCpFlIsIfYQhooiRDDackZCUNAzgu6iUSsXCr2xL6/1vFmddWUZDIxqysB04GTjxL/FbNkesZNv1SCZrZbLun58dmzMO490VlEsM86sIaAfMT2xSxswKMmQVFNGSi1KKclk2Y2N+ekDKVwpwS+jux7XbcCuokM5yGi8vobSIsQ84fYU5tBKkxcnW8KFEtQKvzMy79nPkxiQnJSpiVj6X/egLx3vyLMFoUpOshD82LAhZ8NWB9MnoFL8aaVb7ZDoNHu3kiImAiJyv4bk9Pu/E58v9afDeRxiFya/p374t0CF0QEECC6ziqSXUMxkbQ22zDC71ppiHn9NDvhNWBKEBBSNFRFvX8ERL14bwZDVpiwxI2/lDWF0ntsVgsxaPSK36F7JVlC+pjfgpfOddHf/4O0c4hWJ8FAgdcIo1/sUmUyjhH5lKkef2pofxmTQF6LVQKN/Wdf0Bp0guBpUw/DzFXDjI1+bsTj5vaMbTvzQA3DwVWNo3KqrhaTao88mFu/WiBu5mLdykCGe2p8FnLpFTj4w0LLOun65t6PHh0+tYdlc6PGQS+6JwKsfxtw8QOwgqlMtHPH/7GrGxDU3NaGzi8RBIbkislnwlXR40FejR8FL5iOlmStj9w/AMSBnaniuELaj5PHCCOQWSVsWCA77FXCCSTYVKtg/OfCFqau3E8gKksbM+fwUIaiIhjDBaGOVQFu6WMkpbii8kGV0IYTraWX/PXe/VgdnZi8eKC78bMpYRQsdCbIsVUAqHckXGNoaaQzU5BgF1INe+Y+zNyfdbgQF5eNRd78dvbkkfGamgr/pfgAEA4u1YO0cOA2kAAAAASUVORK5CYII=');

  }

.TApplication .TForm .Title .MaximizeButton {
    right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ODQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzI4MDlEMkFFOUQxMUU5QjU0MEFDRDJGQzczNTVDOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzI4MDlEMUFFOUQxMUU5QjU0MEFDRDJGQzczNTVDOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3CUSYQAAAoFJREFUeNqUVLtuE0EUPXdmbSdQGCGgouAbkpIKaICKhgKJBiGoaKEAIVFQIiEKEEJARY34kYiKHyA8Ilt2YuPH7rwud+54k9AEuFrNzuzOuefcx4zBjcHlV+PtUeD/tCsvR7j+s7p6np5fO/HoY/w+DeOaJw6zwIMAY5A8siUdHa/mDmg8jk0+3+8TJxJPt9+Hc6eoYzBe8HCGpUftOSa4RD6BGcvIIWIased42ADziMkE+Lr9YtOI050Zr1foddCx1K1kRM+SNdQhFqeVQc9k7x3CuiEIwuqzMz970laCHy2wu0Rl8avheYOlE34sA+pAdWCRMA0cZH9AikDkHIV4MZk74+cBwxkLz7TGhzsVjjS61yAxiLKegl+EjBR3jcPfLQmMMl4t44eea0+W0IR/wHOG56yi5RebOVREMeUibTwNteNRwCAwJOA8Uo5ZavG6Cy5hoEwyPqfNc9fC6CepaDBwsijOSXMesNJMBWwO8XtMHY5XIiGvoj5BdsvS7tPpVzFDh5dVmUmFugasDEwQ/lWcxUtqVUArL+Gw7tvn/+GxZrCmbDHnmBYlGKPgpF5iG06pwgE+sLT6rkVf/y0ZDXNCK9wqgNuMFWmCj3zAL6diZNHRHfNIU5nQQZJXcxxOj0bR8uupqnhH+QdPjmxBEVLwif/EW/35wGl7tfykL1Yhss0TSlPkU7CPdx6NtmTUaItUUo9lzqq20MpF4CJcQMjXQ/VtN6E/wZ50L5B7KGVyEWmoPTF2VS0hlMJmFwHLCc7kFFc3P/mtx/3Nh1/kGkCnByqNqjAqRdJWk4aLUe8iC+9x2m0927j4Tjjv8oW39f9eftvjeOnNArf8bwEGACPwtCMtkV4mAAAAAElFTkSuQmCC');
}

.TApplication .TForm .Title .RestoreButton {
    right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1OTQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QUFFNkNCMkFFOUQxMUU5OTg1NURGN0U4OEQ3NTBFQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QUFFNkNCMUFFOUQxMUU5OTg1NURGN0U4OEQ3NTBFQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jwAzaQAAAqVJREFUeNqUVMtqFUEQPdUzc28ei4CoKxf6AwrmB0Qh/oTgQtCNWUaIJisXbrIRQUTQ/IDgF7h0GVy5FhLUkJDHvbm5M9Ovsqp7rokkLlIMQ890nzqnT1W3wSLfWW83DyJfMO6t13jclgu3Rm/uz658Cj+H2G94YDHyvONhDKKDRkxvy93YAq3DzODb0twzH0gyPfror1+mymB/zLsj1A6N4xBhI7kIZtSBfcAw4NDybgscBwwGwObW63kjSbdHPF2iX6EqqFfKG/2CCkMVsSQtDfpGs1eEaUMQRJGe7eNrl4pS8HtjHNQoCxy1fNyitsKP2qPx1HgWCUPPXtZ7xAAE1l1IFqPcij/22B2x8AwbHDUYW32+Lpc4E7TYQnyIDCLVk/Fjr0hJ11pYR9axdTg/AuU8ik+h+F3HjaOC0HrYwDagiXzjhfvtWf7As8LEyLc9hKRcsOIqJvwSI4uSKET+snSe7Kf25IM7BXmgq9U2x70Chv8juxIVaSAihVnB5hS/w9BithQJ+nXzpZMC7wSMolrFr3oKyyEopozUvXT4oBXqGZnSCVngTZKnKymv4rWqExKSi5wTTfh/OUwZTBWc80aicd6MyS4TLftkHnXtHOkU3rO0+kGBucRWM1rmiIlPJ7JZabM0wQc+4ZdTsVeIOv31Y7U6U4CcKG+bVYjveiHzp1NV8jbRzIptQJ1HNEEznaofdfjI/+ILnayz1cQdPvvHSbksc5TaKZ+Cv3hp1za1ZEgVzlIpZcxjTmozrVwE0qHWw2uTl1uHjLkBDqV7Ae2hqOQi0kw0U9FVSwilsJrCox7gqlpcPvzsNlbn5p9/l2sAVR+kTZOKX6gi3XlqNWm4EFLxCjiHK3Zj7fbCe+F8Eu5+qC96+W3tx4V3YzywfwQYAFxpz1+tP+FyAAAAAElFTkSuQmCC');
    display: none;
}

.TApplication .TForm.Maximized .Title .RestoreButton {
      display: block;
}

  
.TApplication .TForm.Maximized .Title .MaximizeButton {
    display: none;
}

.TApplication .TForm .ContentContainer {
    top: 30px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    overflow: hidden;
    box-sizing: inherit;
}
 
.TApplication .TForm.noTitle .Title {
    display: none;
}
.TApplication .TForm.noTitle .ContentContainer {
    top: 4px;
}

.TApplication .TForm.noTitle .BorderTop {
    height: 4px;
}


.TApplication .TForm.noMaximizeButton .Title .MaximizeButton {
    display: none;
}

.TApplication .TForm.noMaximizeButton .Title .Caption {
    right: 24px;
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
        this.setProperty('modal', false);
        this.setProperty('modalResult', false);
    }

    createNode() {
        super.createNode();
        let style = this.style;
        let container = this.objectContainer;
        /*------------------------------------------------------------------------------ */
        container.classList.add('TForm');
        container.addEventListener('click', () => this.bringToFront().setActive())
        /*------------------------------------------------------------------------------ */
        style.height = this.getProperty('height') ? (this.getProperty('height') + 'px') : '';
        style.width = this.getProperty('width') ? (this.getProperty('width') + 'px') : '';
        /*------------------------------------------------------------------------------ */
        let borderTop = document.createElement('div');
        let borderRight = document.createElement('div');
        let borderBottom = document.createElement('div');        
        let borderLeft = document.createElement('div');
        borderTop.className = 'Borders BorderTop';
        borderRight.className = 'Borders BorderRight';
        borderBottom.className = 'Borders BorderBottom';        
        borderLeft.className = 'Borders BorderLeft';
        container.appendChild(borderTop);
        container.appendChild(borderRight); 
        container.appendChild(borderBottom);               
        container.appendChild(borderLeft);

        /*------------------------------------------------------------------------------ */
        function endTransition () {
            document.onmousemove = null
            container.onmouseup = null
            style.opacity = 1.0
        }

        /*------------------------------------------------------------------------------ */
        if (this.getProperty('noTitle')) {
            style.height = (this.getProperty('height') + 'px');
            container.classList.toggle('noTitle', true);
        } else {
            let title = document.createElement('div');
            let caption = document.createElement('div');
            let maximizeButton = document.createElement('div');
            let restoreButton = document.createElement('div');
            let closeButton = document.createElement('div');
            let icon = document.createElement('div');
    
            container.appendChild(title);
            title.className = 'Title';

            title.appendChild(icon);
            icon.className = 'Icon';
            icon.id = container.id + '.Icon';
            if (this.getProperty('icon')) {
                this.icon = this.getProperty('icon');
            } else {
                this.icon = TApplication.icon;   
            }
    
            title.appendChild(caption);
            caption.className = 'Caption';
            caption.id = container.id + '.Caption';
            this.caption = this.getProperty('caption');
            caption.addEventListener('mousedown', (e) => {
                let box = container.getBoundingClientRect();
                let deltaX = e.pageX - box.left;
                let deltaY = e.pageY - box.top;
                style.width = (box.width) + 'px';
                style.height = (box.height) + 'px';
            
                function moveAt (e) {
                    style.left = e.pageX - deltaX + 'px';
                    style.top = e.pageY - deltaY + 'px';
                }
                style.opacity = 0.5;
                container.classList.remove('Maximized');
                document.onmousemove = (e) => moveAt(e)
                container.onmouseup = () => endTransition()
            });

            if (this.getProperty('noMaximizeButton')) {
                maximizeButton = undefined;
                restoreButton = undefined;
            } else {
                title.appendChild(maximizeButton);
                maximizeButton.className = 'Buttons MaximizeButton';
                maximizeButton.id = container.id + '.MaximizeButton';
                maximizeButton.addEventListener('click', () => this.maximize());

                title.appendChild(restoreButton);
                restoreButton.className = 'Buttons RestoreButton';
                restoreButton.id = container.id + '.RestoreButton';
                restoreButton.addEventListener('click', () => this.restore());
            }
    
            title.appendChild(closeButton);
            closeButton.className = 'Buttons CloseButton';
            closeButton.id = container.id + '.CloseButton';
            closeButton.addEventListener('click', () => this.hide());
        }
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
        
                function sizeAt (e) {
                    style.width = e.pageX - deltaX + 'px';
                    style.height = e.pageY - deltaY + 'px';

                }
                style.opacity = 0.5;
                container.classList.remove('Maximized');        
                document.onmousemove = (e) => sizeAt(e);
                container.onmouseup = () => endTransition();
            })
        }

        /*------------------------------------------------------------------------------ */

    }

    align() {
        let container = this.objectContainer;
        let style = this.style;
        let containerWidth = parseInt(style.width, 10);
        let containerHeight = parseInt(style.height, 10);
      
        if (!this.getProperty('screenCenter')) {
            return this;
        }
        if (container.offsetWidth > 0) {
            containerWidth = container.offsetWidth;
        }
        if (container.offsetHeight > 0) {
            containerHeight = container.offsetHeight
        }
        style.left = (window.innerWidth - containerWidth) / 2 + 'px';
        style.top = (window.innerHeight - containerHeight) / 2 + 'px';
        return this;
    }

    show() {
        if (TApplication.modalStack.length > 0) {
            this.showModal();
        }
        this.style.opacity = "0";
        super.show();
        this.align().bringToFront().setActive().fadeIn();
        return this;   
    } 
    
    showModal() {
        let modalStack = TApplication.modalStack;

        TApplication.overlay.show();
      
        super.show();
        this.style.zIndex = Constants.OVERLAY_Z_INDEX + 1;
        this.align().setActive().fadeIn();
        if (modalStack.length > 0) {
          modalStack[modalStack.length - 1].style.zIndex = Constants.OVERLAY_Z_INDEX - 1;
        }
        modalStack.push(this);
        this.setProperty('modal', true);
        this.setProperty('modalResult');     
    }

    hide() {
        let modalStack = TApplication.modalStack;
        let that = this;
   
        const afterFade = () => {
            super.hide();
            if (modalStack.length > 0) {
                let form = modalStack[modalStack.length - 1];
                form.style.zIndex = Constants.OVERLAY_Z_INDEX + 1;
                form.setActive();
            } else {
                TApplication.getMainForm().setActive();
            }
        }
      
        const afterHideQuery  = () => {
            if (this.getProperty('modal')) {
                this.setProperty('modal', false);
                modalStack.pop();
                if (modalStack.length === 0) {
                   TApplication.overlay.hide();
                }
                if (!this.getProperty('modalResult')) {
                    this.setProperty('modalResult', Constants.MODAL_RESULT_CLOSE);
                }
            }
            this.fadeOut(afterFade);
        }
      
        if (this.hideQuery) {
            this.hideQuery(afterHideQuery);
        } else {
            afterHideQuery();
        }
    }

    setActive() {
        TApplication.getObjectsByClassName('TForm').forEach(function (form) {
            form.objectContainer.classList.remove('Active');
        })
        this.objectContainer.classList.add('Active');
        return this;
    }

    bringToFront() {
        if (this.getProperty('modal')) {
            return this;
        }
        if (this === TApplication.getMainForm()) {
            return this;
        }
          
        TApplication.getObjectsByClassName('TForm').forEach(function (form) {
            form.style.zIndex = '1';
        })
        this.style.zIndex = Constants.BRING_TO_FRONT_Z_INDEX;
        return this;
    }

    maximize() {
        let container = this.objectContainer;
        let style = this.style;
        let box = container.getBoundingClientRect();
        /* save previous position */
        this.setProperty('positionBeforeMaximize', {top: box.top, left: box.left, width: box.width, height: box.height});
        
        style.top = 0;
        style.left = 0;
        style.width = '100%';
        style.height = '100%';
        
        this.objectContainer.classList.add('Maximized');
        
        return this;
    }

    restore() {
        let container = this.objectContainer;
        let style = this.style;
        let box = this.getProperty('positionBeforeMaximize');
        if (!box) {
            return this;
        }
        style.top = `${box.top}px`;
        style.left = `${box.left}px`;
        style.width = `${box.width}px`;
        style.height = `${box.height}px`;
        this.objectContainer.classList.remove('Maximized');
        return this;
    }
} 

class TOverlay extends TControl {
    constructor(properties) {
        super(properties);
    }

    createNode() {
        super.createNode();
        this.objectContainer.classList.add('TOverlay');
        this.style.zIndex = Constants.OVERLAY_Z_INDEX;
    }

    show() {
        this.style.opacity = '0';
        super.show();
        this.fadeIn();
    }

    hide() {
        this.fadeOut(() => super.hide());
    }
}

export { TForm, TOverlay }