import { Component, OnInit } from '@angular/core';
import { Departments } from '../departments';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  derpartments = Departments;

  constructor() { }

  ngOnInit() {
  }

}
