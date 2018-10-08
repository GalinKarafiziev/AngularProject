import { EmployeeService } from "./employee.service";
import { Employee } from "./employee";
import { Observable } from "rxjs";

export class Todo{
  static idE: number = 1;
  task: string;
  department: string;
  id: number;
  employee: string;
  constructor(task:string, department:string, employee: string){
    this.task = task;
    this.department = department;
    this.id = Todo.idE++;
    this.employee = employee;


  }

}
