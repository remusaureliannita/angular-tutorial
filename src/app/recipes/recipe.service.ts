import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('A Test Recipe', 'This is simply a test', 'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
        // tslint:disable-next-line:max-line-length
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
