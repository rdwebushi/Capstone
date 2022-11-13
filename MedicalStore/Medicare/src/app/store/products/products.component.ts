import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products/products.model'
import { ActivatedRoute, Router } from '@angular/router';
import { LogedinServiceService } from 'src/app/services/logedin/logedin-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  userID: string ='';
  isLogedIn: boolean = false;

  constructor(
    private  api: ApiServiceService,
    private logedin :LogedinServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.isLogedIn = this.logedin.isLogedIn();
      this.userID = this.logedin.getUserId();
      this.api.getAllProducts().subscribe((products:Product[]) => {
        this.products = products
      })
  }

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
