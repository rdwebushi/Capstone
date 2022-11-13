import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api/api-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  constructor(private  api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
 
}

addUser(name:string, email:string, password:string){
  this.api.addNewUser(name, email, password).subscribe(res => {
    this.router.navigate(['admin/users']);  })
}
}
