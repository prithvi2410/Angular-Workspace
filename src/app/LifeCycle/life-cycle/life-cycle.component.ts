import { Hero } from './../Hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  constructor() { }
  text:string='';
  hero:Hero={Name : ""};

  ngOnInit(): void {
  }
}
