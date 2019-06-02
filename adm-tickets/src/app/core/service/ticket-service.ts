import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response';
import { Ticket } from '../model/ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8000/ticket/';

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  create(ticket: Ticket): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, ticket);
  }

  update(ticket: Ticket): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + ticket.id, ticket);
  }

  delete(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
