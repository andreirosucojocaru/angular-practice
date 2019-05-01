import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() buttonClicked = new EventEmitter<number>();

  onRecipesClicked() {
    this.buttonClicked.emit(1);
  }

  onShoppingListClicked() {
    this.buttonClicked.emit(2);

  }
}
