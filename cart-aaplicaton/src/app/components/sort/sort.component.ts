import { Component, EventEmitter, Output } from '@angular/core';
import {ProductService} from '../../shared/services/product/product.service';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent{

  @Output() sortVal = new EventEmitter<{keyName:string,asc:boolean}>();

  constructor(private prodServ:ProductService) { }

  ngOnInit() {
  }

  optionSelected(keyName:string,asc:boolean) {
    this.sortVal.emit({keyName,asc});
  }
  sendBtnVal(btnVal:string){
    this.prodServ.getModel('sort');
  }

  activeSortLabel(event){
    let elements = document.querySelectorAll(".sort-filter");
    elements.forEach(function(elem) {
      elem.classList.remove("active-filter");
    });
    event.target.classList.add("active-filter");
  }
}
