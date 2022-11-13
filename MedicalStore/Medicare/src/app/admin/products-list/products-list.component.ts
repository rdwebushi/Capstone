import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { Product } from 'src/app/models/products/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(private  api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     this.api.getAllProducts().subscribe((products:Product[]) => {
      this.products = products
    })
  }

  deleteProduct(id:string){
    this.api.deleteProductById(id).subscribe(res => {
      this.products = this.products.filter(val => val._id !== id);
      this.router.navigate(['admin/products'] );
    })
  }
  
}
