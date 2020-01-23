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
      // for (const d of (data as any)) {
      //   this.smartphone.push({
      //     name: d.name,
      //     price: d.price
      //   });
      console.log(data);
      this.productDetails = data;
    });
  }

}
