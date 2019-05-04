import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') theForm: NgForm;
  subscription: string = 'advanced';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    this.user.email = this.theForm.form.value.email;
    this.user.subscription = this.theForm.form.value.subscription;
    this.user.password = this.theForm.form.value.password;
    this.submitted = true;
    console.log(this.theForm.form);

    this.theForm.reset();
  }

}
