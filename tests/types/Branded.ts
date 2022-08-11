/* eslint-disable @typescript-eslint/no-unused-vars */
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

// @ts-expect-error
withNatural(integer);
withNatural(natural);
withNatural(naturalLess10);
withNatural(naturalLess10Not3);

// @ts-expect-error
withNaturalLess10(integer);
// @ts-expect-error
withNaturalLess10(natural);
withNaturalLess10(naturalLess10);
withNaturalLess10(naturalLess10Not3);

// @ts-expect-error
withNaturalLess10Not3(integer);
// @ts-expect-error
withNaturalLess10Not3(natural);
// @ts-expect-error
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

// WITNESS type
// $ExpectType number
type N = BA[WITNESS];

// Arrays of strings
type Ab = Branded<number, ['A', 'b']>;
type C = Branded<number, 'C'>;
type CAD = Branded<C, ['A', 'D']>;
type AbS = Branded<Ab, 'S'>;
type AbSqW = Branded<AbS, ['q', 'W']>;
type AbSqW222 = Branded<AbSqW, ['1', 'a']>;

// Mixed with other brands
type stringCAD = Branded<string, CAD>;
type AbCD = Branded<Ab, CAD>;
type AbCDbS = Branded<Ab, [CAD, AbS]>;
type AbWCDbS = Branded<Ab, ['W', CAD, AbS]>;
