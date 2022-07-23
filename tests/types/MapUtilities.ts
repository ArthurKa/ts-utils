/* eslint-disable import/no-unresolved */

import { Entries, KeyOf, ObjEntries, ObjKeys, ObjValues, ValueOf } from 'build';

type A = Map<'asd' | 'sdf', 2 | 3 | 4>;
type B = Record<'asd' | 'sdf', 2 | 3 | 4>;
declare const a: A;
declare const b: B;

// $ExpectType ("asd" | "sdf")[]
const aKeys = ObjKeys(a);
// $ExpectType ("asd" | "sdf")[]
const bKeys = ObjKeys(b);

// $ExpectType (2 | 3 | 4)[]
const aValues = ObjValues(a);
// $ExpectType (2 | 3 | 4)[]
const bValues = ObjValues(b);

// $ExpectType Entries<A>
const aEntries = ObjEntries(a);
// $ExpectType Entries<B>
const bEntries = ObjEntries(b);

// $ExpectType "asd" | "sdf"
type KA = KeyOf<A>;
// $ExpectType "asd" | "sdf"
type KB = KeyOf<B>;

// $ExpectType 2 | 3 | 4
type VA = ValueOf<A>;
// $ExpectType 2 | 3 | 4
type VB = ValueOf<B>;

// $ExpectType ["asd", 2 | 3 | 4] | ["sdf", 2 | 3 | 4]
type EA = Entries<A>[number];
// $ExpectType ["asd", 2 | 3 | 4] | ["sdf", 2 | 3 | 4]
type EB = Entries<B>[number];
