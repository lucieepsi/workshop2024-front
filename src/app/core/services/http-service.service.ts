import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${environment.apiUrlBack}/auth/login`;
    const loginData = {
      email: email,
      password: password
    };

    return this.http.post(url, loginData);
  }
}
