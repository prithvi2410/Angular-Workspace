import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../Hero';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
})
export class ChildCompComponent implements OnInit {
  @Input() InputText: string = '';
  @Input() InputObject: Hero = new Hero();
  LocalObject: Hero = new Hero();
  IsChecked: boolean = false;

  constructor() {}
  ngOnChanges(): void {
    console.log(
      'ngOnChanges called on child ' +
        'String input : ' +
        this.InputText +
        'Object input : ' +
        this.InputObject.Name
    );
  }
  ngOnInit(): void {
    console.log('ngOnInit called on child');
  }
  ngDoCheck(): void {
    if (this.IsChecked && this.LocalObject.Name != this.InputObject.Name) {
      console.log('Object input Changed');
      this.LocalObject.Name = this.InputObject.Name;
    }
  }
  ngAfterContentInit()
  {
    //console.log("ngAfterContentInit called in child");
  }
  ngAfterContentChecked()
  {
    //console.log("ngAfterContentChecked called in child");
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called on child');
  }
}
