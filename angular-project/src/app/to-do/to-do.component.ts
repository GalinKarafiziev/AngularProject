import { CustomApiService } from './../custom-api.service';
import { ApiTask } from './task-api.service';
import { Component, OnInit } from "@angular/core";
import { TodoService } from "./to-do.service";
import { Todo } from "../todo";
import { Observable, of } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { DepartmentService } from "../department.service";
import { Department } from "../department";
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: "todo",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.css"]
})
export class ToDoComponent implements OnInit {
  todos: Todo[];
  selectedTask: Todo;
  empServ: EmployeeService;
  employees: Employee[];
  departments: Department[];
  depart: Department;
  todo: Todo;
  employee: Employee;
  searchTask: string;
  tasks: any = [];



  constructor(
    private service: TodoService,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    public api: CustomApiService,
    private route: ActivatedRoute,
    public router: Router
     ) {
    this.todos = service.todoTasks;
  }

  ngOnInit() {
    this.getDepartments();
    this.getEmployees();
  }

  onSelect(todo: Todo): void {
    this.selectedTask = todo;
  }

  getTasks(): void {
    this.service.getTasks();
  }

  delete(task: Todo): void {
    this.todos = this.todos.filter(t => t !== task);
    this.service.deleteTask(task);
  }

  getDepartments(): void {
    this.departmentService
      .getDepartments()
      .subscribe(departments => (this.departments = departments));
  }

  getEmployees(): void {
    this.employeeService
      .getEmps()
      .subscribe(employees => (this.employees = employees));
  }

  selectDepartment(name: string) {
    var context = this;
    this.departmentService.getDepByName(name).subscribe(function(dep) {
      context.depart = dep;
      console.log(dep);
      console.log(name);
    });
  }

  selectTask(id: number) {
    var context = this;
    this.service.getTask(id).subscribe(function(todo) {
      context.todo = todo;
      console.log(todo);
      console.log(name);
    });
  }

  showTask(id: number){
    this.selectTask(id);
  }

  show(name: string): void {
    this.selectDepartment(name);
  }

  selectEmployee(name: string) {
    var context = this;
    this.employeeService.getEmployeeByName(name).subscribe(function(emp) {
      context.employee = emp;
      console.log(emp);
      console.log(name);
    });
  }

  showEmployee(name: string): void{
    this.selectEmployee(name);
  }

  getTasksApi() {
    this.tasks = [];
    this.api.getTasks().subscribe((data: {}) => {
      console.log(data);
      this.tasks = data;
    });
  }

  addTaskApi() {
    this.router.navigate(['/todo-add']);
  }

  deleteTaskApi(id) {
    this.api.deleteTask(id)
      .subscribe(res => {
          this.getTasks();
        }, (err) => {
          console.log(err);
        }
      );
  }


}
