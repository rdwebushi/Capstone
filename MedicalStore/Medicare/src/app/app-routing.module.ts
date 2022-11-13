import { UsersHomeComponent } from './admin/users-home/users-home.component';
import { ProductsHomeComponent } from './admin/products-home/products-home.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { UsersAdminComponent } from './admin/users-admin/users-admin.component';
import { SigninAdminComponent } from './admin/signin-admin/signin-admin.component';
import { SigninComponent } from './store/signin/signin.component';
import { WishListComponent } from './store/wish-list/wish-list.component';
import { PrdouctDetailsComponent } from './store/prdouct-details/prdouct-details.component';
import { CartComponent } from './store/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './store/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './admin/new-user/new-user.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  // main page routing
  { path: '', component: HomeComponent },
  // error 404
  { path: 'about-us', component: AboutUsComponent },
  // products routing
  { path: 'signin', component: SigninComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details/:id', component: PrdouctDetailsComponent },
  { path: 'product-details', redirectTo: '/products', pathMatch: 'full' },
  { path: 'wish-list', component: WishListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  // admin routing
  { path: 'signin-admin', component: SigninAdminComponent },
  {
    path: 'admin', canActivate: [AuthGuard], component: HomeAdminComponent, children: [
      {
        path: 'products', component: ProductsHomeComponent, children: [
          { path: '', component: ProductsListComponent },
          { path: 'new-product', component: NewProductComponent },
          { path: 'edit-product/:id', component: EditProductComponent },
        ]
      },
      {
        path: 'users', component: UsersHomeComponent, children: [
          { path: '', component: UsersAdminComponent },
          { path: 'new-user', component: NewUserComponent },
          { path: 'edit-user/:id', component: EditUserComponent },
        ]
      },
    ]
  },
    { path: '**',  redirectTo: '/' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
