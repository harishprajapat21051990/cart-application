import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent{

  @Output() sortVal = new EventEmitter<{keyName:string,asc:boolean}>();

  constructor() { }

  ngOnInit() {
  }

  optionSelected(keyName:string,asc:boolean) {
    this.sortVal.emit({keyName,asc});
  }

}