/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { IsAnyOrUnknown } from 'build';

type result = [
  // $ExpectType true
  IsAnyOrUnknown<any>,
  // $ExpectType true
  IsAnyOrUnknown<unknown>,

  // $ExpectType false
  IsAnyOrUnknown<number>,
  // $ExpectType false
  IsAnyOrUnknown<never>,
  // $ExpectType false
  IsAnyOrUnknown<1 | 2>,
  // $ExpectType false
  IsAnyOrUnknown<string>,
  // $ExpectType false
  IsAnyOrUnknown<'string' | 2 | true>,
  // $ExpectType false
  IsAnyOrUnknown<boolean>,
];
