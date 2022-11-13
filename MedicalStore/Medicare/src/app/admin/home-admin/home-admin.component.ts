import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate([ '/admin/products' ]);
  }

  logout(){
    localStorage.removeItem('AdminToken')
    this.router.navigate([ '/admin' ]);
    window.location.reload();
  }

}
