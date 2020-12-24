import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

export class ShoppingService{

  private  ingredients: Ingredient[]=[
        new Ingredient('apples',5),
        new Ingredient('tomato',5)
      ];
    ingredientsChanged= new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients);
    }
    
    addIngredients(ingredients:Ingredient[]){
      this.ingredients.push(...ingredients);
      ///...spread an array into list of items
    }
}