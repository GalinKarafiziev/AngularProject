import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})



export class TodoService
{
  todoTasks: Todo[] = [];
  empServ: EmployeeService;
  employee: Employee;

  constructor(){
    this.todoTasks = this.mockToArray();
  }

  mockToArray() {
  this.todoTasks.push(new Todo("Bla", "Bla", "bla", "Bla", 1));
  this.todoTasks.push(new Todo("Ala", "Bala", "Portokala", "Babati", 2));
  return this.todoTasks;
}
getTasks(): Observable<Todo[]>{
  return of (this.todoTasks);
}
getTask(id: number): Observable<Todo>{
  return of (this.todoTasks.find(task => task.idE === id));
}

updateTask(nTask: Todo): void{
  console.log (this.todoTasks);
  let oTask = this.todoTasks.find(oTask => oTask.idE === nTask.idE)
    oTask = nTask;
  console.log (this.todoTasks);
}

addTask (fname:string, lname:string, task: string, department:string, id:number): void {
  console.log (this.todoTasks);
  this.todoTasks.push(new Todo(fname,lname,task, department, id));
  console.log (this.todoTasks);
}
deleteTask(task: Todo): void{
  console.log (this.todoTasks);

   this.todoTasks.forEach( (item, index) => {
   if(item === task) this.todoTasks.splice(index,1);});
  console.log (this.todoTasks);
}


}
