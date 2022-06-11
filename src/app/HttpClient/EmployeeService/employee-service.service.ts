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
  
  deleteEmployee(id:number):Observable<IEmployee>{
    const mainUrl='http://localhost:5000/students';
    const deleteUrl = `${mainUrl}/${id}`
    return this.http.delete<IEmployee>(deleteUrl);    
  }

}
