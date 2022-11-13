import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api/api-service.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private  api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

}
addProduct(name:string, desc:string, price:string, image:string){
  this.api.addNewProduct(name, desc, +price, image).subscribe(res => {
    this.router.navigate(['admin/products'], );
  })
}
}
