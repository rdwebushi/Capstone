import { NgModule } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { CartComponent } from './upage/cart/cart.component';
import { CheckoutComponent } from './upage/checkout/checkout.component';
import { UpageComponent } from './upage/upage.component';
import { WishlistComponent } from './upage/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'contact_us',component:ContactUsComponent},

  {path:'about-us',component:AboutUsComponent},

  { path:'admin',component:AdminComponent},
  { path:'login', component:LoginComponent },
  { path:'signin',component:SignInComponent },
  { path:'registration', component:RegistrationComponent },

  { path:'dashboard', component:DashboardComponent},
  { path:'upage',component:UpageComponent},
  { path:'cart', component:CartComponent},
  { path:'wishlist', component:WishlistComponent},
  { path:'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
