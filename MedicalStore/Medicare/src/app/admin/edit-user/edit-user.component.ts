import { User } from '../../models/users/users.model';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Users } from 'src/app/models/users/users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
}) 
export class EditUserComponent implements OnInit {
  user_id!: string ;
  user :  User = new User;

  constructor(private api:ApiServiceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.user_id = params['id'];
          this.api.getUserById(this.user_id).subscribe((user:User) =>{
            console.log(user)
            this.user= user
            console.log(this.user)
          })
      }
    )
  }
editUser( name:string, email:string){
  this.api.editUser(this.user_id, name, email).subscribe(res => {
    // this.router.navigate(['../'], { relativeTo: this.route });
    this.router.navigate(['admin/users']);
    })
}
}
