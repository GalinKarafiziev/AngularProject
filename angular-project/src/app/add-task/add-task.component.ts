import { CustomApiService } from './../custom-api.service';
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

  @Input() taskData = { id :0 , task: '', employee: '', department: '' };



  departments: Department[];
  employees: Employee[];
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    public api: CustomApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getDepartments();
    this.getEmployees();
  }

  addTaskApi() {
    this.api.addTask(this.taskData).subscribe((result) => {
      this.router.navigate(['/product-details/'+result.id]);
    }, (err) => {
      console.log(err);
    });
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
    this.todoService.addTask(task, department, employee);
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
      .getEmployees()
      .subscribe(employees => (this.employees = employees));
  }
}
