import { Ingredient } from '../recipes/shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export class ShoppingListService{

    ingredientAdded= new Subject<Ingredient>();
    startEditing= new Subject<number>();

    private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tamatoes',10)
      ];

      getIngredient(index:number){
        return this.ingredients[index];

      }

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredients(ingredients:Ingredient[]){
        //   for(let ingredient of ingredients){
        //       this.ingredients.push(ingredient);
        //   }
        this.ingredients.push(...ingredients)
      }

      addIngredient(ingredients:Ingredient){
        //   for(let ingredient of ingredients){
        //       this.ingredients.push(ingredient);
        //   }
        this.ingredients.push(ingredients)
        this.ingredientAdded.next(ingredients)

      }
}