import { AuthGaurdService } from './Routing/routing/AuthGaurd.service';
import { RoutingChildComponent } from './Routing/Child/routing-child/routing-child.component';
import { RoutingComponent } from './Routing/routing/routing.component';
import { ServiceComponent } from './Service/service/service.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { DataBindingComponent } from './DataBinding/data-binding/data-binding.component';
import { CustomModuleComponent } from './CustomModule/CustomModuleComponent/custom-module/custom-module.component';
import { FormBuilderComponent } from './FormBuilder/form-builder/form-builder.component';
import { StructuralDirectivesComponent } from './Directives/Structural/structural-directives/structural-directives.component';
import { LifeCycleComponent } from './LifeCycle/life-cycle/life-cycle.component';
import { TestComponent } from './TestComponent/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './Directives/Attribute/attribute-directives/attribute-directives.component';
import { EmitCompOneComponent } from './EventEmitter/CompOne/emit-comp-one/emit-comp-one.component';
import { CrudUsingHttpComponent } from './HttpClient/crud-using-http/crud-using-http.component';
import { CrudEditComponent } from './HttpClient/crud-using-http/edit-component/crud-edit/crud-edit.component';
import { ParentComponent } from './PassingData/parent/parent.component';
import { AuthGaurdComponent } from './Routing/AuthGaurdComponent/auth-gaurd/auth-gaurd.component';

const routes: Routes = [
  {path : '',component : TestComponent},
  {path : 'data-binding-component',component : DataBindingComponent},
  {path : 'life-cycle-component',component : LifeCycleComponent},
  {path : 'structural-directives-component',component : StructuralDirectivesComponent},
  {path : 'attribute-directives-component',component : AttributeDirectivesComponent},
  {path : 'output-emit-component',component : EmitCompOneComponent},
  {path : 'crud-using-http-component',component : CrudUsingHttpComponent},
  {path : 'edit-employee',component : CrudEditComponent },
  {path : 'passing-data',component : ParentComponent },
  {path : 'custom-module-component',component : CustomModuleComponent },
  {path : 'pipes-component',component : PipesComponent },
  {path : 'service-component',component : ServiceComponent },
  {path : 'routing-component/:id',component : RoutingComponent, canActivateChild:[AuthGaurdService],
  children:[
    {path : 'child-route',component : RoutingChildComponent}
  ]
  },
  {path : 'authGaurd-component',component : AuthGaurdComponent, canActivate:[AuthGaurdService]},
  {path : 'form-builder',component : FormBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
