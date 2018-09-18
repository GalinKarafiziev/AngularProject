import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TodoService } from '../to-do/to-do.service';
import { Todo } from 'src/app/todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'todetail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {

@Input() todo: Todo;
empServ: EmployeeService;
todoServ:TodoService;

constructor(private route: ActivatedRoute, private employeeService: TodoService, private location: Location) { }


  ngOnInit() {
  }
  getTask(): void{
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.employeeService.getTask(id).subscribe(task => this.todo = task)
  }

  goBack(): void{
    this.location.back();
  }
  save(): void {
   this.todoServ.updateTask(this.todo);
   this.goBack();
 }


}
