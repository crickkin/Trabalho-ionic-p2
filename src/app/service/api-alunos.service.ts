import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Aluno } from '../models/aluno';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiAlunosService {

  // API Rest
  baseUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu algum erro:', error.error.message);
    } else {
      console.error(`Backend retornou ${error.status}, ` + `body was: ${error.error}`);
    }

    return throwError('Algo de errado aconteceu; Por favor, tente novamente mais tarde.');
  }

  // CRUD
  getAll(): Observable<Aluno> {
    return this.http
      .get<Aluno>(this.baseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  get(id): Observable<Aluno> {
    return this.http
      .get<Aluno>(`${this.baseUrl}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  create(item): Observable<Aluno> {
    return this.http
      .post<Aluno>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id, item): Observable<Aluno> {
    return this.http
      .put<Aluno>(`${this.baseUrl}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http
      .delete<Aluno>(`${this.baseUrl}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
