import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {

  @Input() inputArray:string[]=[];
  constructor() { }

  ngOnInit(): void {
    console.log("data changed");
  }

}
