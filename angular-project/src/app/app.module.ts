import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoService } from './to-do/to-do.service';

import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {DepFilterPipe } from  './departments/dep-filter.pipe';
<<<<<<< HEAD
import { TaskFilterPipe } from './to-do/task.pipe';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { Routes } from '@angular/router';


@NgModule({
   imports: [
   AppRoutingModule,
    BrowserModule,
    FormsModule

  ],
  declarations: [
    EmployeesComponent,
    AppComponent,
    DepartmentsComponent,
    ToDoComponent,
    ToDoDetailComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    DepartmentDetailComponent,
    AddDepartmentComponent,
    DashboardComponent,
    AddTaskComponent,
    DepFilterPipe,
    TaskFilterPipe,
    TaskEditComponent,

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
