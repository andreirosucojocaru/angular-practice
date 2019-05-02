import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() currentRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images-na.ssl-images-amazon.com/images/I/61k9AjsgiEL._SX385_BO1,204,203,200_.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeEvent(recipe: Recipe) {
    this.currentRecipe.emit(recipe);
  }

}
