import { Injectable } from '@angular/core';
import { Todo } from '../todo';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})



export class TodoService
{
  task: Todo;
  todoServ: TodoService;
  todoTasks: Todo[] = [];
  empServ: EmployeeService;
  employee: Employee;


  constructor(){
    this.todoTasks = this.mockToArray();
  }

  mockToArray() {
  this.todoTasks.push(new Todo("Write C", "ASAI", "John"));
  this.todoTasks.push(new Todo("Hire specialist", "ASAI", "John"));
  return this.todoTasks;
}
getTasks(): Observable<Todo[]>{
  return of (this.todoTasks);
}
getTask(id: number): Observable<Todo>{
  return of (this.todoTasks.find(task => task.idE === id));
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

updateTask(newTask: Todo): void{
  console.log (this.todoTasks);
  let oldTask = this.todoTasks.find(task => task.task === newTask.task)
    oldTask = newTask;
  console.log (this.todoTasks);
}


}
