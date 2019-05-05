import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  currentRecipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.currentRecipe = this.recipeService.getRecipes()[+this.route.snapshot.params['id']];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.currentRecipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.currentRecipe.ingredients);
  }

  onEditRecipeClicked() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipeClicked() {
    const currentIndex = +this.route.snapshot.params['id'];
    this.recipeService.deleteRecipe(currentIndex);
    this.router.navigate(['/recipes'], { relativeTo: this.route });
  }
}
