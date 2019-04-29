import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <p>This is the success message!</p>
        </div>
      </div>
    </div>`,
  styles: [`
    p {
      color: green;
    }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
