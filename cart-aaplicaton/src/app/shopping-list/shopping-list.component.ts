import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product/product.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  
  productDetails: any = [];
  filters: any = {
    name: null,
    orderBy: false,
    price: {
      min: 0,
      max: 0
    }
  };
  asc:boolean=true;
  
  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.prodService.getProductDetails().subscribe(prods => {
      this.productDetails = prods;
      this.toggleSort({name: 'price', orderBy: false});
    });  
  }

  openModal(){
    this.prodService.setModal('Filter');
  }

  toggleSort(obj:any) {
    this.filters.name = obj.name;
    this.filters.orderBy = obj.orderBy;
    this.filters.price.min = obj.min;
    this.filters.price.max = obj.max;
  }
}