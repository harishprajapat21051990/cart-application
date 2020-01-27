import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueSortBy'
})
export class ValueSortByPipe implements PipeTransform {

    transform(array: any, field: string,asc:boolean): any[] {
        if (!Array.isArray(array)) {
          return;
        }
        array.sort((a: any, b: any) => {
            if(asc){
          if (a[field] < b[field]) {
            return -1;
          } else if (a[field] > b[field]) {
            return 1;
          } else {
            return 0;
          }
        }else{
            if (a[field] >b[field]) {
                return -1;
              } else if (a[field] < b[field]) {
                return 1;
              } else {
                return 0;
              } 
        }
        });
        return array;
      }

}
