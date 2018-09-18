import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../employee';
import { Department } from '../department';

import { EmployeeService }  from '../employee.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee : Employee ;
  departments: Department[];
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private location: Location, private departmentService: DepartmentService) { }

  ngOnInit() {
  	this.getEmployee();
    this.getDepartments();
  }
  getEmployee(): void{
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.employeeService.getEmployee(id).subscribe(employee => this.employee = employee)
  }

  goBack(): void{
    this.location.back();
  }
  save(): void {
   this.employeeService.updateEmployee(this.employee);
   this.goBack();
 }
  getDepartments(): void {
    this.departmentService.getDepartments().
    subscribe(departments => this.departments = departments);
  }
}
