import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TodoService } from '../to-do/to-do.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'todetail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {

@Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }



}
