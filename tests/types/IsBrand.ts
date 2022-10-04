/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { IsBrand, Brand } from 'build';

type BrandedString = Brand<string, ''>;

// $ExpectType true
type A1 = IsBrand<BrandedString>;
//   ^?

// $ExpectType false
type A2 = IsBrand<string>;
//   ^?

// $ExpectType false
type A3 = IsBrand<any>;
//   ^?

// $ExpectType false
type A4 = IsBrand<unknown>;
//   ^?
