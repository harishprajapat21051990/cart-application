import { Component, OnInit } from '@angular/core';
import {PorductFetchService} from '../porduct-fetch.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productDetails: any = [];
  constructor(private prodService:PorductFetchService) { }

  ngOnInit() {
    this.prodService.getProductDetails()
    .subscribe(data => {
      console.log(data);
      this.productDetails = data;
    });
    
  }
  optionSelected(val:boolean){
    if(val){
      this.prodService.provideModelValue({title:'sort',content:'value1'});
    }else{
      this.prodService.provideModelValue({title:'filter',content:'value2'});
    }
  }
}
