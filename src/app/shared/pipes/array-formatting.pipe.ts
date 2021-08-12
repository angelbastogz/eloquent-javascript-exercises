import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFormatting'
})
export class ArrayFormattingPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    if (value.length === 0) return '[]';
    return this.arrayToString(value);
  }

  arrayToString(array: Array<any>): string {
    const newString = array.reduce((a, b) => {
      if (Array.isArray(b)) {
        a += `, ${ this.arrayToString(b) }`;
      } else {
        a += `, ${ b }`;
      }
      return a;
    });
    return `[${ newString }]`;
  }

}
