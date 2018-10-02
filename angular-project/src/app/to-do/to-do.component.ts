import { Component, OnInit } from "@angular/core";
import { TodoService } from "./to-do.service";
import { Todo } from "../todo";
import { Observable, of } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { DepartmentService } from "../department.service";
import { Department } from "../department";

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
  employee: Employee;
  searchTask: string;

  constructor(
    private service: TodoService,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService
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
}
