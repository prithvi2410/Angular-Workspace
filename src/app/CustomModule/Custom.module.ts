import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CustomModuleComponent } from './CustomModuleComponent/custom-module/custom-module.component';

@NgModule(
  {
    declarations:[
    CustomModuleComponent
  ],
    imports:[AppRoutingModule],
    providers:[]
  }
)
export class CustomModule{}
