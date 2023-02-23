/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { isTruthy } from 'build';

const arr1 = [
  false,
  0,
  -0,
  +0,
  2,
  0n,
  null,
  undefined,
  '',
] as const;

// $ExpectType 2[]
const t1 = arr1.filter(isTruthy);

const arr2 = [
  0,
  -0,
  +0,
  2,
  null,
  undefined,
];

// $ExpectType number[]
const t2 = arr2.filter(isTruthy);
