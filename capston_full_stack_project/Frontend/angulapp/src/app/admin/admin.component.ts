import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userref = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(public user:UserService, public router:Router) { }

  ngOnInit(): void {
    if(this.user.isLoggedIn())
    this.router.navigateByUrl('/dashboard');
  }

  checkUser(){
    var take:any;
    let user=this.userref.value;
    this.user.checkUser(user).subscribe(result=>{
      take=result;
      this.user.setToken(take.token);
      this.router.navigateByUrl('/dashboard')
    })
  }

}
