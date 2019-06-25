import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef:ElementRef ,private render:Renderer2) { }

  ngOnInit(){
   // this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.render.setStyle(this.elRef.nativeElement,'background-color','pink');
  }
}
