import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './TestComponent/test/test.component';
import { SecondComponentComponent } from './SecondComponent/second-component/second-component.component';
import { LifeCycleComponent } from './LifeCycle/life-cycle/life-cycle.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './Directives/Structural/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './Directives/Attribute/attribute-directives/attribute-directives.component';
import { ChangeColorDirective } from './Directives/Attribute/ColorChangeDirective/change-color.directive';
import { EmitCompOneComponent } from './EventEmitter/CompOne/emit-comp-one/emit-comp-one.component';
import { EmitCompTwoComponent } from './EventEmitter/CompTwo/emit-comp-two/emit-comp-two.component';
import { CrudUsingHttpComponent } from './HttpClient/crud-using-http/crud-using-http.component';
import { HttpClientModule  } from '@angular/common/http';
import { CrudEditComponent } from './HttpClient/crud-using-http/edit-component/crud-edit/crud-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SecondComponentComponent,
    LifeCycleComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    ChangeColorDirective,
    EmitCompOneComponent,
    EmitCompTwoComponent,
    CrudUsingHttpComponent,
    CrudEditComponent,    
  ], 
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
