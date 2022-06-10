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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SecondComponentComponent,
    LifeCycleComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    ChangeColorDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
