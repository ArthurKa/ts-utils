import { isArrayIncludes } from 'dist';

const arr1 = ['1'];
const e1: Record<string, string | number> = {};

if (isArrayIncludes(arr1, e1)) {
  // $ExpectType Record<string, string | number> & string
  e1;
}

// @ts-expect-error
isArrayIncludes(arr1, 123);

const arr3 = [{ a: 1 }] as const;
const e2 = { a: 1 };

if (isArrayIncludes(arr3, e2)) {
  // $ExpectType { a: number; } & { readonly a: 1; }
  e2;
}

// $ExpectType boolean
const res1 = isArrayIncludes(arr3, e2);
if (res1) {
  // $ExpectType { a: number; } & { readonly a: 1; }
  e2;
}

// $ExpectType boolean
const res2 = isArrayIncludes(arr3, { a: 1 });

// $ExpectType boolean
const res3 = isArrayIncludes(arr3, 123);

if (isArrayIncludes(arr3, e1)) {
  // $ExpectType Record<string, string | number> & { readonly a: 1; }
  e1;
}
