import { literalArray } from 'dist';

// $ExpectType 2[]
const a1 = literalArray([2]);
//    ^?

// $ExpectType never[]
const a2 = literalArray([]);
//    ^?

// $ExpectType (2 | 1 | "3")[]
const a3 = literalArray([1, 2, '3']);
//    ^?

// $ExpectType (false | "" | 2 | 123)[]
const a4 = literalArray([123, '', false, 2]);
//    ^?
