import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') data:NgForm;

  defaultQuestion='teacher'
  answer='';
  genders=['male','female']

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  


  onSubmit(form:NgForm){
    console.log(form);
   // console.log(this.data);
  }
}
