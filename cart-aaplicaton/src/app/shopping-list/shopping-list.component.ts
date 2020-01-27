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

  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProductDetails().subscribe(data => {
      this.productDetails = data;
    });  
  }

  getSortByKey(keyname){
    console.log("===>",keyname);
    this.keyName = keyname;
  }

  optionSelected(val:boolean){
    if(val){
      this.prodService.provideModelValue({title:'sort',content:'value1'});
    }else{
      this.prodService.provideModelValue({title:'filter',content:'value2'});
    }
  }
}
