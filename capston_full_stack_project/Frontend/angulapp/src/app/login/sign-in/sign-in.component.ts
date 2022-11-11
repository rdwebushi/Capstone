import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userref = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  constructor(public user:UserService, public router:Router) { }

  ngOnInit(): void {

    if(this.user.isLoggedIn())
    this.router.navigateByUrl('/');
  }

  checkUser(){
    var take:any;
    let user=this.userref.value;
    this.user.checkUser(user).subscribe(result=>{
      take=result;
      this.user.setToken(take.token);
      this.router.navigateByUrl('/upage')
    })
  }
}
