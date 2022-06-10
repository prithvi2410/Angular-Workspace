import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  isButtonClicked:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  changeButtonStatus():void{
    this.isButtonClicked=!this.isButtonClicked;
  }

}
