import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emit-comp-one',
  templateUrl: './emit-comp-one.component.html',
  styleUrls: ['./emit-comp-one.component.css'],
})
export class EmitCompOneComponent implements OnInit {
  num: number = 0;
  result:number=0 ;
  constructor(private cdRef : ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewChecked(){
    //ng throwed an exception without this, cuz child is changing the parent DOM 
    this.cdRef.detectChanges();
  }

  ToggleEmitting() {
    console.log('Emitting is Toggled From Emit-Comp-One');
  }
  addResult(Num:number){
    this.result=Num;
  }
}
