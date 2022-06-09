import { StructuralDirectivesComponent } from './Directives/Structural/structural-directives/structural-directives.component';
import { ForLoopComponent } from './ForLoop/for-loop/for-loop.component';
import { LifeCycleComponent } from './LifeCycle/life-cycle/life-cycle.component';
import { TestComponent } from './TestComponent/test/test.component';
import { SecondComponentComponent } from './SecondComponent/second-component/second-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '',component : TestComponent},
  {path : 'second-component',component : SecondComponentComponent},
  {path : 'life-cycle-component',component : LifeCycleComponent},
  {path : 'for-loop-component',component : ForLoopComponent},
  {path : 'structural-directives-component',component : StructuralDirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
