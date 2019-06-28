import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

export class RecipeService {

  recipeSelected= new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schintzel', 'A super-tasty Schintzel - just Awsome', 'https://www.recipetineats.com/wp-content/uploads/2017/08/Schnitzel-9.jpg',
    [
        new Ingredient("Meat",1),
        new Ingredient("French Fries",20),

    ]),
    new Recipe('Big Fat Burger', 'What else You need to Say', 'https://media.giphy.com/media/WBTUlyKBVlTTa/giphy.gif',
    [
      new Ingredient("Bun",2),
      new Ingredient("Meat",1)
        
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
