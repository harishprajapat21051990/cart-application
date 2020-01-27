import { Component, OnInit,Input } from '@angular/core';
import { Observable } from "rxjs";
import {ProductService} from '../shared/services/product/product.service';

@Component({
  selector: 'app-model-option',
  templateUrl: './model-option.component.html',
  styleUrls: ['./model-option.component.css']
})
export class ModelOptionComponent implements OnInit {
 
  model : Observable<any>;
  @Input() data:any;
  constructor(private prodService:ProductService) {
    this.model = this.prodService.getModel();
   }

  ngOnInit() {
  }
  ngOnChanges() {
    this.model = this.prodService.getModel();
  }

}
