import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ToDoComponent } from './to-do/to-do.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component'
import { AddDepartmentComponent } from './add-department/add-department.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'detail/:id', component: EmployeeDetailsComponent },
  {path: 'add', component: AddEmployeeComponent},


  { path: 'todo', component: ToDoComponent },
  
  {path: 'addDept',component: AddDepartmentComponent},
  { path: 'departments', component: DepartmentsComponent },
  {path: 'detail/:id', component: DepartmentDetailComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}