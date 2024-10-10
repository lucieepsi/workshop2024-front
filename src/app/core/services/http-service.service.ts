import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { AverageModel } from '../models/averageModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.apiUrlBack}/auth/login`;
    const loginData = {
      email: email,
      password: password
    };

    return this.http.post(url, loginData, {  headers });
  }

  getCurrentWeekAverage(email: string): Observable<AverageModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.apiUrlBack}/sessions/average`;
    const loginData = {
      email: email
    };
    return this.http.post<AverageModel>(url, loginData, { headers });
  }

  getTopUsersByPoints(): Observable<any> {
    return this.http.get(`${environment.apiUrlBack}/user/topPoints`);
  }

  getLastSession(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.apiUrlBack}/sessions/last`;
    const loginData = {
      email: email
    };

    return this.http.post(url, loginData, {  headers });
  }

  getQuests(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.apiUrlBack}/landings/quests`;
    const loginData = {
      email: email
    };
    return this.http.post(url, loginData, {  headers });
  }
}
