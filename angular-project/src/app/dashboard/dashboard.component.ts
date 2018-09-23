import { Component, OnInit } from '@angular/core';
import { Employees } from '../mock-employees';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
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
  numberTasks: number;
  tasks: Todo[];

  constructor(private employeeService: EmployeeService, private todoServices: TodoService) {
   }

  ngOnInit() {
    this.getEmployees();
    this.getTasks();
  	this.getNrEmployees();
  	this.getAvgAge(0);
    this.getNrEmp(0,0);
    this.getNrTasks();
  }
  getTasks() {
    return this.todoServices.getTasks().subscribe(tasks => this.tasks = tasks);
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




