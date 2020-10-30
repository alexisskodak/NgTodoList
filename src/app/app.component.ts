import {Component} from '@angular/core';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Attribute declaration
  title: string = 'Liste de choses a faire';
  itemsList: Array<string> = [];
  item: string = ''

  // Method declaration
  addToList() {
    if (this.item.length <= 0) return;
    this.itemsList.push(this.item);
    this.item = '';
  }

  popFromList(index: number) {
    this.itemsList.splice(index, 1);
  }
}
