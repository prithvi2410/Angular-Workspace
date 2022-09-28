import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-module',
  templateUrl: './custom-module.component.html',
  styleUrls: ['./custom-module.component.css']
})
export class CustomModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  codeExample1:string=`@NgModule(
    {
      declarations:[ CustomModuleComponent ],
      imports:[ BrowserModule, AppRoutingModule ],
      providers:[],
      bootstrap: [ CustomModuleComponent ]
    }
  )
  .// other declerations`;

  codeExample2:string=`
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));`;

  codeExample3:string=`
  <body>
  <!-- This is for loading a custom component from custom modlue -->
  <app-custom-module></app-custom-module>
  </body>`;
}
