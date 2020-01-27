import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PorductFetchService {
  modelObj:any;
  mobelSubject = new BehaviorSubject<any>(this.modelObj);
  constructor(private http: HttpClient) { 
   

  }
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
}
