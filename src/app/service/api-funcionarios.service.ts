import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Funcionario } from '../models/funcionario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiFuncionariosService {

  // API Rest
  baseUrl = 'http://localhost:3000/funcionarios';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Algo deu errado:', error.error.message);
    } else {
      console.error(`Backend retornou ${error.status},` + `com body ${error.error}`);
    }
    return throwError('Algo de errado aconteceu; Por favor, tente novamnete mais tarde');
  }

  // CRUD
  getAll(): Observable<Funcionario> {
    return this.http
      .get<Funcionario>(this.baseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  get(id): Observable<Funcionario> {
    return this.http
      .get<Funcionario>(`${this.baseUrl}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  create(item): Observable<Funcionario> {
    return this.http
      .post<Funcionario>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id, item): Observable<Funcionario> {
    return this.http
      .put<Funcionario>(`${this.baseUrl}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http
      .delete<Funcionario>(`${this.baseUrl}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
