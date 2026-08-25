import assert from 'assert';
import { literalArray } from '../dist/esm/index.js';

let testNumber = 0;
describe('literalArray:', () => {
  it(String(++testNumber), () => assert.deepEqual(literalArray([2, 3]), [2, 3]));
  it(String(++testNumber), () => assert.deepEqual(literalArray([2, '3', 45]), [2, '3', 45]));
  it(String(++testNumber), () => assert.deepEqual(literalArray([]), []));
});
