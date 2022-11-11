import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { UserService } from 'src/app/login/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public use:UserService, public cser:CartService, public router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.use.deleteToken();
    this.router.navigate(['/']);
  }
}
