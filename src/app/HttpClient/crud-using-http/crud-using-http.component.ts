import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../EmployeeService/employee-service.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-crud-using-http',
  templateUrl: './crud-using-http.component.html',
  styleUrls: ['./crud-using-http.component.css']
})
export class CrudUsingHttpComponent implements OnInit {

  EmployeeId:string='';
  EmployeeName:string='';
  editId:string='';
  editName:string='';
  tableStatus:boolean=true;
  editStatus:boolean=true;

  employees:IEmployee[]=[];
  errorMessage: any;
  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
    
  }
  editBtn(id:string,name:string){
    this.editStatus=false;
    this.editId=id;
    this.editName=name;
  }
  editCancelled(status:boolean):void
  {

    this.editStatus=status;
  }
  getAllEmployees(){
    this.tableStatus =false;  
    this.service.getAllEmployees().subscribe(data => this.employees=data);
  }
  deleteEmployee(id:string){
    this.service.deleteEmployee(id).subscribe();
    this.getAllEmployees();
  }
  addEmployee(){
    var newEmployee = {"id" : this.EmployeeId,"name" : this.EmployeeName};
    this.service.addEmployee(newEmployee).subscribe(data => this.employees.push(data),error=>this.errorMessage=error);
  }

}
