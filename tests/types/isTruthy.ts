import { isTruthy } from 'dist';

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

const arr3 = [
  0,
  -0,
  +0,
  3,
  null,
  undefined,
  document.all,
];

// $ExpectType number[]
const t3 = arr3.filter(isTruthy);
