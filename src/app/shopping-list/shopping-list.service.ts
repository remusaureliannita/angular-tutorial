import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        if (this.checkIfExist(ingredient)) {
            this.ingredients
                .find(ing => ing.name === ingredient.name)
                .amount += ingredient.amount;
        } else {
            this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        for (const ingredient of ingredients) {
            if (this.checkIfExist(ingredient)) {
                this.ingredients
                    .find(ing => ing.name === ingredient.name)
                    .amount += ingredient.amount;
            } else {
                this.ingredients.push(ingredient);
            }
        }

        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    checkIfExist(ingredient: Ingredient): boolean {
        return this.ingredients.filter(ing => ing.name === ingredient.name).length > 0;
    }
}
