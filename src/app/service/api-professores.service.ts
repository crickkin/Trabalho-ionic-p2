import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Professor } from '../models/professor';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiProfessoresService {

  // API Rest
  baseUrl = 'http://localhost:3000/professores';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu algum erro:', error.error.message);
    } else {
      console.error(`Backend retornou ${error.status},` + `com body: ${error.error}`);
    }

    return throwError('Algo de errado aconteceu; Por favor, tente novamente mais tarde.');
  }

  // CRUD
  getAll(): Observable<Professor> {
    return this.http
      .get<Professor>(this.baseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  get(id): Observable<Professor> {
    return this.http
      .get<Professor>(`${this.baseUrl}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  create(item): Observable<Professor> {
    return this.http
      .post<Professor>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id, item): Observable<Professor> {
    return this.http
      .put<Professor>(`${this.baseUrl}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http
      .delete<Professor>(`${this.baseUrl}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
