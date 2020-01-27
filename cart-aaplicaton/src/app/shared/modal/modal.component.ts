import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {ProductService} from '../services/product/product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 
 filters= {
  name: null,
  orderBy: false,
  price: {
    min: 0,
    max: 0
  }
 };
  @Output() sortItem = new EventEmitter<{name:string, orderBy:boolean, minValue:number, maxValue:number}>();
  
  constructor(private prodService:ProductService) { }

  ngOnInit() {
  }

  sortFilter(name:string, orderBy:boolean, minValue:number, maxValue:number) {
    this.sortItem.emit({name, orderBy, minValue, maxValue});
  }

  getMinMaxPrice(minValue:number, maxValue:number){
    console.log(minValue, maxValue)
  }  
}