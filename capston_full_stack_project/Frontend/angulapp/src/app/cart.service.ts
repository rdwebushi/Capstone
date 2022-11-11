import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  addToWishList(user_id: string, product_id: string): Observable<Product> {
    return this.http.post<Product>(" ", {
      product_id: product_id
    });
  }

  getCart(id: string): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/api/cart/"+id);
  }

  addToCart(user_id:string, product_id:string):Observable<Product>{
  return this.http.post<Product>("http://localhost:8080/api/",{
    product_id: product_id
  });
}

deleteFromCart(id: string, product_id: string): Observable<Product>{
  return this.http.delete<Product>("http://localhost:8080/api/")
}

deleteCart(id:any):Observable<Product>{
  return this.http.delete<Product>("http://localhost:8080/api/cart/delete"+id);
}
}
