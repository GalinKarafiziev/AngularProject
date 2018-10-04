import { Component, OnInit } from '@angular/core';
import { Departments } from '../departments';

import { Department } from '../department';
import { DepartmentService } from '../department.service';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];
  searchDep: string;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
  //  this.departmentService.getDepartments().
  //  subscribe(departments => this.departments = departments);
  this.departmentService.getDepartments().
  subscribe(data => this.departments = data);
  }
  delete(department: Department): void {
    this.departments = this.departments.filter(d => d !== department);
    this.departmentService.deleteDepartment(department.id).subscribe();
  }
}
