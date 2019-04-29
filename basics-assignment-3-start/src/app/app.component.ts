import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = false;
  clicksLog = [];
  timestampsLog = [];
  count = 0;

  onButtonClicked() {
    this.toggle = !this.toggle;
    this.count++;
    this.clicksLog.push(this.count);
    this.timestampsLog.push(new Date().toLocaleString());
  }

  getColor(index: number) {
    if (index >= 5) {
      return 'blue';
    }
    return 'white';
  }
}
