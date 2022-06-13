import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from 'src/app/HttpClient/IEmployee';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit {

  @Input() EmployeeId:string='';
  @Input() EmployeeName:string='';
  @Output() canceled = new EventEmitter<boolean>(); 
  @Output() editedEmployee = new EventEmitter<IEmployee>();
  constructor() { }

  ngOnInit(): void {
  }
  editEmployee(){
    this.editedEmployee.emit({"id" : this.EmployeeId,"name":this.EmployeeName});
  }
  cancel(){
    console.log('emitted');
    this.canceled.emit(true);
  }

}
