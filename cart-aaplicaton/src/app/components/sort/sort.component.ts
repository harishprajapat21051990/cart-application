import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent{

  keyName: String = 'Price';
  @Output() sortItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sortItemBy() {
  	console.log(this.keyName);
    this.sortItem.emit(this.keyName);
  }

}
