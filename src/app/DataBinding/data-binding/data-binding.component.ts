import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  codeExample1:string=`
  TS:
  name:string='Thomas Shellby ';
  HTML :
  <p>example -> variable :  {{name}}</p>`;

  codeExample2:string=`
  TS:
  getName():string
  {
    return this.name+' from getName()';
  }

  HTML :
  <p>example -> method : {{getName()}}</p>`;

  codeExample3:string=`
  TS:
  color:string='red';

  HTML :
  <p style.color="{{color}}">This is a sample</p>
  `;

  codeExample4:string=`
  HTML :
  <pre ngNonBindable>
    not evaluate: {{variable}}
  </pre>
  `;

  codeExample5:string=`
  HTML:
  <button [disabled]="true">Button disabled</button>`;

  codeExample6:string=`
  HTML:
  <button [disabled]="false">Button enabled</button>`;
  codeExample7:string=`
  CSS:
  .red{
    color: red;
  }

  HTML:
  <button ngClass="red">Button</button>
                  OR
  <button [className]="'red'">Button</button>
                  OR
  <button [class.red]="true">Button</button>`;
  codeExample8:string=`
  HTML:
  <button (click)="alert()">Click to alert</button>`;
  codeExample9:string=`
  TS:
  count:number=0;
  HTML:
  <button (click)="alert();count=count+1">Click to alert</button>`;

  name:string='Thomas Shellby ';
  color:string='red';
  isDisabled:boolean=false;
  count:number=0;

  disable()
  {
    this.isDisabled=!this.isDisabled;
  }
  IsDisabled():boolean
  {
    return this.isDisabled;
  }
  getName():string
  {
    return this.name+' from getName()';
  }
  alert()
  {
    alert("button clicked");
  }

}
