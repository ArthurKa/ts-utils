/* eslint-disable import/no-unresolved */

import { Branded, WITNESS } from 'build';

// Regular branding
type Integer = Branded<number, 'Integer'>;
type Natural = Branded<Integer, 'Natural'>;
type NaturalLess10 = Branded<Natural, 'Less10'>;
type NaturalLess10Not3 = Branded<NaturalLess10, 'Not3'>;

declare const integer: Integer;
declare const natural: Natural;
declare const naturalLess10: NaturalLess10;
declare const naturalLess10Not3: NaturalLess10Not3;

declare function withInteger(e: Integer): void;
declare function withNatural(e: Natural): void;
declare function withNaturalLess10(e: NaturalLess10): void;
declare function withNaturalLess10Not3(e: NaturalLess10Not3): void;

withInteger(integer);
withInteger(natural);
withInteger(naturalLess10);
withInteger(naturalLess10Not3);

// $ExpectError
withNatural(integer);
withNatural(natural);
withNatural(naturalLess10);
withNatural(naturalLess10Not3);

// $ExpectError
withNaturalLess10(integer);
// $ExpectError
withNaturalLess10(natural);
withNaturalLess10(naturalLess10);
withNaturalLess10(naturalLess10Not3);

// $ExpectError
withNaturalLess10Not3(integer);
// $ExpectError
withNaturalLess10Not3(natural);
// $ExpectError
withNaturalLess10Not3(naturalLess10);
withNaturalLess10Not3(naturalLess10Not3);

// Branding inheritance
type A = Branded<number, 'A'>;
type B = Branded<number, 'B'>;
type AB = Branded<A, 'B'>;
type BA = Branded<B, 'A'>;

declare function withAB(e: AB): void;
declare const ba: BA;

withAB(ba);

// Check WITNESS type
// $ExpectType number
type N = BA[WITNESS];
