import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';
//import {ReactiveFormsModule} from '@angular/forms'


import { RouterModule, Routes} from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//import { MainpageComponent } from './components/mainpage/mainpage.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
//import { LoginComponent } from './components/login/login.component';
import {CartComponent} from './components/cart/cart.component';
import { FiltersComponent } from './components/cart/filters/filters.component';
import { ProductlistComponent } from './components/cart/productlist/productlist.component';
import { ShoppingcartComponent } from './components/cart/shoppingcart/shoppingcart.component';
import { CartItemComponent } from './components/cart/shoppingcart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/cart/productlist/product-item/product-item.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SharedComponent } from './components/shared/shared.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { AddDeleteProductsComponent } from './components/add-delete-products/add-delete-products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ChangeAdminpwdComponent } from './components/change-adminpwd/change-adminpwd.component';
import { FilterPipe } from './app/pipeslist/filter.pipe';
import { FilterPipeComponent } from './components/filter-pipe/filter-pipe.component';

/*const appRoutes: Routes = [
  {
     path: '',
     component: LoginComponent
  },
  {
     path: 'app-mainpage',
     component: MainpageComponent
  }
];*/




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  //  MainpageComponent,
    HeaderComponent,
    FooterComponent,
   // LoginComponent,
   CartComponent,
   FiltersComponent,
   ProductlistComponent,
   ShoppingcartComponent,
   CartItemComponent,
   ProductItemComponent,
   RegisterComponent,
   LoginComponent,
   SharedComponent,
   PageNotFoundComponent,
   SearchComponent,
  AddDeleteProductsComponent,
  AddProductsComponent,
  ChangeAdminpwdComponent,
  FilterPipe,
  FilterPipeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,   
     NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule ,  
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
