import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../login/user.service';
import { Router } from '@angular/router';
import { User } from '../login/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productRef = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    price:new FormControl()
  });

  constructor(public pSer:ProductService , public use:UserService, public router:Router) { }   // DI
  msg:string="";
  products:Array<Product>=[];
  users:Array<User>=[];
  deleteMsg:string="";
  // it will call only once
  ngOnInit(): void {
    var take:any;
    var tak:any;
    this.pSer.retrieveProductInfo().subscribe(result=>{
      take=result;
      this.products=take.user;
    })

   this.use.getUsers().subscribe(result=>this.users=result)
    this.retriveAllUsers();
    this.retreiveAllProductDetails();
  }

  storeProduct(){
    let product = this.productRef.value;
    //console.log(product);
    this.pSer.storeProduct(product).subscribe(result=>{
      this.msg=result;
      this.retreiveAllProductDetails();   // calling this function to load the data.
    });
    this.productRef.reset();
  }

  retreiveAllProductDetails() {
    this.pSer.retrieveProductInfo().subscribe(result=>this.products=result);
  }
   //update product
   pid1?:number;
   price1?:number;
   flag:boolean=false;

   updateProduct(product:Product){
     this.pid1=product._id;
     this.price1=product.price;
     this.flag=true;
   }
   // update record
   updatedResult?:string;
   updateRecordInfo(){
     let productUpdate={pid:this.pid1,price:this.price1};
     this.pSer.updateProductPrice(productUpdate).subscribe(result=>{
       this.updatedResult=result;
       this.flag=false;
       this.retreiveAllProductDetails();
     })
   }
  deleteRec(id:any){
    console.log(id);
    this.pSer.deleteProductInfo(id).subscribe(result=>{
      this.deleteMsg=result;
      this.retreiveAllProductDetails();
    });
  }

  onLogout(){
    this.use.deleteToken();
    this.router.navigate(['/']);
  }

  retriveAllUsers(){
    this.use.getUsers().subscribe((result: User[])=>this.users=result);
  }

  deleteUser(id:any){
    this.use.deleteUser(id).subscribe(result=>{
      this.deleteMsg=result;
      this.retriveAllUsers();
    })
  }

}
