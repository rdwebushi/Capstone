import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { Product } from 'src/app/models/products/products.model';
import { LogedinServiceService } from 'src/app/services/logedin/logedin-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  userID: string ='';
  isLogedIn: boolean = false;

  constructor(private  api: ApiServiceService, private logedin :LogedinServiceService, private router: Router) { }

  ngOnInit(): void {
    this.isLogedIn = this.logedin.isLogedIn();
    if(this.isLogedIn){
      this.userID = this.logedin.getUserId();
      this.api.getCart(this.userID).subscribe((products:Product[]) => {
        this.products = products
      })
      console.log(this.userID)
    }
      else{
        this.router.navigate([ 'signin' ]);
      }
  }
   
  deleteFromCart(id:string, product_id:string){
    this.api.deleteFromCart(id, product_id).subscribe(res => {
      this.products = this.products.filter(val => val._id !== product_id);
    })
  }

  deleteCart(id:string){
    this.api.deleteCart(id).subscribe(res => {
      this.products = []
    })
  } 

  checkout(id:string){
    this.deleteCart(id)
    this.router.navigate([ 'checkout' ]);
  }

}
