import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-emit-comp-two',
  templateUrl: './emit-comp-two.component.html',
  styleUrls: ['./emit-comp-two.component.css'],
})
export class EmitCompTwoComponent implements OnInit {
  @Input() inputNumber:number=0 ;
  @Output() outputNumber = new EventEmitter<number>()
  @Output() outputVariable = new EventEmitter();
  constructor() {}
  
  ngOnChanges():void{ 
    this.outputNumber.emit(this.inputNumber+10);
  }
  ngOnInit(): void {}
  
  btnClicked() {
    this.outputVariable.emit();
  }
}
