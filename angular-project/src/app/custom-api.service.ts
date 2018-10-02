import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Todo } from './todo';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';




const apiUrl = 'http://localhost:3000/todos';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomApiService {

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getTasks(): Observable<any> {
    return this.http.get(apiUrl + '/todos').pipe(
      map(this.extractData));
  }

  getTask(id): Observable<any> {
    return this.http.get(apiUrl + '/todos/' + id).pipe(
      map(this.extractData));
  }

  addTask (todo): Observable<any> {
    console.log(todo);
    return this.http.post<any>(apiUrl + '/todos', JSON.stringify(todo), httpOptions).pipe(
      tap((todo) => console.log(`added task w/ id=${todo.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateTask (id, todo): Observable<any> {
    return this.http.put(apiUrl + '/todos' + id, JSON.stringify(todo), httpOptions).pipe(
      tap(_ => console.log(`updated task id=${id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  deleteTask (id): Observable<any> {
    return this.http.delete<any>(apiUrl + '/todos' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted task id=${id}`)),
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
