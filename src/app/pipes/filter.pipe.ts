import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string, films: any): any {
  
    if(!value || value.length === 0 || !filterString) {
      return value
    }
    return films.filter(el => el[propName].toLowerCase().includes(filterString))
  }

}
