import { Injectable } from '@angular/core';
import { LoginPayLoad } from '../login/login.component';
import { Observable, of } from 'rxjs';
import { ApiResponse } from './model/api-response';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginPayload: LoginPayLoad): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8000/api-auth', loginPayload).pipe(
      catchError(val => of(val))
    );
  }
}
