import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { CustomModuleComponent } from './CustomModuleComponent/custom-module/custom-module.component';

@NgModule(
  {
    declarations:[
    CustomModuleComponent
  ],
    imports:[BrowserModule,AppRoutingModule],
    providers:[],
    bootstrap: [CustomModuleComponent]
  }
)
export class CustomModule{}
