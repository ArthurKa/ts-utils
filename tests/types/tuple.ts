import { tuple } from 'dist';

// $ExpectType [2, number]
const a1 = tuple(2 as const, 3);
//    ^?

// $ExpectType []
const a2 = tuple();
//    ^?

// $ExpectType [number]
const a3 = tuple(123);

// $ExpectType [number, string, boolean, number]
const a4 = tuple(123, '', false, 2);
//    ^?
