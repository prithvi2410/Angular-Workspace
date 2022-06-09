import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  constructor() { }
  loopData:any;
  ngOnInit(): void {
    this.loopData = this.getData();
  }

  getData():any{
    return [
      {
        "emp_id":"ACE0001",
        "emp_Name" : "Chittu"
      },
      {
        "emp_id":"ACE0002",
        "emp_Name" : "gokul"
      },
      {
        "emp_id":"ACE0003",
        "emp_Name" : "prithvi"
      }
    ]
  }

}
