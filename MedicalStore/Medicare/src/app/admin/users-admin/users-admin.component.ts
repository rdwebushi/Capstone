import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { User } from 'src/app/models/users/users.model';
// import {MatSnackBarModule} from '@angular/material/snack-bar';



@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
}) 
export class UsersAdminComponent implements OnInit {

  users: User[] = [];

  constructor(private  api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
     this.api.getAllUsers().subscribe((users:User[]) => {
      this.users = users
    },
    (err: HttpErrorResponse) => {
      if (err.error.msg) {
        // this.snackBar.open(err.error.msg, 'Undo');
      } else {
        // this.snackBar.open('Something Went Wrong!');
      }
    }) 
  }
// delete cart and wish list
  deleteUser(id:string){
    this.api.deleteUserById(id).subscribe(res => {
      this.users = this.users.filter(val => val._id !== id);
    })
    this.api.deleteCart(id).subscribe(res=>{})
    this.api.deleteWishList(id).subscribe(res=>{})
  } 
}
