import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TodoService } from '../to-do/to-do.service';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { Employee } from '../employee';

@Component({
  selector: 'app-to-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {

@Input()
todo: Todo;
empServ: EmployeeService;
todoServ: TodoService;
departments: Department[];
employees: Employee[];
depart: Department;
employee: Employee;
constructor(private route: ActivatedRoute,
private todoService: TodoService,
private location: Location,
private employeeService: EmployeeService,
private departmentService: DepartmentService) { }


  ngOnInit() {
    this.getEmployees();
    this.getDepartments();

  }
  getTask(): void {
const id = +this.route.snapshot.paramMap.get('id');
this.todoService.getTask(id).subscribe(task => this.todo = task);
  }

  goBack(): void {
    this.location.back();
  }
  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }
  selectDepartment(name: string) {
    var context = this;
    this.departmentService.getDepByName(name).subscribe(
      function(dep){
        context.depart = dep
        console.log(dep);
        console.log(name);
      }
    );
  }

  show(name: string): void {
    this.selectDepartment(name);
  }



}
