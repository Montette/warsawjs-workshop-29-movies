import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
  
    if(value === null || value.length === 0 || !filterString) {
      return value
    }
    return value.filter(el => el[propName].toLowerCase().includes(filterString))
  }

}
