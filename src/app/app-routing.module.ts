import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CartComponent} from 'src/app/components/cart/cart.component';
import {LoginComponent} from 'src/app/components/login/login.component';
//import {RegisterComponent} from 'src/app/components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'

import { SearchComponent } from './components/search/search.component';
import { AddDeleteProductsComponent } from './components/add-delete-products/add-delete-products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ChangeAdminpwdComponent } from './components/change-adminpwd/change-adminpwd.component';
import { FilterPipeComponent } from './components/filter-pipe/filter-pipe.component';



const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: FilterPipeComponent},
  { path: 'shop', component: CartComponent },
  { path: 'veg', component: CartComponent },
  { path: 'pulses', component: CartComponent },
  { path: 'oil', component: CartComponent },
  {path:'adddelete',component:AddDeleteProductsComponent},
  {path:'addproduct',component:AddProductsComponent},
  {path:'changepwd',component:ChangeAdminpwdComponent},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
