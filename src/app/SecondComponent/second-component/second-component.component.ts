import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  @Input() inputValue:any;
  @Input() inputValue2:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    console.log('Input Changed');
  }

}
