/* eslint-disable import/no-unresolved */

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
  document.all,
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
  document.all,
];

// $ExpectType number[]
const t2 = arr2.filter(isTruthy);
