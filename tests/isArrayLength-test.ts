import assert from 'assert';
import { isArrayLength } from '../dist';

let testNumber = 0;
describe('isArrayLength:', () => {
  {
    const op: Parameters<typeof isArrayLength>[1] = '>';
    describe(`Operation "${op}":`, () => {
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 2), false));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 1), false));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 0), true));
    });
  }
  {
    const op: Parameters<typeof isArrayLength>[1] = '<';
    describe(`Operation "${op}":`, () => {
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 3), true));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 2), true));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 1), false));
    });
  }
  {
    const op: Parameters<typeof isArrayLength>[1] = '>=';
    describe(`Operation "${op}":`, () => {
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 3), false));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 2), false));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 1), true));
    });
  }
  {
    const op: Parameters<typeof isArrayLength>[1] = '<=';
    describe(`Operation "${op}":`, () => {
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 2), true));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 1), true));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 0), false));
    });
  }
  {
    const op: Parameters<typeof isArrayLength>[1] = '===';
    describe(`Operation "${op}":`, () => {
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 2), false));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 1), true));
      it(String(++testNumber), () => assert.deepEqual(isArrayLength([2], op, 0), false));
    });
  }
});
