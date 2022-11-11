import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { UpageComponent } from './upage/upage.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './upage/cart/cart.component';
import { WishlistComponent } from './upage/wishlist/wishlist.component';
import { CheckoutComponent } from './upage/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    RegistrationComponent,
    SignInComponent,
    UpageComponent,
    AdminComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
