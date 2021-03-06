import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from '../department.service';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

employees : Employee[];
  constructor(private route: ActivatedRoute, private departmentService: DepartmentService, private location: Location,private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  add(name: string, location: string): void {
    name = name.trim();
    location = location.trim();

    if(!name){return;}
    if(!location){return;}

    this.departmentService.addDepartment(name, location).subscribe();
 }
  goBack(): void{
    this.location.back();
  }
  getEmployees(): void {
    this.employeeService.getEmps().
    subscribe(employees => this.employees = employees);
  }

}
