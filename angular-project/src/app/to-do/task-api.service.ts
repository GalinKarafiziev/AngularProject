import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Todo } from '../todo';

@Injectable()
export class ApiTask{
  constructor(private http: HttpClient) { }

  taskUrl = 'http://i875395.hera.fhict.nl/api/380935/task';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getTasks(): Observable<any> {
    return this.http.get(this.taskUrl + 'tasks').pipe(
      map(this.extractData));
  }

  getTask(task: Todo): Observable<any> {
    return this.http.get(this.taskUrl + 'tasks/' + task.idE).pipe(
      map(this.extractData));
  }

  addProduct (task: Todo): Observable<Todo> {
    console.log(task);
    return this.http.post<Todo>(this.taskUrl + 'tasks', JSON.stringify(task), this.httpOptions).pipe(
      tap((task) => console.log(`added task w/ id=${task.idE}`)),
      catchError(this.handleError<any>('addTask'))
    );
  }

  updateProduct (task: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.taskUrl + 'tasks' + task.idE, JSON.stringify(task), this.httpOptions).pipe(
      tap((task)=> console.log(`updated task id=${task.idE}`)),
      catchError(this.handleError<any>('updateTask')
    ));
  }

  deleteProduct (task: Todo): Observable<any> {
    return this.http.delete<any>(this.taskUrl + 'tasks' + task.idE, this.httpOptions).pipe(
      tap((task) => console.log(`deleted task id=${task.idE}`)),
      catchError(this.handleError<any>('deleteTask'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
