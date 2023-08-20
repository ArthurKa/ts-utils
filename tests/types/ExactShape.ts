import { Branded, ExactShape, IsExactShape, LoopOver } from 'dist';
import { ExpectExtends } from '@type-challenges/utils';

interface Int1 {
  a: number;
}
interface Int2 {
  asd: {
    a: number;
  };
}

type Trues = [
  // ^?
  IsExactShape<{ a: number }, { a: 2 }>,
  IsExactShape<{ a: number | string }, { a: 'asd' }>,
  IsExactShape<Branded<{ a: 2 }, 'asd'>, Branded<{ a: 2 }, 'asd'>>,
  IsExactShape<Branded<{ a: 2 }, ['asd', '2']>, Branded<{ a: 2 }, ['asd', '2']>>,
  IsExactShape<{ a: { b: number } }, { a: { b: 3 } }>,
  IsExactShape<number[], [2, 3]>,
  IsExactShape<{ a: { b: [2, 3] } }, { a: { b: [2, 3] } }>,
  IsExactShape<{ a: { b: number[] } }, { a: { b: number[] } }>,
  IsExactShape<{ a: { b: [2] } }, { a: { b: [2] } }>,
  IsExactShape<{ a: { b: number[] } }, { a: { b: [2, 3] } }>,
  IsExactShape<{ a: { b: Array<{ a: number }> } }, { a: { b: [{ a: 2 }] } }>,
];
// $ExpectType true
type AreTrues = ExpectExtends<Trues, [true, true, true, true, true, true, true, true, true, true, true]>;
//    ^?

type Falses = [
  // ^?
  IsExactShape<Branded<{ a: 2 }, 'asd'>, Branded<{ a: 2 }, ['asd', '2']>>,
  IsExactShape<{ a: number }, { a: 2; b: 3 }>,
  IsExactShape<LoopOver<Int1>, { a: 2; b: 3 }>,
  IsExactShape<LoopOver<Int2>, { asd: { a: 2; b: 2 } }>,
  IsExactShape<{ a: 2 }, { a: 2; b: 2 }>,
  IsExactShape<number[], [2, 3] & { a: 2 }>,
  IsExactShape<{ a: { b: number } }, { a: { b: 3; c: 2 } }>,
  IsExactShape<{ a: { b: number[] } }, { a: { b: Array<3>; c: 2 } }>,
  IsExactShape<{ a: { b: number[] } }, { a: { b: [2, 3] & { a: 2 } } }>,
  IsExactShape<{ a: { b: Array<{ a: 2 }> } }, { a: { b: [{ a: 2; b: 3 }] } }>,
];
// $ExpectType true
type AreFalses = ExpectExtends<Falses, [false, false, false, false, false, false, false, false, false, false]>;
//    ^?

type ERRORS = [
  // @ts-expect-error
  IsExactShape<string, string>,
  // @ts-expect-error
  IsExactShape<string, string & number>,
  // @ts-expect-error
  IsExactShape<string | number, number>,
  // @ts-expect-error
  IsExactShape<Branded<string, 'asd'>, Branded<string, 'asd'>>,
];

interface SomeType {
  prop: string;
}

function takeSomeTypeOnly<T extends SomeType>(x: ExactShape<LoopOver<SomeType>, T>): ExactShape<LoopOver<SomeType>, T> {
  return x;
}

const x = { prop: 'a' };
takeSomeTypeOnly(x);

const x2: { prop: 'a' } = { prop: 'a' };
takeSomeTypeOnly(x2);

const y = { prop: 'asd', additionalProp: 'x' };
// @ts-expect-error
takeSomeTypeOnly(y);
const y2 = { additionalProp: 'a' };
// @ts-expect-error
takeSomeTypeOnly(y2);
const y3 = { prop: 123 };
// @ts-expect-error
takeSomeTypeOnly(y3);
const y4 = { prop: 'asd', additionalProp: 'x' as never };
// @ts-expect-error
takeSomeTypeOnly(y4);
