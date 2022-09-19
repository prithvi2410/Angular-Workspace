import { ChildComponent } from './../Child/child/child.component';
import { Component, OnInit, ViewChild, Output, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //@ViewChild(ChildComponent) Output!:ChildComponent;
  @ViewChild('Child') Output!:ChildComponent;
  fromViewChild:string='';

  tempOutput:string='';
  fromOutput:string='';

  constructor() { }

  ngOnInit(): void {

  }

  viewChild(){
   this.fromViewChild='From child '+this.Output.Input;
  }

  getOutput(tempOutput:string){
    this.tempOutput=tempOutput;
  }

  viewOutput(){
    this.fromOutput='From child '+this.tempOutput;
  }

  Input:string='';


}
