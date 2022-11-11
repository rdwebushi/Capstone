import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cart } from 'src/app/cart';
import { CartService } from 'src/app/cart.service';
import { UserService } from 'src/app/login/user.service';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:Cart[]=[];
  products: Product[] = [];
  userID: string ='';
  isLogedIn: boolean = false;

  constructor(public use:UserService, public cser:CartService, public router:Router) { }

  ngOnInit(): void {
    this.isLogedIn=this.use.isLoggedIn();
    if(this.isLogedIn){
      this.userID=this.use.getUserId();
      this.cser.getCart(this.userID).subscribe((products:Product[])=>{
        this.products=products
      })
      console.log(this.userID)
    }else{
      this.router.navigate(['signin'])
    }
  }
  deleteFromCart(){}
  deleteFromCar(id:string, product_id:string){
    this.cser.deleteFromCart(id, product_id).subscribe(res => {
      this.products = this.products.filter(x=>x.name);
    })
  }

  checkout(){
    this.router.navigate(['checkout']);
  }

  deleteCart(id:string){
    this.cser.deleteCart(id).subscribe(res => {
      this.products = []

    })
  }

}
