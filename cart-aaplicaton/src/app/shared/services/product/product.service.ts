import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  modelObj:any;
  mobelSubject = new BehaviorSubject<any>(this.modelObj);
  cart = [];
  totalItems = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getProductDetails() {
    return this.http.get("https://api.myjson.com/bins/qzuzi");
  }

  provideModelValue(data:any){
    this.modelObj=data;
    this.mobelSubject.next(data);
  }

  getModel():Observable<any>{
    return this.mobelSubject.asObservable();
  }

  getCartItems(){
    return this.totalItems.asObservable();
  }

  addItemToCart(item){
    this.cart.push(item);
    this.totalItems.next(this.cart);
  }
}
