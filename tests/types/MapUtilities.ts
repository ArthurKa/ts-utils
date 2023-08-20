import { Entries, KeyOf, ObjEntries, ObjKeys, ObjValues, ValueOf } from 'dist';

type A = Map<'asd' | 'sdf', number>;
type B = Record<'asd' | 'sdf', number>;
declare const a: A;
declare const b: B;

// $ExpectType ("asd" | "sdf")[]
const aKeys = ObjKeys(a);
// $ExpectType ("asd" | "sdf")[]
const bKeys = ObjKeys(b);

// $ExpectType number[]
const aValues = ObjValues(a);
// $ExpectType number[]
const bValues = ObjValues(b);

// $ExpectType Entries<A>
const aEntries = ObjEntries(a);
// $ExpectType Entries<B>
const bEntries = ObjEntries(b);

// $ExpectType "asd" | "sdf"
type KA = KeyOf<A>;
// $ExpectType "asd" | "sdf"
type KB = KeyOf<B>;

// $ExpectType number
type VA = ValueOf<A>;
// $ExpectType number
type VB = ValueOf<B>;

// $ExpectType ["asd", number] | ["sdf", number]
type EA = Entries<A>[number];
// $ExpectType ["asd", number] | ["sdf", number]
type EB = Entries<B>[number];
