import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export  class HeaderComponent{
    
@Output() featureSeleted=new EventEmitter<String>();

    onSeleect(feature:String){
        this.featureSeleted.emit(feature);

    }


} 