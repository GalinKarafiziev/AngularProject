import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../employee';
import { Department } from '../department';

import { EmployeeService } from '../employee.service';
import {Observable} from 'rxjs';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee : Employee ;
  departments: Department[];
  dep: Department;
  a:number = 1;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private location: Location, private departmentService: DepartmentService) { }

  ngOnInit() {
  	//this.getEmployee();
    this.getDepartments();
    this.getEmp();
  }

  getEmp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmp(id).
    subscribe(data => this.employee = data);
  }

  getEmployee(): void{
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.employeeService.getEmp(id).subscribe(employee => this.employee = employee)
  }

  goBack(): void{
    this.location.back();
  }
  save(): void {
   this.employeeService.putEmps(this.employee).subscribe();
   this.goBack();
 }
  getDepartments(): void {
    this.departmentService.getDepartments().
    subscribe(departments => this.departments = departments);
  }
  Select(name:string){
    name = name.trim();
    if(!name){return;}
    this.departmentService.getDepByName(name).subscribe(Department => this.dep = Department);
  }
  Delete():void{
    this.dep = null;
    this.a = 1;
  }
  Show():void{
    this.Select(this.employee.department);
    this.a = null;
  }
}
