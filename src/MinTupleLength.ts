import { N } from 'ts-toolbelt';

type _MinTupleLength<T extends readonly unknown[], A extends number> = (
  T extends readonly [unknown, ...infer U]
    ? _MinTupleLength<U, N.Add<A, 1>>
    : A
);
export type MinTupleLength<T extends readonly unknown[]> = _MinTupleLength<T, 0>;
