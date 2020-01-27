import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product/product.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  
  keyName: String;
  productDetails: any = [];
  asc:boolean=true;

  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProductDetails().subscribe(data => {
      this.productDetails = data;
      this.getSortByKey({keyName: 'price', asc: false});
    });  
  }

  
  getSortByKey(objVal:any) {
    this.keyName = objVal.keyName;
    this.asc = objVal.asc;
  }

}
