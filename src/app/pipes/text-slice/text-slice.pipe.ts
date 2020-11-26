import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlice'
})
export class TextSlicePipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if (value.length <= 20) {
      return value;
    }
    const slicedValue = value.slice(args[0], args[1]);
    return `${slicedValue}...`;
  }
}
