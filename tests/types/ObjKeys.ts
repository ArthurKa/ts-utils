/* eslint-disable import/no-unresolved */

import { ObjKeys } from 'build';

// $ExpectType string[]
ObjKeys(2);
// $ExpectType ("33" | "ad")[]
ObjKeys({ ad: 2, 33: 3 });
// $ExpectType string[]
ObjKeys(['a', 'b', 'c']);
// $ExpectType ("0" | "1")[]
ObjKeys({ 0: 'a', 1: 'b' });
// $ExpectType ("a" | "0" | "1")[]
ObjKeys({ 0: 'a', 1: 'b', a: 'c' });
// $ExpectType ("2" | "7" | "100")[]
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
// $ExpectType "a"[]
ObjKeys(a);

// $ExpectType string[]
ObjKeys('ann' as any);
// $ExpectType string[]
ObjKeys('ann' as unknown);

// @ts-expect-error
ObjKeys();
// @ts-expect-error
ObjKeys(null);
// @ts-expect-error
ObjKeys(undefined);
// @ts-expect-error
ObjKeys(null as null | 2);
// @ts-expect-error
ObjKeys(undefined as undefined | 2);

// $ExpectType "ad"[]
ObjKeys({ ad: 2 });
// $ExpectType ("a" | "b" | "c")[]
ObjKeys({ a: 1, b: 2, c: 3 });

// $ExpectType string[]
ObjKeys(undefined as any as 1 | 2);
interface User {
  id: string;
  name?: string;
}
declare const user: User;
// $ExpectType (keyof User)[]
ObjKeys(user);

// $ExpectType (2 | "1")[]
ObjKeys(123 as unknown as Map<'1' | 2, string>);

// $ExpectType (1 | "2")[]
ObjKeys(new Map<1 | '2', number>([[1, 2], ['2', 2]]));
