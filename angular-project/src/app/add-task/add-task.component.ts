import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../to-do/to-do.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private todoService: TodoService, private location: Location) { }

  ngOnInit() {
  }

  add(fName: string, lName: string, task: string, department:string): void {
    fName = fName.trim();
    lName = lName.trim();
    task = task.trim();
    department = department.trim();
    if(!fName){return;}
    if(!lName){return;}
    if(!task){return;}
    if(!department){return;}
    this.todoService.addTask(fName, lName,task,department);
  }
  goBack(): void{
    this.location.back();
  }

}
