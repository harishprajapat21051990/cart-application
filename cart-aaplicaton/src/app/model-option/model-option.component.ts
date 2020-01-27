import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {ProductService} from '../shared/services/product/product.service';

@Component({
  selector: 'app-model-option',
  templateUrl: './model-option.component.html',
  styleUrls: ['./model-option.component.css']
})
export class ModelOptionComponent implements OnInit {
 
  model : string;
  sortObj:any={};
  @Input() data:any;
  @Output() sortVal = new EventEmitter<{keyName:string,asc:boolean}>();
  
  constructor(private prodService:ProductService) { }

  ngOnInit() {
  }

  optionSelected(keyName:string,asc:boolean) {
    this.sortVal.emit({keyName,asc});
  }
}