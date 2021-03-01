import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'demo';

  componentList = {
    'basic': [
      {
        'id': 'input',
        'label': 'Text Field',
        'icon': 'input',
      },
      {
        'id': 'button',
        'label': 'Mat Raised Button',
        'icon': 'smart_button'
      },
      {
        'id': 'checkbox',
        'label': 'Checkbox',
        'icon': 'check_box',
      }
    ]
  };

  mainData = {
    "data": [
      {
        "id": "input",
        "label": "First name",
        "expand": false,
      },
      {
        "id": "input",
        "label": "Last name",
        "expand": false,
      },
      {
        "id": "input",
        "expand": false,
        "label": "Phone number"
      },
      {
        "id": "input",
        "expand": false,
        "label": "Email (optional)"
      },
      {
        "id": "button",
        "expand": false,
        "label": "Submit"
      }
    ],
    "style": {
      'padding': '10px'
    }
  };

  get mainDataInString() {
    return JSON.stringify(this.mainData, null, 2);
  }

  set mainDataInString(v) {
    try {
      this.mainData = JSON.parse(v);
    }
    catch (e) {
      console.log('error occored while you were typing the JSON');
    };
  }

  onMobilePreview() {
    document.getElementById('preview_container').style.width = '400px';
    document.getElementById('preview_container').style.height = '800px';
  }

  onDesktopPreview() {
    document.getElementById('preview_container').style.width = '100%';
    document.getElementById('preview_container').style.height = '100%';
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mainData.data, event.previousIndex, event.currentIndex);
  }

  
  drop2(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  currentSelectedIndex: number = null;
  onSelected(i: number, item: any) {
    console.log(i, item);
    if (this.currentSelectedIndex == null) {
      this.currentSelectedIndex = i;
      this.mainData.data[i].expand = true;
    } else {
      this.currentSelectedIndex = this.currentSelectedIndex;
      this.mainData.data[this.currentSelectedIndex].expand = false;

      this.currentSelectedIndex = i;
      this.mainData.data[i].expand = true;
    }
  }


}
