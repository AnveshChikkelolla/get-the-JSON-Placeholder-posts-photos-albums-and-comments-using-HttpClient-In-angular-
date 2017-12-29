import { Directive, TemplateRef, ViewContainerRef,Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddColor]'
})
export class AddColorDirective {
  
  

  @Input()
  
  appAddColor:number;

    constructor(private el:ElementRef,public renderer:Renderer){ }
      
  @HostListener('click') onclick(){
    if(this.appAddColor>=75)
    this.el.nativeElement.style.background='lightblue';
    else
    this.el.nativeElement.style.background='lightgreen';
  }

}