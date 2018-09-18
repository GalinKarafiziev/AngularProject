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
  this.todoTasks.push(new Todo("Write C", "ASCI", "Joe"));
  this.todoTasks.push(new Todo("Hire specialist", "ASCI", "Joe"));
  return this.todoTasks;
}
getTasks(): Observable<Todo[]>{
  return of (this.todoTasks);
}
getTask(id: number): Observable<Todo>{
  return of (this.todoTasks.find(task => task.idE === id));
}

updateTask(newTask: Todo): void{
  console.log (this.todoTasks);
  let oTask = this.todoTasks.find(task => task.idE === newTask.idE)
    oTask = newTask;
  console.log (this.todoTasks);
}

addTask (task: string, department:string, employee: string): void {
  console.log (this.todoTasks);
  this.todoTasks.push(new Todo(task, department, employee));
  console.log (this.todoTasks);
}
deleteTask(task: Todo): void{
  console.log (this.todoTasks);

   this.todoTasks.forEach( (item, index) => {
   if(item === task) this.todoTasks.splice(index,1);});
  console.log (this.todoTasks);
}


}
