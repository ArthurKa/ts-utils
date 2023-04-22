import { Union } from 'build';
import { Equal, ExpectTrue } from '@type-challenges/utils';

type A = Union<
  // ^?
  | { a: 2 }
  | { b: 2 }
>;
type True = ExpectTrue<Equal<A, { a: 2; b?: undefined } | { b: 2; a?: undefined }>>;

type B = Union<
  & { a: number }
  & (
    | { b: 1; c: string }
    | { b: 2; d: string }
    | { b: 3; d: string; e: number }
  )
>;
declare const b: B;

if (b.e !== void 0) {
  type True = ExpectTrue<Equal<typeof b, {
    a: number;
    b: 3;
    d: string;
    e: number;
    c?: undefined;
  }>>;
} else {
  type True = ExpectTrue<Equal<typeof b,
    | {
      a: number;
      b: 1;
      c: string;
      d?: undefined;
      e?: undefined;
    }
    | {
      a: number;
      b: 2;
      d: string;
      c?: undefined;
      e?: undefined;
    }
  >>;
}
if (b.d === void 0) {
  type True = ExpectTrue<Equal<typeof b, {
    a: number;
    b: 1;
    c: string;
    d?: undefined;
    e?: undefined;
  }>>;
} else {
  type True = ExpectTrue<Equal<typeof b,
    | {
      a: number;
      b: 2;
      d: string;
      c?: undefined;
      e?: undefined;
    }
    | {
      a: number;
      b: 3;
      d: string;
      e: number;
      c?: undefined;
    }
  >>;
}

interface N1 { a: string; }
interface N2 { a: number; }

type True2 = ExpectTrue<Equal<Union<N1 | N2>, N1 | N2>>;
