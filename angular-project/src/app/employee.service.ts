import { Injectable } from '@angular/core';
import { Employees } from './mock-employees';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

const httpOptions = {
     headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  
  emp : Employee[] = Employees;
  private empReadOne = 'http://i380447.hera.fhict.nl/api_Web/employee/read_one.php?id=';
  private empRead = 'http://i380447.hera.fhict.nl/api_Web/employee/read.php';
  private empDelete = 'http://i380447.hera.fhict.nl/api_Web/employee/delete.php?id=';
  private empSearch = 'http://i380447.hera.fhict.nl/api_Web/employee/search.php?s=';
  private empAdd = 'http://i380447.hera.fhict.nl/api_Web/employee/create.php';
  private empUpdate = 'http://i380447.hera.fhict.nl/api_Web/employee/update.php';


  getEmp(id:number):Observable<Employee>{
  return this.http.get<Employee>(this.empReadOne + id);
  }
  deleteEmp(id:number):Observable<Employee>{
  return this.http.get<Employee>(this.empDelete + id);
  }
  getEmps():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.empRead);
  }
  searchEmps(s: string):Observable<Employee[]>{
  return this.http.get<Employee[]>(this.empSearch + s);
  }
  putEmps(emp: Employee):Observable<any>{

  return this.http.post(this.empUpdate,emp,httpOptions);
  }
  postEmps(fname: string, lname: string, age: number, gender: string, department: string ):Observable<any>{

  return this.http.post(this.empAdd,{
        "firstname": fname,
        "lastname": lname,
        "age": age,
        "gender": gender,
        "department": department},
        httpOptions);
  }
  getEmployeeByName(firstname:string) : Observable<Employee>{
    return of (this.emp.find(employee => employee.firstname === firstname))
  }
}
