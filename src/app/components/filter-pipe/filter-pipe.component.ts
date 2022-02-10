import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {

filteredString:string='';
productList: Product[] =[];
wishlist: number[] = [];

  constructor(private productservice : ProductService,
    private wishlistService: WishlistService) { }

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
