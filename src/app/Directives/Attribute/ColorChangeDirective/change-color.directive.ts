import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ChangeColor]'
})
export class ChangeColorDirective {
  
  @Input() buttonStatus:boolean=true;
  constructor(private attributeElement:ElementRef) 
  {
    
  }
  ngOnChanges():void{
    if(this.buttonStatus)
    this.attributeElement.nativeElement.style.color='red';

    else
    this.attributeElement.nativeElement.style.color='black';
  }

}
