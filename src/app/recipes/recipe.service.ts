import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService{
  recipeSelected =new EventEmitter<Recipe>();

  private  recipes: Recipe[]=[
        new Recipe('A Test Recipe 1','This is simply a test 1',
        'https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7.jpg',
        [new Ingredient("banana",1),
        new Ingredient("cheese",12)
      ]),
        new Recipe('A Test Recipe 2','This is simply a test 2',
        'https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7.jpg',
        [new Ingredient("chicken",5),
        new Ingredient("cucumbers",3),])
      ];
constructor(private shoppingService: ShoppingService){}

      getRecipes(){
        return this.recipes.slice();
      }
      
      addIngredientsToShoppingListService(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients);
      }
}