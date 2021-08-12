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
    this.input  = [1, [2, [3, 4]], 5];
    this.expectedResult = [1, 2, 3, 4, 5];
    this.result = [];
  }

  // First implementation
  flatten(array: Array<any>): Array<any> {
    this.result = array.reduce((a, b, index) => {
      // The first time, we need to transform a to be an array
      if (index === 1) {
        a = [a];
      }
      // Each new item, needs to be validate to know if it is an array
      if (Array.isArray(b)) {
        a = a.concat(b);
      } else {
        a.push(b);
      }
      return a;
    });
    this.isCorrect = _.isEqual(this.result, this.expectedResult);
    return this.result;
  }

}
