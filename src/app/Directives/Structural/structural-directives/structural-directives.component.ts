import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  PropertyBindingArray: string[] = [];
  IfElseArray: string[] = [];
  count = 0;
  SwitchCaseValue:string='';
  Countries:string[]=['India','Sri Lanka','South Korea','China'];
  States:string[]=['Tamil Nadu','Mumbai','Bangalore','Pune'];
  Games:string[]=['Cricket','Football','UFC'];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log(this.SwitchCaseValue);
  }
  AddToTestArray(array:string[]): void {
    array.push('Test input ' + this.count);
    this.count++;
  }
  isArrayEmpty(): boolean {
    if (this.PropertyBindingArray.length > 0)
      return false;

    return true;
  }
  ClearArrayInputs() {
    this.PropertyBindingArray = [];
    this.IfElseArray = [];
  }
}
