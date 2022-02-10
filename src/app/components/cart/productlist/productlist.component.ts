import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Product[] =[];
  wishlist: number[] = [];
  searchKey:string="";

  constructor(private productservice : ProductService,
    private wishlistService: WishlistService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
    this.productservice.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }

}
