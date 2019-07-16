import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupform:NgForm;

  defaultQuestion='teacher'
  answer='';
  genders=['male','female']

  suggestUserName() {
    const suggestedName = 'Superuser';
    // # using set value
    // this.signupform.setValue({
    //   userdata:{
    //     'username':suggestedName,
    //     'email':''
    //   },
    //   'secret':'pet',
    //   'gender':'male',
    //   'questionAnser':'test'
    // });

    // using patch 
    this.signupform.form.patchValue({
      userdata:{
      'username':suggestedName
    }
    });
  }


  


  onSubmit(form:NgForm){
    console.log(form);
   // console.log(this.signupform);
  }
}
