import { Component, OnInit } from '@angular/core';
import { Employees } from '../mock-employees';
import { Employee } from '../employee';
import { Delete } from '../delete';
import { EmployeeService } from '../employee.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employees: Employee[];
  emps: Employee;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmps();
  }


   getEmps(): void {
    this.employeeService.getEmps().
    subscribe(data => this.employees = data);
  }
  Search(s:string): void {
    this.employeeService.searchEmps(s).
    subscribe(data => this.employees = data);
  }

  delete(employee: Employee): void {
  this.employees = this.employees.filter(e => e !== employee);
  this.employeeService.deleteEmp(employee.id).subscribe();
  }
}
   
