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
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.flickr.com/photos/sameergoyal/30622968353')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeEvent(recipe: Recipe) {
    this.currentRecipe.emit(recipe);
  }

}
