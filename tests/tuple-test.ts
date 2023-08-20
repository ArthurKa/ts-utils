import assert from 'assert';
import { tuple } from '../dist';

let testNumber = 0;
describe('tuple:', () => {
  it(String(++testNumber), () => assert.deepEqual(tuple(2, 3), [2, 3]));
  it(String(++testNumber), () => assert.deepEqual(tuple(2, 3, 45), [2, 3, 45]));
  it(String(++testNumber), () => assert.deepEqual(tuple(), []));
});
