import { Router } from '@angular/router';
import { LogedinServiceService } from '../../services/logedin/logedin-service.service';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { Product } from 'src/app/models/products/products.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  products: Product[] = [];
  userID: string ='';
  isLogedIn: boolean = false;

  constructor(private  api: ApiServiceService, private logedin :LogedinServiceService, private router: Router) { }

  ngOnInit(): void {
    this.isLogedIn = this.logedin.isLogedIn();
    if(this.isLogedIn){
      this.userID = this.logedin.getUserId();
      this.api.getWishList(this.userID).subscribe((products:Product[]) => {
        this.products = products
      })
    }
      else{
        this.router.navigate([ 'signin' ]);
      }
  }
  
  deleteFromWishList(id:string, product_id:string){
    this.api.deleteFromWishList(id, product_id).subscribe(res => {
      this.products = this.products.filter(val => val._id !== product_id);
    })
  }

  deleteWishList(id:string){
    this.api.deleteWishList(id).subscribe(res => {
      this.products = []
    })
  }
}
