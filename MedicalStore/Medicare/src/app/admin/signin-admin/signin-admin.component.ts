import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.css']
})
export class SigninAdminComponent implements OnInit {

  constructor(private router:Router, ) { }
  message = ''

  ngOnInit(): void {
  }
login( email:string, password:string){
  
if(email == 'admin' && password == 'admin'){
        localStorage.setItem('AdminToken', email);
        this.router.navigate([ '/admin' ]);
      }
      else{
        this.message = 'Email or password wrong!!'
      }

}
}
