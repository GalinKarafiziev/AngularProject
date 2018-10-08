
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TodoService } from "../to-do/to-do.service";
import { Location } from "@angular/common";
import { DepartmentService } from "../department.service";
import { EmployeeService } from "../employee.service";
import { Department } from "../department";
import { Employee } from "../employee";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {





  departments: Department[];
  employees: Employee[];
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,

    private router: Router,
  ) {}

  ngOnInit() {
    this.getDepartments();
    this.getEmployees();
  }


  add(task: string, department: string, employee: string): void {
    task = task.trim();
    department = department.trim();
    employee = employee.trim();
    if (!task) {
      return;
    }
    if (!department) {
      return;
    }
    if (!employee) {
      return;
    }
    this.todoService.addTask(task, department, employee).subscribe();
    console.log(task, employee, department);
  }
  goBack(): void {
    this.location.back();
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
}
