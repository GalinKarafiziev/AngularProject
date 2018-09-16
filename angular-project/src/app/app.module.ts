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
    AddEmployeeComponent
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
