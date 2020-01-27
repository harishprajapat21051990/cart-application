import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  modalType:string;
  cart = [];
  totalItems = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getProductDetails() {
    return this.http.get("https://api.myjson.com/bins/qzuzi");
  }

  setModal(modalType:string){
    this.modalType = modalType;
  }
  
  getModal(btnName:string){
    return this.modalType;
  }

  getCartCount(){
    return this.totalItems.asObservable();
  }
 
  addItemToCart(item){
    this.cart.push(item);
    this.totalItems.next(this.cart);
  }
}
