import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from '../department.service';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private departmentService: DepartmentService, private location: Location) { }

  ngOnInit() {
  }
  add(depName: string, location: string): void {
    depName = depName.trim();
    location = location.trim();


    if(!depName){return;}
    if(!location){return;}


        this.departmentService.addDepartment(depName, location);
  }
  goBack(): void{
    this.location.back();
  }

}
