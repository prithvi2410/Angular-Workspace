import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../EmployeeService/employee-service.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-crud-using-http',
  templateUrl: './crud-using-http.component.html',
  styleUrls: ['./crud-using-http.component.css']
})
export class CrudUsingHttpComponent implements OnInit {

  employees:IEmployee[]=[];
  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
    
  }
  getAllEmployees(){  
    this.service.getAllEmployees().subscribe(data => this.employees=data);
  }
  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe();
    this.getAllEmployees();
  }

}
