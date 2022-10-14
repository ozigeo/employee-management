import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endpoint = 'http://localhost:3004/employees';
const endPointAccount = 'http://localhost:3004/accounts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(endpoint);
  }

  postRegister(data:any): Observable<any> {
    return this.http.post(endPointAccount, data)
    console.log('asdasdasdadsad')
  }

  postAddEmployee(data:any): Observable<any> {
    return this.http.post(endpoint, data);
  }

  getAccount() {
    return this.http.get<any>(endPointAccount)
  }
}
