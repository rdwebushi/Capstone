import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userRef = new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    mobile_no:new FormControl(),
    address:new FormControl(),
    user_type:new FormControl()
  })
  constructor(public user:UserService) { }  //DI for service class
msg:string="";
showSuccessMsg:boolean|undefined;
  ngOnInit(): void {
  }

  registerUser(){

    let newUser=this.userRef.value;
    this.user.registerUser(newUser).subscribe(result=>{
      this.msg=result;
      setTimeout(()=>this.showSuccessMsg=false,400);

    });
  }


  checkUser(){
    let user= this.userRef.value;
    this.user.checkUser(user).subscribe(result=>{
      console.log(result);
    });
  }
}
