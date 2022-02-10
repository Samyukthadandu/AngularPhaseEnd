import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcommerceGroceryApp';

  constructor(private db:AngularFireDatabase ){}
  ngOnInit(){
   // this.db.list('/Products').valueChanges().subscribe((Products)=>console.log(Products));
  }
}
