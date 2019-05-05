import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], criteria: string): any[] {
    if (value.length === 0) {
      return value;
    }
    value.sort((x, y) => {
      return x[criteria].localeCompare(y[criteria]);
    });
    return value;
  }

}
