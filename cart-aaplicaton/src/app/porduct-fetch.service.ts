import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PorductFetchService {

  constructor(private http: HttpClient) { }
  getProductDetails() {
    return this.http.get("https://api.myjson.com/bins/qzuzi");
  }
}
