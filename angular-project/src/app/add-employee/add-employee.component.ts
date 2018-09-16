import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private location: Location) { }

  ngOnInit() {
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
    this.employeeService.addEmployee(firstname, lastname,age,gender,department);
  }
  goBack(): void{
    this.location.back();
  }

}
