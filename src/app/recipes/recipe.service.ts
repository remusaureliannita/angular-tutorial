import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe(
            'Pizza',
            'Pizza description',
            'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
            [
                new Ingredient('Salami', 1),
                new Ingredient('Mozzarella', 1),
                new Ingredient('Tomatoes', 1)
            ]),
        // tslint:disable-next-line:max-line-length
        new Recipe(
            'Burger',
            'Burger description',
            'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Cheese', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
