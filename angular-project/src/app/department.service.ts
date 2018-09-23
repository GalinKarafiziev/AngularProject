import { Injectable } from '@angular/core';
import { Departments } from './departments';
import { Department } from './department';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


    constructor() { }
    dep : Department[] = Departments;

    getDepartments(): Observable<Department[]>{
    	return of (this.dep);
    }

    getDepartment(id: number): Observable<Department>{
    	return of (this.dep.find(department => department.id === id));
    }
    getDepByName(name:string) : Observable<Department>{
      return of (this.dep.find(department => department.name === name))
    }

    getDepartmentName(name: string): Observable<Department>{
      return of(this.dep.find(department => department.name === name));
    }

    updateDepartment(newDepartment: Department): void{
    	console.log (this.dep);
      let oldDep = this.dep.find(department => department.id === newDepartment.id)
       oldDep = newDepartment;
      console.log (this.dep);
    }

    addDepartment (name:string, location:string): void {
    	console.log (this.dep);
    	this.dep.push(new Department(name,location));
    	console.log (this.dep);
    }


    deleteDepartment(department: Department): void{
    	console.log (this.dep);

    	 this.dep.forEach( (item, index) => {
       if(item === department) this.dep.splice(index,1);});
    	console.log (this.dep);
    }

  }
