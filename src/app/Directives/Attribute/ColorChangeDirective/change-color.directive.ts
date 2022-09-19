import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ChangeColor]'
})
export class ChangeColorDirective {

  @Input() buttonStatus:boolean=true;
  @Input() buttonStatus1:boolean=true;
  constructor(private attributeElement:ElementRef)
  {

  }
  ngOnChanges():void{
    if(this.buttonStatus)
    this.attributeElement.nativeElement.style.color='red';

    else
    this.attributeElement.nativeElement.style.color='black';

    if(this.buttonStatus1)
    this.attributeElement.nativeElement.style.fontStyle = "italic";
    else
    this.attributeElement.nativeElement.style.fontStyle = "";
  }

}
