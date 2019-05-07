import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  buttonClicked: number;

  onButtonClicked(buttonClicked: number) {
    this.buttonClicked = buttonClicked;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDTmQdjEU9LXcNnnD70NdAe_ut5iyCa9g4",
      authDomain: "ng-recipe-book-aa8e7.firebaseapp.com",
    });
  }
}
