import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @Input() textColor="green";
  @Input() borderColor="red";
  tableCouleur=["green","red","yellow","blue","purple"];
  @HostBinding('style.color') color = this.textColor;
  @HostBinding('style.border-color') bdcolor = this.borderColor;


  @HostListener('keypress') changeColor(){
    this.color=this.tableCouleur[Math.floor(Math.random()*(this.tableCouleur.length-1)];
    this.bdcolor=this.tableCouleur[Math.floor(Math.random()*(this.tableCouleur.length-1)];
    // this.color="blue";
    // this.bdcolor="pink";
  }
  constructor() { }

}
