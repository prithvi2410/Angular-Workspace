import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IEmployee } from '../IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  
  constructor(private http: HttpClient ) { }

  getAllEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>('http://localhost:5000/students');    
  }
  
  deleteEmployee(id:string):Observable<IEmployee>{
    const mainUrl='http://localhost:5000/students';
    const deleteUrl = `${mainUrl}/${id}`
    return this.http.delete<IEmployee>(deleteUrl);    
  }
  addEmployee(newEmployee:IEmployee):Observable<IEmployee>{
    const mainUrl='http://localhost:5000/students';
    return this.http.post<IEmployee>(mainUrl,newEmployee);
  }
  editEmployee(editEmployee:IEmployee):Observable<IEmployee>
  {
    const mainUrl='http://localhost:5000/students';
    return this.http.put<IEmployee>(mainUrl,editEmployee);
  }

}
