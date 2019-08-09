import { filter, reverse } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value) {
    if (!value) return;

    value = filter(value, ['dismissed', false])

    return reverse(value)
  }
}
