import { User } from '../../models/users/users.model'
import { Product } from '../../models/products/products.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = 'http://localhost:9090';

  constructor(private http: HttpClient) { }
  // Products - ADMIN SECTION
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/product`);
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/product/${id}`);
  }
  deleteProductById(id: string): Observable<Product> {
    console.log(id)
    return this.http.delete<Product>(`${this.url}/product/${id}`);
  }
  addNewProduct(name: string, desc: string, price: number, image:string): Observable<Product> {
    return this.http.post<Product>(`${this.url}/product`, {
      name: name,
      description: desc,
      price: price,
      image:image
    })
  }
  editProduct(id: string, name: string, desc: string, price: number): Observable<Product> {
    return this.http.patch<Product>(`${this.url}/product/${id}`, {
      name: name,
      description: desc,
      price: price,

    })
  }
  // Users - ADMIN SECTION
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/user`);
  }
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`);
  }
  deleteUserById(id: string): Observable<User> {
    return this.http.delete<User>(`${this.url}/user/${id}`);
  }
  addNewUser(name: string, email: string, pass: string): Observable<User> {
    return this.http.post<User>(`${this.url}/user`, {
      name: name,
      email: email,
      password: pass,
    })
  }
  editUser(id: string, name: string, email: string): Observable<User> {
    return this.http.patch<User>(`${this.url}/user/${id}`, {
      name: name,
      email: email,
    })
  }
  // Wish List
  getWishList(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/wish-list/${id}`);
  }
  addToWishList(user_id: string, product_id: string): Observable<Product> {
    return this.http.post<Product>(`${this.url}/wish-list/${user_id}`, {
      product_id: product_id
    });
  }
  deleteFromWishList(id: string, product_id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/wish-list/dp/${id}`, {
      body: { product_id: product_id }
    });
  }
  deleteWishList(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/wish-list/${id}`);
  }
  // Cart
  getCart(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/cart/${id}`);
  }
  addToCart(user_id: string, product_id: string): Observable<Product> {
    return this.http.post<Product>(`${this.url}/cart/${user_id}`, {
      product_id: product_id
    });
  }
  deleteFromCart(id: string, product_id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/cart/dp/${id}`, {
      body: { product_id: product_id }
    });
  }
  deleteCart(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/cart/${id}`);
  }
  // Authentication
  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/auth/signup`, {
      name: name,
      email: email,
      password: password,
    })
  }
  login(email: string, password: string): Observable<any>  {
    return this.http.post(`${this.url}/auth/login`, {
      email: email,
      password: password,
    })
  }

}
