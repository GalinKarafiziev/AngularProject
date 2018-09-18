import { Component, OnInit } from '@angular/core';
import { TodoService } from './to-do.service';
import { Todo } from '../todo';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'todo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todos: Todo [];
  selectedTask: Todo;
  empServ: EmployeeService;
  employee: Employee;
  constructor(private service: TodoService) {
   this.todos = service.todoTasks;
   }

  ngOnInit() {
  }

  onSelect(todo: Todo): void {
    this.selectedTask = todo;
  }
  getTasks(): void {
  	this.service.getTasks();

  }
  delete(task: Todo): void {
    this.todos = this.todos.filter(t => t !== task);
    this.service.deleteTask(task);
  }
}
