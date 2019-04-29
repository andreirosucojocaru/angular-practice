import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';

  isUsernameEmpty() {
    return this.username.length === 0;
  }

  onButtonClicked() {
    this.username = '';
  }

}
