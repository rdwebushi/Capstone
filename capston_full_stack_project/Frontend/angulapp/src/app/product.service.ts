import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor( public http:HttpClient) { }

  // product api for admin

  storeProduct(Product:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/product/admin/storeProduct",Product,{responseType:"text"});
  }

  // ADMIN retrive data from db
  retrieveProductInfo():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/api/product/admin/getAllProduct");
  }

  //ADMIN update record
  updateProductPrice(Product:any):Observable<any>{
    return this.http.put("http://localhost:8080/api/product/admin/updateProduct",Product,{responseType:"text"});
  }
  //ADMIN to delete product info
  deleteProductInfo(id:any):Observable<any>{
    return this.http.delete("http://localhost:8080/api/product/admin/deleteProdut/"+id,{responseType:"text"});
  }


  //API FOR USERS
  getProductToUser():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/api/product/user/getAllProduct");

  }

  searchProduct(id:any):Observable<any>{
    return this.http.get<Product[]>("http://localhost:8080/api/product/user/findProductById/:pid/"+id);

  }

}
