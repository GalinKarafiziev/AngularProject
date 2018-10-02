import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ToDoComponent } from './to-do/to-do.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component'
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'employees', component: EmployeesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailsComponent },
  { path: 'add', component: AddEmployeeComponent},
  { path: 'todo', component: ToDoComponent },
  { path: 'taskdetail', component: ToDoDetailComponent},
  { path: 'addtask', component: AddTaskComponent},
  { path: 'addDept',component: AddDepartmentComponent},
  { path: 'departments', component: DepartmentsComponent },
  { path: 'Depdetail/:id', component: DepartmentDetailComponent}

];

const appRoutes: Routes = [
  {
    path: 'todo',
    component: ToDoComponent,
    data: { title: 'Todo List' }
  },
  {
    path: 'todo-details/:id',
    component: ToDoDetailComponent,
    data: { title: 'Todo Details' }
  },
  {
    path: 'todo-add',
    component: AddTaskComponent,
    data: { title: 'Todo Add' }
  },
  {
    path: 'todo-edit/:id',
    component: TaskEditComponent,
    data: { title: 'Task Edit' }
  },
  { path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
