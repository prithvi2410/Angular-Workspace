import { StructuralDirectivesComponent } from './Directives/Structural/structural-directives/structural-directives.component';
import { LifeCycleComponent } from './LifeCycle/life-cycle/life-cycle.component';
import { TestComponent } from './TestComponent/test/test.component';
import { SecondComponentComponent } from './SecondComponent/second-component/second-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './Directives/Attribute/attribute-directives/attribute-directives.component';
import { EmitCompOneComponent } from './EventEmitter/CompOne/emit-comp-one/emit-comp-one.component';
import { CrudUsingHttpComponent } from './HttpClient/crud-using-http/crud-using-http.component';
import { CrudEditComponent } from './HttpClient/crud-using-http/edit-component/crud-edit/crud-edit.component';

const routes: Routes = [
  {path : '',component : TestComponent},
  {path : 'second-component',component : SecondComponentComponent},
  {path : 'life-cycle-component',component : LifeCycleComponent},
  {path : 'structural-directives-component',component : StructuralDirectivesComponent},
  {path : 'attribute-directives-component',component : AttributeDirectivesComponent},
  {path : 'output-emit-component',component : EmitCompOneComponent},
  {path : 'crud-using-http-component',component : CrudUsingHttpComponent},
  {path : 'edit-employee',component : CrudEditComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
