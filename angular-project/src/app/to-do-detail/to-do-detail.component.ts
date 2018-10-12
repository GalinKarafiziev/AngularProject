
import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { TodoService } from "../to-do/to-do.service";
import { Todo } from "../todo";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { EmployeeService } from "../employee.service";
import { DepartmentService } from "../department.service";
import { Department } from "../department";
import { Employee } from "../employee";

@Component({
  selector: "app-to-detail",
  templateUrl: "./to-do-detail.component.html",
  styleUrls: ["./to-do-detail.component.css"]
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
  task: any;
  todos: Todo[];

  dep: Department[];
  a:number = 1;
  emp: Employee[];
  average:number=1;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTask();
    this.getEmployees();
    this.getDepartments();
    this.getTasks();
  }
  getTask(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.todoService.getTask(id).subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }
  getDepartments(): void {
    this.departmentService
      .getDepartments()
      .subscribe(departments => (this.departments = departments));
  }

  getTasks(): void {
    this.todoService.getTasks().subscribe(todos => (this.todos = todos));
  }

  getEmployees(): void {
    this.employeeService
      .getEmps()
      .subscribe(employees => (this.employees = employees));
  }
  save(): void {
    this.todoService.updateTask(this.todo).subscribe();
    console.log(this.todo);
  }

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
      this.getEmp(this.todo.employee);
      this.average = null;
    }

    deleteDepartment():void{
      this.dep = null;
      this.a = 1;
    }
    getDep(name: string): void {
      this.departmentService.getDepartments().
      subscribe(departments => {
        if (departments) {
          this.departments = departments;
          this.dep = departments.filter(dep => dep.name == name);
          console.log(this.dep);
        }
      });
      this.a = null;
    }
}
