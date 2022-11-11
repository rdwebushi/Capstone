import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[]=[];
  constructor(public pser:ProductService) { }

  ngOnInit(): void {
     this.pser.retrieveProductInfo().subscribe((products:Product[])=>{
      this.products=products;
    })
  }

  deleteProduct(id:any){
    this.pser.deleteProductInfo(id).subscribe(res =>{
      this.products=this.products.filter(val=>val._id==id);

    })
  }

  addProduct(name:string, _id:string, price:string){
    this.pser.storeProduct(_id).subscribe(res => {
      })
  }
}
