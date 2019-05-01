import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameEvent = new EventEmitter<{crtIndex: number}>();
  iteration: number = 0;
  reference: number;

  constructor() { }

  ngOnInit() {
  }

  onStartGameClicked() {
    this.reference = <any>setInterval(() => {
      this.iteration++;
      this.gameEvent.emit({crtIndex: this.iteration});
    }, 1000);
  }

  onStopGameClicked() {
    clearInterval(this.reference);
  }

}
