import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private productservice : ProductService) { }

  addProduct = new FormGroup({
   name: new FormControl(),
   description: new FormControl(),
   imageUrl: new FormControl(),
   price: new FormControl()
   } );

  ngOnInit(): void {
  }

  saveData(){
   this.productservice.saveProductData(this.addProduct.value).subscribe((result)=>{
     console.log(result);
   });
  }

}
