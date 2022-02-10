import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

 cartItems:any=[
  
 ];
 cartTotal=0;

  constructor(
    private msg:MessengerService,
    private cartService : CartService
    ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }    
  

calcCartTotal() {
  this.cartTotal = 0
  this.cartItems.forEach((item: { qty: number; price: number; }) => {
    this.cartTotal += (item.qty * item.price)
  })
}
    
  }
    
