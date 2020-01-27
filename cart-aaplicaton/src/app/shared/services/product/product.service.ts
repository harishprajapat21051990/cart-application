import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  btnVal:string;
  cart = [];
  totalItems = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getProductDetails() {
    return this.http.get("https://api.myjson.com/bins/qzuzi");
  }

  getModel(btnName:string){
    this.btnVal = btnName;
  }
  
  sendModel(btnName:string){
    return this.btnVal;
  }

  getCartItems(){
    return this.totalItems.asObservable();
  }
 
  addItemToCart(item){
    this.cart.push(item);
    this.totalItems.next(this.cart);
  }
}
