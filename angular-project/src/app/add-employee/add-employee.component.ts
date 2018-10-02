import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  departments: Department[];
  e: Employee ;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private location: Location, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }
  add(firstname: string, lastname: string, age:number, gender: string, department:string): void {
    firstname = firstname.trim();
    lastname = lastname.trim();
    gender = gender.trim();
    department = department.trim();
    if(!firstname){return;}
    if(!lastname){return;}
    if(!age){return;}
    if(!gender){return;}
    if(!department){return;}
    this.employeeService.postEmps(firstname, lastname, age, gender, department).subscribe();
 }
  goBack(): void{
    this.location.back();
  }
  getDepartments(): void {
    this.departmentService.getDepartments().
    subscribe(departments => this.departments = departments);
  }

}
