import { EmployeeService } from "./employee.service";
import { Employee } from "./employee";
import { Observable } from "rxjs";

export class Todo{
  static id: number = 1;
  task: string;
  department: string;
  idE: number;
  employee: string;
  constructor(task:string, department:string, employee: string){
    this.task = task;
    this.department = department;
    this.idE = Todo.id++;
    this.employee = employee;


  }

}
