import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Product} from 'src/app/models/product';
import { Observable } from 'rxjs';
import {productsUrl} from 'src/app/config/api';

//const Url = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

/*products:Product[]=[
  new Product(1,'Product1','Product1 Description',100),
  new Product(2,'Product2','Product2 Description',150),
  new Product(3,'Product3','Product3 Description',120),
  new Product(4,'Product4','Product4 Description',160),
  new Product(5,'Product5','Product5 Description',75),
  new Product(6,'Product6','Product6 Description',199),
  new Product(7,'Product7','Product7 Description',95),
]*/
 //Url = 'http://localhost:3000/products';
  constructor(private http:HttpClient) { }
  
  getProducts():Observable<Product[]>{
    //TODO:Populate products from an API and return an observable
    return this.http.get<Product[]>(productsUrl);
  }

  deleteProduct(id:any){
    return this.http.delete(productsUrl+id);
  }
  saveProductData(data:any){
   console.log(data);
   return this.http.post(productsUrl, data);
  }
}
