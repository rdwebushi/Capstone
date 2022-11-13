// import { Products } from './../../model/products.model';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/products/products.model';
import { LogedinServiceService } from 'src/app/services/logedin/logedin-service.service';

@Component({
  selector: 'app-prdouct-details',
  templateUrl: './prdouct-details.component.html',
  styleUrls: ['./prdouct-details.component.css']
})
export class PrdouctDetailsComponent implements OnInit {

  product: Product = new Product;
  product_id!: string ;
  userID: string ='';
  isLogedIn: boolean = false;
  constructor(private api:ApiServiceService, private logedin :LogedinServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.product_id = params['id'];
          this.getProductDetails(this.product_id)
      }
    )
    this.isLogedIn = this.logedin.isLogedIn();
    this.userID = this.logedin.getUserId();
  }
  getProductDetails(product_id:string){
    this.api.getProductById(product_id).subscribe((product:Product) => {
      this.product = product
    })
  }
  // check first if there is loged in session
  addToWishlist(user_id:string, product_id:string){
    if(this.isLogedIn){
      this.userID = this.logedin.getUserId();
      this.api.addToWishList(user_id,product_id).subscribe(res => {
        // this.router.navigate(['../'], { relativeTo: this.route });
      })
    }
      else{
        if(confirm("You must signin")) {
          this.router.navigate([ 'signin' ]);
        }
      }
  }
  addToCart(user_id:string, product_id:string){
    if(this.isLogedIn){
      this.userID = this.logedin.getUserId();
      this.api.addToCart(user_id,product_id).subscribe(res => {
        // this.router.navigate(['../'], { relativeTo: this.route });
      })
    }
      else{
        if(confirm("You must signin")) {
          this.router.navigate([ 'signin' ]);
        }
      }

  }
}
