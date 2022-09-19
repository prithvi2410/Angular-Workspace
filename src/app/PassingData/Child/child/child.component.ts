import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() Input:string='';
  @Output() Output:EventEmitter<string> =new EventEmitter<string>();
  tempname:string='Sam';

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges()
  {
    this.Output.emit(this.Input);
  }


}
