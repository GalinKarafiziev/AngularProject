import { Component, OnInit } from '@angular/core';
import { Employees } from '../mock-employees';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

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
  constructor(private employeeService: EmployeeService) {
   }

  ngOnInit() {
  	this.getEmployees();
  	this.getNrEmployees();
  	this.getAvgAge(0);
  	this.getNrEmp(0,0);
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
  }

