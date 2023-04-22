import { ObjEntries, ObjFromEntries } from 'build';

// $ExpectType Record<"a", number>
ObjFromEntries(ObjEntries({ a: 2 }));

// $ExpectType Record<"b", 3>
ObjFromEntries(ObjEntries({ b: 3 as const }));
