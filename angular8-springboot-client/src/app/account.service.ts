import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = 'http://localhost:8080/api/v1/accounts';

  constructor(private http: HttpClient) { }
  
  getAccount(id: number): Observable<any> {  // ← Cette méthode doit exister
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getAccountsList(): Observable<any> {
  return this.http.get(`${this.baseUrl}`);
  }

  createAccount(account: Object): Observable<Object> {
    return this.http.post<Object>(this.baseUrl, account);
  }

  updateAccount(id: number, account: Object): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/${id}`, account);
  }

  deleteAccount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}