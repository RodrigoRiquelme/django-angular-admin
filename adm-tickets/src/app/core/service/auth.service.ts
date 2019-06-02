import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginPayLoad } from '../../login/login.component';
import { TokenResponse } from '../model/token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginPayload: LoginPayLoad): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('http://127.0.0.1:8000/auth/login/', loginPayload);
  }

  logout(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/auth/logout/');
  }
}
