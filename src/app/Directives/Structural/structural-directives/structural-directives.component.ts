import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  TestArray:string[]=[];
  count=0;
  constructor() { }

  ngOnInit(): void {
  }
  AddToTestArray():void{
    this.TestArray.push('Test input '+ this.count);
    this.count++;
  }
  isArrayEmpty():boolean {
    if(this.TestArray.length>0)
      return false;
      
    return true;
  }

}
