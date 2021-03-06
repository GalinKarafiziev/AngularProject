import { Injectable } from '@angular/core';
import { Todo } from '../todo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'text/plain',
  'Authorization': 'my-auth-token'
 })
};

@Injectable({
  providedIn: 'root'
})

export class TodoService
{



  constructor(private http: HttpClient){

  }
  todoTasks: Todo[] = [];
  private taskReadOne = 'http://i380447.hera.fhict.nl/api_tasks/task/read_one.php?id=';
  private taskRead = 'http://i380447.hera.fhict.nl/api_tasks/task/read.php';
  private taskAdd = 'http://i380447.hera.fhict.nl/api_tasks/task/create.php';
  private taskUpdate = 'http://i380935.hera.fhict.nl/task/update.php';
  private taskSearch = 'http://i380447.hera.fhict.nl/api_tasks/task/search.php?s=';
  private taskDelete = 'http://i380935.hera.fhict.nl/task/delete.php?id=';


getTasks(): Observable<Todo[]>{
  return this.http.get<Todo[]>(this.taskRead);
}
getTask(id: number): Observable<Todo>{
  return this.http.get<Todo>(this.taskReadOne + id);
}

addTask (task: string, department:string, employee: string): Observable<any> {
  return this.http.post(this.taskAdd,{
    "task": task,
    "employee": employee,
    "department": department},
    httpOptions);
}
deleteTask(id: number): Observable<Todo> {
  return this.http.get<Todo>(this.taskDelete + id);
}

updateTask(todo: Todo): Observable<any>{
  return this.http.post(this.taskUpdate, todo, httpOptions);
}

searchTask(s: string): Observable<Todo[]>{
  return this.http.get<Todo[]>(this.taskSearch + s);
}

getName(name: string) : Observable<Todo>{
  return this.http.get<Todo>(this.taskRead);
}


}
