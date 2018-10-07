import { Injectable } from '@angular/core';
import { Todo } from '../todo';
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

export class TodoService
{



  constructor(private http: HttpClient){

  }
  todoTasks: Todo[] = [];
  private taskReadOne = 'http://i380935.hera.fhict.nl/task/read_one.php?id=';
  private taskRead = 'http://i380935.hera.fhict.nl/task/read.php';
  private taskAdd = 'http://i380935.hera.fhict.nl/task/create.php';
  private taskUpdate = 'http://i380935.hera.fhict.nl/task/update.php';
  private taskSearch = 'http://i380935.hera.fhict.nl/task/search.php?s=';
  private taskDelete = 'http://i380935.hera.fhict.nl/task/delete.php?id=';

  mockToArray() {
  this.todoTasks.push(new Todo("Write C", "ASAI", "John"));
  this.todoTasks.push(new Todo("Hire specialist", "ASAI", "John"));
  return this.todoTasks;
}
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

updateTask(task: Todo): Observable<any>{
  return this.http.post(this.taskUpdate, task, httpOptions);
}

searchTask(s: string): Observable<Todo[]>{
  return this.http.get<Todo[]>(this.taskSearch + s);
}

getName(name: string) : Observable<Todo>{
  return this.http.get<Todo>(this.taskRead);
}


}
