import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService
{
  constructor(){
    this.addToArray();
  }
  todoTasks: Todo[];
  addToArray() {
    this.todoTasks = [
    {"id": 0, "name": "Derek", "task": "Deploy"},
    {"id": 1, "name": "Scott", "task": "Make project plan"},
    {"id": 2, "name": "Styles", "task": "Make class diagrams"},
    {"id": 3, "name": "Michael", "task": "Do something productive"},
    {"id": 4, "name": "Danny", "task": "Bring coffee"},
  ]
  return this.todoTasks;
}
}
