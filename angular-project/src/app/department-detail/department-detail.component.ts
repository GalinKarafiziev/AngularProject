import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Department } from '../department';
import { Employee } from '../employee';
import { DepartmentService }  from '../department.service';
import {Observable} from 'rxjs';
import { EmployeeService }  from '../employee.service';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department : Department ;
  employees: Employee[];
  emp: Employee[];
  average:number=1;


  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private location: Location, private departmentService: DepartmentService) { }

  ngOnInit() {
  	//this.getEmployee();
    this.getEmployees();
    this.getDepartment();
  }



  getDepartment(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.departmentService.getDepartment(id).
    subscribe(data => this.department = data);
  }

  goBack(): void{
    this.location.back();
  }
  save(): void {
   this.departmentService.updateDepartment(this.department).subscribe();
   this.goBack();
 }
  getEmployees(): void {
    this.employeeService.getEmps().
    subscribe(employees => this.employees = employees);
  }
  //Select(firstname:string){
//   if(!firstname){ return; }
//firstname = firstname.trim();
//   this.employeeService.getEmployeeByName(firstname).subscribe(e => this.emp= e);
// }
getEmp(firstname: string): void {
  this.employeeService.getEmps().
  subscribe(employees => {
    if (employees) {
      this.employees = employees;
      this.emp = employees.filter(emp => emp.firstname == firstname);
      console.log(this.emp);
    }
  });
  this.average = null;
}

  Delete():void{
    this.emp = null;
    this.average = 1;
  }
  Show():void{
    this.getEmp(this.department.employee);
    this.average = null;
  }
}
