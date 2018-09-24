import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Department } from '../department';
import { Employee } from '../employee';
import { DepartmentService }  from '../department.service';
import { EmployeeService }  from '../employee.service';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department : Department ;
  employees: Employee[];
  emp: Employee;
  average:number=1;


  constructor(private route: ActivatedRoute, private departmentService: DepartmentService, private location: Location,private employeeService: EmployeeService) { }

  ngOnInit() {
  	this.getDepartment();

    this.getEmployees();
  }
  getDepartment(): void{
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.departmentService.getDepartment(id).subscribe(department => this.department = department)
  }

  goBack(): void{
    this.location.back();
  }
  save(): void {
   this.departmentService.updateDepartment(this.department);
   this.goBack();
 }

 getEmployees(): void {
   this.employeeService.getEmployees().
   subscribe(employees => this.employees = employees);
 }

 Select(firstname:string){
   if(!firstname){ return; }
firstname = firstname.trim();
   this.employeeService.getEmployeeByName(firstname).subscribe(Employee => this.emp = Employee);
 }

 Delete():void{
   this.emp = null;
   this.average = 1;
 }
 Show():void{
   this.Select(this.department.employee); 
   this.average = null;
 }


}
