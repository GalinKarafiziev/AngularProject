import { Component, OnInit } from '@angular/core';
import { Employees } from '../mock-employees';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Department } from '../department';
import { DepartmentService }  from '../department.service';
import { Departments } from '../departments';
import { TodoService } from '../to-do/to-do.service';
import { Todo } from 'src/app/todo';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[];
  numberEmployees: number;
  femaleEmployee: number ;
  maleEmployee: number;
  avgAge: number;

  departments:Department[];
  depNumber:number;
  inEindhoven:number;
  notEindhoven:number;

  numberTasks: number;
  tasks: Todo[];

  constructor(private employeeService: EmployeeService, private todoServices: TodoService,private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.getEmployees();
    this.getTasks();
    this.getAvgAge(0);
    this.getNrEmployees();
    this.getNrEmp(0,0);
    
    this.getDepartments();
    this.getNumDep();
    this.getDepEindhoven(0);
    this.getDepNotEindhoven(0);
    
    
    
    this.getNrTasks();
    this.getDepartments();
  }
  getTasks() {
    return this.todoServices.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  getDepartments(): void {
    this.departmentService.getDepartments().
    subscribe(departments => this.departments = departments);
  }
  getNumDep():void{
    this.depNumber=this.departments.length;
  }
  getDepEindhoven(loc:number):void{
    this.departments.forEach(function(department){
      if(department.location == 'Eindhoven'){loc += 1;}

    });

    this.inEindhoven = loc;
  }
  getDepNotEindhoven(other:number):void{
    this.departments.forEach(function(department){
      if(department.location != 'Eindhoven'){other += 1;}

    });

    this.notEindhoven = other;
  }


  getEmployees(): void {
  	this.employeeService.getEmployees().
  	subscribe(employees => this.employees = employees);
  }
  getNrEmployees():void{
  	this.numberEmployees = this.employees.length;
  }

  getAvgAge(age:number):void{
  	this.employees.forEach(function(employee){
  		age +=  employee.age;
  	});
  	this.avgAge = Math.round(age/this.employees.length);
  }
  getNrEmp(male:number, female:number):void{
  	this.employees.forEach(function(employee){
  		if(employee.gender == 'Male'){male += 1;}
  		if(employee.gender == 'Female'){female += 1;}
  	});
  	this.femaleEmployee = female;
  	this.maleEmployee = male;
  }

  getNrTasks():void{
    this.numberTasks = this.tasks.length;
  }
}
