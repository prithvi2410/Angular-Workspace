import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApplicatin';
  isSnackBarActive:boolean=false;
  activateSnackBar(){
    this.isSnackBarActive=true;
    setTimeout(()=>{this.isSnackBarActive =false}, 1000);
  }
}
