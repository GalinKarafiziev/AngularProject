import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ToDoComponent } from './to-do/to-do.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component'
import { AddDepartmentComponent } from './add-department/add-department.component';
const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'todo', component: ToDoComponent },

  {path: 'add',component: AddDepartmentComponent},
   //the add departmetn page
  {path: 'detail/:id' component: DepartmentDetailComponent}

// here should be the other thing


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
