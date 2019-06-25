import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef:ElementRef ,private render:Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
}
