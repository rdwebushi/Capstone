import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './basics/header/header.component';
import { ProductsComponent } from './store/products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './store/cart/cart.component';
import { FooterComponent } from './basics/footer/footer.component';
import { PrdouctDetailsComponent } from './store/prdouct-details/prdouct-details.component';
import { WishListComponent } from './store/wish-list/wish-list.component';
import { SigninComponent } from './store/signin/signin.component';
import { SigninAdminComponent } from './admin/signin-admin/signin-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { UsersAdminComponent } from './admin/users-admin/users-admin.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { NewUserComponent } from './admin/new-user/new-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { ProductsHomeComponent } from './admin/products-home/products-home.component';
import { UsersHomeComponent } from './admin/users-home/users-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AboutUsComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
    PrdouctDetailsComponent,
    WishListComponent,
    SigninComponent,
    SigninAdminComponent,
    HomeAdminComponent,
    UsersAdminComponent,
    NewProductComponent,
    NewUserComponent,
    EditUserComponent,
    EditProductComponent,
    ProductsListComponent,
    CheckoutComponent,
    ProductsHomeComponent,
    UsersHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
