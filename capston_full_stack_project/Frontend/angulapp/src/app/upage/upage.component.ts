import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { UserService } from '../login/user.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-upage',
  templateUrl: './upage.component.html',
  styleUrls: ['./upage.component.css']
})
export class UpageComponent implements OnInit {
userDetails:any;
msg:string="";
products:Product[]=[];

userID: string ='';
isLogedIn: boolean = false;

constructor(
    public pser:ProductService,
    public router:Router,
    public use:UserService,
    public cser:CartService) { }



  ngOnInit(): void {
   //this.isLogedIn=this.use.isLoggedIn();
    //  this.userID=this.use.getUserId();
    this.pser.retrieveProductInfo().subscribe((products:Product[])=>{
      this.products=this.products
    })
    this.retriveAllProductDetails()
  }

  retriveAllProductDetails(){
    this.pser.retrieveProductInfo().subscribe(result=>{this.products=result});
  }

  AddtoCart(user_id:any, product_id:any){
    if(this.isLogedIn){
      this.userID = this.use.getUserId();
      this.cser.addToCart(user_id,product_id).subscribe(res => {
        // this.router.navigate(['../'], { relativeTo: this.route });
      })
    }
      else{

          this.router.navigate([ 'cart' ]);
        }

  }
  onCart(){
    this.router.navigate(['cart'])
  }
  onFavour(){}
    addToWishlist(user_id:any, product_id:any){
      if(this.isLogedIn){
        this.userID = this.use.getUserId();
        this.cser.addToWishList(user_id,product_id).subscribe(res => {
          // this.router.navigate(['../'], { relativeTo: this.route });
        })
    }
      else{

            this.router.navigate([ 'wishlist' ]);

      }
  }

  onLogout(){
    this.use.deleteToken();
    this.router.navigate(['/']);
  }
}
