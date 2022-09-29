/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { MinTupleLength } from 'build';

// $ExpectType 0
type A1 = MinTupleLength<[]>;

// $ExpectType 0
type A2 = MinTupleLength<[...string[]]>;

// $ExpectType 0
type A3 = MinTupleLength<boolean[]>;

// $ExpectType 1
type A4 = MinTupleLength<[1]>;

// $ExpectType 1
type A5 = MinTupleLength<[boolean, ...number[]]>;

// $ExpectType 2
type A6 = MinTupleLength<[string, number]>;

// $ExpectType 2
type A8 = MinTupleLength<[number, string, ...boolean[]]>;

const asd = [1, 2] as const;
// $ExpectType 2
type A7 = MinTupleLength<typeof asd>;
