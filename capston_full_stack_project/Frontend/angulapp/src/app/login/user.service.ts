import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor(public http:HttpClient) { }
noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})};

  registerUser(User:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/register",User,this.noAuthHeader);
  }

  checkUser(User:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/signIn",User,{responseType:"text"});
  }


  getUsers():Observable<any>{
    return this.http.get("http://localhost:8080/api/users");
  }

  deleteUser(name:any):Observable<any>{
    return this.http.delete("http://localhost:8080/api/delete/"+name,{responseType:"text"})
  }
  // helpermethods

 setToken(token:string){
  localStorage.setItem('token', token);
 }
 getToken(){
  return localStorage.getItem('token');
 }
 deleteToken(){
  return localStorage.removeItem('token');
 }

 getUserPayload(){
  var token=this.getToken();
 if(token){
  var userPayload= atob(token.split('.')[1]);
  return JSON.parse(userPayload);
 }
 else
  return null;
}

getUserId():any{
  return this.user;
}

isLoggedIn() {
  var userPayload = this.getUserPayload();
  if (userPayload)
    return userPayload.exp > Date.now() / 1000;
  else
    return false;
}
}

