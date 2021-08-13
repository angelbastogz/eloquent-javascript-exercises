import {Component} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-flattening',
  templateUrl: './flattening.component.html',
  styleUrls: ['./flattening.component.scss']
})
export class FlatteningComponent {
  panelOpenState = false;
  // Data to test
  input: Array<any>;
  expectedResult: Array<any>;
  result: Array<any>;
  isCorrect: boolean | undefined;

  constructor() {
    this.input  = [1, [2, [3, [4]]], 5, [6, 7]];
    this.expectedResult = [1, 2, 3, 4, 5, 6, 7];
    this.result = [];
  }

  // First implementation
  flatten(array: Array<any>): Array<any> {
    this.result = this.flattenArray(array);
    this.isCorrect = _.isEqual(this.result, this.expectedResult);
    return this.result;
  }

  flattenArray(array: Array<any>): Array<any> {
    return array.reduce((a, b, index) => {
      if (index == 1) {
        a = [a];
      }
      if (Array.isArray(b)) {
        a = a.concat(this.flattenArray(b));
      } else {
        a.push(b);
      }
      return a;
    });
  }

}
