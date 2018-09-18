import { EmployeeService } from "./employee.service";
import { Employee } from "./employee";
import { Observable } from "rxjs";

export class Todo{
  employee: Observable<Employee>;
  static id: number = 1;
  fName: string;
  lName: string;
  task: string;
  department: string;
  idE: number;
  idEmpl: Employee;
  empSrv: EmployeeService = new EmployeeService();
  constructor(fName: string, lName: string, task:string, department:string, idEmp: number){
    this.fName = fName;
    this.lName = lName;
    this.task = task;
    this.department = department;
    this.idE = Todo.id++;
    this.employee = this.empSrv.getEmployee(idEmp);


  }

}
