import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogedinServiceService {
   token!:string;
   user !:string ;

  constructor() { 
    this.token = localStorage.getItem('Token')|| ''
    this.user = localStorage.getItem('User')|| ''
  }

  isLogedIn(): boolean {

    if(this.token){
      return true;
    }
    else{
      return false;
    }
  }

  getToken(): string{
    return this.token;
  }

  getUserId(): string{
    return this.user;
  }

  logOut():void{
    localStorage.removeItem('Token')
    localStorage.removeItem('User')
    this.token =  ''
    this.user = ''
    window.location.reload();

  }
}
