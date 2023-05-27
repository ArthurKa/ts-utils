import { ObjEntries, ObjFromEntries } from 'build';

// $ExpectType Record<"a", number>
ObjFromEntries(ObjEntries({ a: 2 }));

// $ExpectType Record<"b", 3>
ObjFromEntries(ObjEntries({ b: 3 as const }));

declare const obj1: Record<number, number>;
// $ExpectType Record<`${number}`, number>
ObjFromEntries(ObjEntries(obj1));

declare const obj2: Record<1 | 3, number>;
// $ExpectType Record<"1" | "3", number>
ObjFromEntries(ObjEntries(obj2));
