import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  indexes = [];

  onGameEvent(gameData: {crtIndex: number}) {
    this.indexes.push(gameData.crtIndex);
  }

  isEven(crtIndex: number) {
    if (crtIndex % 2 === 0) {
      return true;
    }
    return false;
  }

}
