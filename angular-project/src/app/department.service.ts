import { Injectable } from '@angular/core';
import { Departments } from './departments';
import { Department } from './department';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

const httpOptions = {
     headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


    constructor(private http: HttpClient) { }
    dep : Department[] = Departments;
private depRead = 'http://i378011.hera.fhict.nl/api_department/department/read.php';
private depReadOne = 'http://i378011.hera.fhict.nl/api_department/department/read_one.php?id=';
private depCreate = 'http://i378011.hera.fhict.nl/api_department/department/create.php';
private depUpdate = 'http://i378011.hera.fhict.nl/api_department/department/update.php';
private depDelete = 'http://i378011.hera.fhict.nl/api_department/department/delete.php?id=';
private depSearch = 'http://i378011.hera.fhict.nl/api_department/department/search.php?s=';

   getDepartments(): Observable<Department[]>{
    //	return of (this.dep);
    return this.http.get<Department[]>(this.depRead);
  }
  //getDep(id:number):Observable<Department>{
  //return this.http.get<Department>(this.depReadOne + id);
  //}

    getDepartment(id: number): Observable<Department>{
    //	return of (this.dep.find(department => department.id === id));
      return this.http.get<Department>(this.depReadOne + id);
    }

    getDepByName(name:string) : Observable<Department>{
      return of (this.dep.find(department => department.name === name))
    }

    getDepartmentName(name: string): Observable<Department>{
      return of(this.dep.find(department => department.name === name));
    }

    updateDepartment(dep: Department):Observable<any>{

    	  return this.http.post(this.depUpdate,dep,httpOptions);
    }

    addDepartment (name:string, location:string):Observable<any> {
      return this.http.post(this.depCreate,{
            "name": name,
            "location": location},
            httpOptions);
    }


    deleteDepartment(id:number):Observable<Department>{
    return this.http.get<Department>(this.depDelete + id);
    }

  }
