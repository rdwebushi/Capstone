import { User } from '../../models/users/users.model';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private api: ApiServiceService, private router: Router) { }
  userlogin = true;
  userregister = false;
  message = ''
  status = 0
  user: User = new User;
  ngOnInit(): void {
    // this.user = localStorage.getItem('User')
    // console.log("token "+ localStorage.getItem('Token'))
    // console.log("user "+ user)
  }

 
  //Buttons clicks functionalities 
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
    this.message =''
    this.status = 0
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
    this.message =''
    this.status = 0
  }
  signup(name:string, email:string, password:string){
    this.api.signup(name, email, password).subscribe(result=>{
      this.status = result.status
      let token = result.token;
      let user = result.user
      if(this.status== 201){
        localStorage.setItem('Token', token);
        localStorage.setItem('User', user._id);
        this.router.navigate([ '/' ]);
        window.location.reload();

      }
      else{
        this.message = result.message
      }

    })
  }
  login( email:string, password:string){
    this.api.login(email, password).subscribe(result=>{
      this.status = result.status
      let token = result.token;
      let user = result.user
        if(this.status== 201){
          localStorage.setItem('Token', token);
          localStorage.setItem('User', user._id);
          this.router.navigate([ '/' ]);
          window.location.reload();

        }
        else{
          this.message = result.message
        }
    })
  }
}
