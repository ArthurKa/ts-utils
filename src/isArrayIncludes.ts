import type {} from '.';

class NoIntersectionError<T, U> {
  private _!: T & U;
}

export const isArrayIncludes = <
  Arr extends readonly unknown[],
  Elem extends [Elem & Arr[number]] extends [never] ? NoIntersectionError<Arr[number], Elem> : unknown,
>(arr: Arr, e: Elem): e is Elem & Arr[number] => {
  return arr.includes(e);
};
