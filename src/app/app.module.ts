import { PersonService } from './Service/service/Person.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './TestComponent/test/test.component';
import { ChildCompComponent } from './LifeCycle/Child/child-comp/child-comp.component';
import { ParentComponent } from './PassingData/parent/parent.component';
import { ChildComponent } from './PassingData/Child/child/child.component';
import { LifeCycleComponent } from './LifeCycle/life-cycle/life-cycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './Directives/Structural/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './Directives/Attribute/attribute-directives/attribute-directives.component';
import { ChangeColorDirective } from './Directives/Attribute/ColorChangeDirective/change-color.directive';
import { EmitCompOneComponent } from './EventEmitter/CompOne/emit-comp-one/emit-comp-one.component';
import { EmitCompTwoComponent } from './EventEmitter/CompTwo/emit-comp-two/emit-comp-two.component';
import { CrudUsingHttpComponent } from './HttpClient/crud-using-http/crud-using-http.component';
import { HttpClientModule  } from '@angular/common/http';
import { CrudEditComponent } from './HttpClient/crud-using-http/edit-component/crud-edit/crud-edit.component';
import { FormBuilderComponent } from './FormBuilder/form-builder/form-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataBindingComponent } from './DataBinding/data-binding/data-binding.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { ServiceComponent } from './Service/service/service.component';
import { RoutingComponent } from './Routing/routing/routing.component';
import { RoutingChildComponent } from './Routing/Child/routing-child/routing-child.component';
import { AuthGaurdComponent } from './Routing/AuthGaurdComponent/auth-gaurd/auth-gaurd.component';
import { AuthGaurdService } from './Routing/routing/AuthGaurd.service';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LifeCycleComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    ChangeColorDirective,
    EmitCompOneComponent,
    EmitCompTwoComponent,
    CrudUsingHttpComponent,
    CrudEditComponent,
    FormBuilderComponent,
    ChildCompComponent,
    ParentComponent,
    ChildComponent,
    DataBindingComponent,
    PipesComponent,
    ServiceComponent,
    RoutingComponent,
    RoutingChildComponent,
    AuthGaurdComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  //providers: [PersonService],
  providers: [{provide:PersonService,useClass:PersonService},AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
