import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/recipes/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  onAdd(inputName:HTMLInputElement,inputNumber:HTMLInputElement){
    const igName=inputName.value;
    const ignumber=inputNumber.valueAsNumber;
    const newIngredient= new Ingredient(igName,ignumber);
    this.ingredientAdded.emit(newIngredient);
  }
}
