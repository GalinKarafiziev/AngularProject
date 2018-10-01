import { Injectable } from '@angular/core';
import { Employees } from './mock-employees';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  
  emp : Employee[] = Employees;
  private empReadOne = 'http://i380447.hera.fhict.nl/api_Web/employee/read_one.php?id=';
  private empRead = 'http://i380447.hera.fhict.nl/api_Web/employee/read.php';
  private empDelete = 'http://i380447.hera.fhict.nl/api_Web/employee/delete.php?id=';
  private empSearch = 'http://i380447.hera.fhict.nl/api_Web/employee/search.php?s=';
  private empAdd = 'i380447.hera.fhict.nl/api_Web/employee/create.php';


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


  getEmployeeByName(firstname:string) : Observable<Employee>{
    return of (this.emp.find(employee => employee.firstname === firstname))
  }

  updateEmployee(newEmployee: Employee): void{
  	let oldEmp = this.emp.find(employee => employee.id === newEmployee.id)
  		oldEmp = newEmployee;
    console.log (this.emp);
  }

  addEmployee (fname:string, lname:string,age:number, gender: string, department:string): void {
  	console.log (this.emp);
  	this.emp.push(new Employee(fname,lname,age,gender,department));
  	console.log (this.emp);
  }

}
