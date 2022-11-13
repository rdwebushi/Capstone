import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogedinServiceService } from 'src/app/services/logedin/logedin-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogedIn: boolean = false;

  constructor(private logedin :LogedinServiceService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isLogedIn = this.logedin.isLogedIn();
  }
  
  logout(){
    this.logedin.logOut();
    this.isLogedIn = this.logedin.isLogedIn();
    this.router.navigate([ '/' ]);
    window.location.reload();

  }
}
