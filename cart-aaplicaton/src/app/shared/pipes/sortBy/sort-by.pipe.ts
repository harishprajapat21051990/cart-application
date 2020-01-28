import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SortBy'
})
export class SortByPipe implements PipeTransform {
  transform(array: any, keyName: string, orderBy:boolean, minValue: number, maxValue: number): any[] {
    let filteredArray = [];
    if (!Array.isArray(array)) {
      return;
    }
    if(minValue && maxValue){
      filteredArray = array.filter((item) => {
        if((item.price >= minValue) && (item.price <= maxValue)){
          return item;
        }
      });
    } 
    if(keyName && orderBy) {
      filteredArray.sort((a: any, b: any) => {
        if(orderBy){
          if (a[keyName] < b[keyName]) {
            return -1;
          } else if (a[keyName] > b[keyName]) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (a[keyName] >b[keyName]) {
            return -1;
          } else if (a[keyName] < b[keyName]) {
            return 1;
          } else {
            return 0;
          } 
        }
      });
    }    
    return filteredArray.length ? filteredArray : array;
  }
}
