import assert from 'assert';
import { unionObject } from '../dist';

let testNumber = 0;
describe('unionObject:', () => {
  it(String(++testNumber), () => assert.deepEqual(unionObject(2, 3), { 2: 3 }));
  it(String(++testNumber), () => assert.deepEqual(unionObject('2', 3), { 2: 3 }));
  it(String(++testNumber), () => assert.deepEqual(unionObject('asd', '123'), { asd: '123' }));
});
