import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/recipes/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.services';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') slForm:NgForm

  subscription:Subscription
  editMode=false;
  edeitIteMIndex:number;
  edititem:Ingredient;


  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppingListService.startEditing.subscribe(
      (index:number)=>{
        this.edeitIteMIndex=index;
        this.edititem=this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name:this.edititem.name,
          amount:this.edititem.amount
        })
      }
    ) 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  onAdd(form:NgForm){
    const value=form.value;
    const newIngredient= new Ingredient(value.name,value.amount);
    //this.shoppingListService.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
