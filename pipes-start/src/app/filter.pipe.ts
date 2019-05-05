import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'minimatch';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propertyName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    let resultArray = [];
    for (const item of value) {
      if (item[propertyName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
