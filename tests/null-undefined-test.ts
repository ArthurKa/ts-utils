import assert from 'assert';
import {
  getNotNull,
  getNotNullSimple,
  getNotUndefined,
  getNotUndefinedSimple,
  isNull,
  isNullish,
  isNullishSimple,
  isNullSimple,
  isUndefined,
  isUndefinedSimple,
} from '../dist';

let testNumber = 0;
describe('null-undefined:', () => {
  const a1 = ((e: null | undefined | 123) => e)(null);
  const a2 = ((e: null | undefined | 123) => e)(undefined);
  const a3 = ((e: null | undefined | 123) => e)(123);

  it(String(++testNumber), () => assert.deepEqual(isNullSimple(a1), true));
  it(String(++testNumber), () => assert.deepEqual(isNullSimple(a2), false));
  it(String(++testNumber), () => assert.deepEqual(isNullSimple(a3), false));

  it(String(++testNumber), () => assert.deepEqual(isUndefinedSimple(a1), false));
  it(String(++testNumber), () => assert.deepEqual(isUndefinedSimple(a2), true));
  it(String(++testNumber), () => assert.deepEqual(isUndefinedSimple(a3), false));

  it(String(++testNumber), () => assert.deepEqual(isNullishSimple(a1), true));
  it(String(++testNumber), () => assert.deepEqual(isNullishSimple(a2), true));
  it(String(++testNumber), () => assert.deepEqual(isNullishSimple(a3), false));

  it(String(++testNumber), () => assert.deepEqual(isNull(a1), true));
  it(String(++testNumber), () => assert.deepEqual(isNull(a2), false));
  it(String(++testNumber), () => assert.deepEqual(isNull(a3), false));

  it(String(++testNumber), () => assert.deepEqual(isUndefined(a1), false));
  it(String(++testNumber), () => assert.deepEqual(isUndefined(a2), true));
  it(String(++testNumber), () => assert.deepEqual(isUndefined(a3), false));

  it(String(++testNumber), () => assert.deepEqual(isNullish(a1), true));
  it(String(++testNumber), () => assert.deepEqual(isNullish(a2), true));
  it(String(++testNumber), () => assert.deepEqual(isNullish(a3), false));

  it(String(++testNumber), () => assert.throws(() => getNotNullSimple(a1, '')));
  it(String(++testNumber), () => assert.deepEqual(getNotNullSimple(a2, ''), a2));
  it(String(++testNumber), () => assert.deepEqual(getNotNullSimple(a3, ''), a3));

  it(String(++testNumber), () => assert.deepEqual(getNotUndefinedSimple(a1, ''), a1));
  it(String(++testNumber), () => assert.throws(() => getNotUndefinedSimple(a2, '')));
  it(String(++testNumber), () => assert.deepEqual(getNotUndefinedSimple(a3, ''), a3));

  it(String(++testNumber), () => assert.throws(() => getNotNull(a1, '')));
  it(String(++testNumber), () => assert.deepEqual(getNotNull(a2, ''), a2));
  it(String(++testNumber), () => assert.deepEqual(getNotNull(a3, ''), a3));

  it(String(++testNumber), () => assert.deepEqual(getNotUndefined(a1, ''), a1));
  it(String(++testNumber), () => assert.throws(() => getNotUndefined(a2, '')));
  it(String(++testNumber), () => assert.deepEqual(getNotUndefined(a3, ''), a3));
});
