import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-delete-products',
  templateUrl: './add-delete-products.component.html',
  styleUrls: ['./add-delete-products.component.css']
})
export class AddDeleteProductsComponent implements OnInit {

  constructor(private productservice : ProductService , public rtr:Router) { }
    productData:Product[] =[];
  ngOnInit(): void {
    this.productservice.getProducts().subscribe((products) => {
      this.productData = products;
    })
  }
  deleteProduct(product_id:any){
    this.productservice.deleteProduct(product_id).subscribe( (result) => {
      console.log(result) ;
      this.ngOnInit();
    });
    }

   

  }


