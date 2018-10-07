import { Component, OnInit } from '@angular/core';
import { Employees } from '../mock-employees';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Department } from '../department';
import { DepartmentService }  from '../department.service';
import { Departments } from '../departments';
import { TodoService } from '../to-do/to-do.service';
import { Todo } from '../todo';
import { Observable, of } from "rxjs";
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[];
  numberEmployees: number;
  female: number ;
  male: number;
  avgAge: number;

  departments: Department[];
  depNumber: number;
  inEindhoven: number;
  notEindhoven: number;

  numberTasks: number;
  tasks: Todo[];

  constructor(private employeeService: EmployeeService, private todoServices: TodoService,private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.getEmployees();
    this.getNrEmployees();
    this.getTasks();
    //this.getAvgAge(0);
    //this.getNrEmp(0,0);

   this.getDepartments();

  //  this.getDepEindhoven(0);
  //  this.getDepNotEindhoven(0);

    this.getNrTasks();
    this.getDepartments();
  }
  getTasks() {
    return this.todoServices.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  getDepartments(): void {
    this.departmentService.getDepartments().
    subscribe(departments => {
        if (departments) {
            this.departments = departments;
            this.depNumber = departments.length;
            this.notEindhoven = departments.filter(dep => dep.location !== 'Eindhoven').length;
            this.inEindhoven = departments.filter(dep => dep.location == 'Eindhoven').length;
        }
        else {
            Observable.throw("Error: Service didn't return an object");  // ;If you're using rxjs <6
            // If you're using rxjs6
        }
    });
}

//  getDepEindhoven(loc:number):void{
//    this.departmentService.getDepartments().
//    subscribe(departments => {
//      if(department.location == 'Eindhoven'){loc += 1;}
//
//  }
  //getDepNotEindhoven(other:number):void{
  //  this.departmentService.getDepartments().
  //  subscribe(departments =>{
//      if(department.location != 'Eindhoven'){other += 1;}

//
  //  this.notEindhoven = other;
//  }
  getEmployees(): void {
  	this.employeeService.getEmps().
    subscribe(data => this.employees = data);
  }
  getNrEmployees():void{
  	this.employeeService.getEmps().
    subscribe(employees => {
        if (employees) {
            this.employees = employees;
            this.numberEmployees = employees.length;
            this.male = employees.filter(emp => emp.gender == 'Male').length;
            this.female = employees.filter(emp => emp.gender == 'Female').length;
        }
        else {
            Observable.throw("Error: Service didn't return an object");  // ;If you're using rxjs <6
            // If you're using rxjs6
      }
    });
}

  getNrTasks():void{
    this.numberTasks = this.tasks.length;
  }
}
