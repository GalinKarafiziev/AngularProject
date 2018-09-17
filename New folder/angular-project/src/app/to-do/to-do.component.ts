import { Component, OnInit } from '@angular/core';
import { TodoService } from './to-do.service';
import { Todo } from '../todo';

@Component({
  selector: 'todo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todos: Todo [];
  selectedTask: Todo;
  constructor(service: TodoService) {
   this.todos = service.todoTasks;
   }

  ngOnInit() {
  }

  onSelect(todo: Todo): void {
    this.selectedTask = todo;
  }
}
