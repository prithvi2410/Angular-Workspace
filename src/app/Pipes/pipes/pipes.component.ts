import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stringVariable:string='this is a sample string for pipes';
  numberVariable:number=456.0123456;
  percentVariable:number=45;
  currencyVariable:number=99.99;
  toDateVariable: Date = new Date();

  codeSample00:string=`<p> Unformatted date : {{toDateVariable}} </p>`;
  codeSample0:string=`<p> Formatted date : {{toDateVariable | date}} </p>`;
  codeSample1:string=`<p> Passing arguments date : 'medium' : {{toDateVariable | date:'medium'}} </p>`;
  codeSample2:string=`<p> Passing arguments date : 'short' : {{toDateVariable | date:'short'}} </p>`;
  codeSample3:string=`<p> Passing arguments date : 'fullDate' : {{toDateVariable | date:'fullDate'}} </p>`;
  codeSample4:string=`<p> Passing arguments date : 'longDate' : {{toDateVariable | date:'longDate'}} </p>`;

  codeSample5:string=`<p>Chaining Pipes : {{toDateVariable | date:'medium' | uppercase}} </p>`;

  codeSample6:string=`<p>lowercase pipe : {{stringVariable| lowercase}}</p>`;
  codeSample7:string=`<p>uppercase pipe : {{stringVariable| uppercase}}</p>`;
  codeSample8:string=`<p>titlecase pipe : {{stringVariable| titlecase}}</p>`;
  codeSample9:string=`<p>slice pipe : {{stringVariable| slice:4}}</p>`;
  codeSample10:string=`<p>slice pipe : {{stringVariable| slice:4:16}}</p>`;
  codeSample11:string=`<p>json pipe : {{stringVariable| json}}</p>`;

  codeSample12:string=`<p>without decimal pipe : {{numberVariable  }}</p>`;
  codeSample13:string=`<p>with decimal pipe : {{numberVariable|number}}</p>`;
  codeSample14:string=`<p>with decimal pricision in pipe : {{numberVariable|number:'.4'}}</p>`;
  codeSample15:string=`<p>with decimal range pricision in pipe : {{numberVariable|number:'.2-5'}}</p>`;
  codeSample16:string=`<p>with integer pricision in pipe : {{numberVariable|number:'6.'}}</p>`;

  codeSample17:string=`<p>percent pipe : {{percentVariable|percent}}</p>`;

  codeSample18:string=`<p>Currency pipe : {{currencyVariable|currency}} </p>`;
  codeSample19:string=`<p>Currency pipe with currency type argument : {{currencyVariable|currency:'INR'}} </p>`;
  codeSample20:string=`<p>Currency pipe with currency type argument : {{currencyVariable|currency:'GBP'}} </p>`;
  codeSample21:string=``;
}
