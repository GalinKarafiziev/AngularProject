import { Injectable } from '@angular/core';
import { Employees } from './mock-employees';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  emp : Employee[] = Employees;

  getEmployees(): Observable<Employee[]>{
  	return of (this.emp);
  }

  getEmployee(id: number): Observable<Employee>{
  	return of (this.emp.find(employee => employee.id === id));
  }

  getEmployeeByName(firstname:string) : Observable<Employee>{
    return of (this.emp.find(employee => employee.firstname === firstname))
  }

  updateEmployee(newEmployee: Employee): void{
  	console.log (this.emp);
  	let oldEmp = this.emp.find(employee => employee.id === newEmployee.id)
  		oldEmp = newEmployee;
    console.log (this.emp);
  }

  addEmployee (fname:string, lname:string,age:number, gender: string, department:string): void {
  	console.log (this.emp);
  	this.emp.push(new Employee(fname,lname,age,gender,department));
  	console.log (this.emp);
  }
  deleteEmployee(employee: Employee): void{
  	console.log (this.emp);

  	 this.emp.forEach( (item, index) => {
     if(item === employee) this.emp.splice(index,1);});
  	console.log (this.emp);
  }

}
