import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title:string = "Test title";
  componentValue1:string = "";
  componentValue2:string = "";
  constructor() { 
  //console.log("Test Constructor");
  }
  ngOnInit(): void {
  }
  
  TestFunction(message:String) {
    //console.log(message);
  }
}
