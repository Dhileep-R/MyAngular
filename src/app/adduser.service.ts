import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  private apiUrl = 'http://localhost:8080/api/';
  

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
   return this.http.post(`${this.apiUrl}adduser`, user, {responseType: 'text'});
  }

  getuser():Observable<any>{
    return this.http.get(`${this.apiUrl}getuser`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(`${this.apiUrl}deleteall`,{responseType: 'text'});
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}deleteuser/${id}`,{responseType: 'text'})
  }

  updateUser(user:User):Observable<any>{
    return this.http.put(`${this.apiUrl}updateuser/${user.id}`,user,{responseType: "text"})
  }
}
