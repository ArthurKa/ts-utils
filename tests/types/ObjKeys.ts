/* eslint-disable import/no-unresolved */

import { ObjKeys } from 'build';

// $ExpectType string[]
ObjKeys(2);
// $ExpectType string[]
ObjKeys({ ad: 2, 33: 3 });
// $ExpectType string[]
ObjKeys(['a', 'b', 'c']);
// $ExpectType string[]
ObjKeys({ 0: 'a', 1: 'b', 2: 'c' });
// $ExpectType string[]
ObjKeys({ 0: 'a', 1: 'b', a: 'c' });
// $ExpectType string[]
ObjKeys({ 100: 'a', 2: 'b', 7: 'c' });
// $ExpectType string[]
ObjKeys(true);
// $ExpectType string[]
ObjKeys(Symbol('s'));
// $ExpectType string[]
ObjKeys('asd');
// $ExpectType string[]
ObjKeys(true);
// $ExpectType string[]
ObjKeys(false);

const a: { a?: 2 } = {};
// $ExpectType string[]
ObjKeys(a);

declare let ann: any;
// $ExpectType string[]
ObjKeys(ann);

// $ExpectError
ObjKeys();
// $ExpectType never
ObjKeys(null);
// $ExpectType never
ObjKeys(undefined);

// $ExpectType "ad"[]
ObjKeys({ ad: 2 });
// $ExpectType ("c" | "asd" | "qwerty")[]
ObjKeys({ qwerty: 1, asd: 2, c: 3 });
