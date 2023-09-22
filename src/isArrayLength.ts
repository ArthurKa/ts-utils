import { N } from 'ts-toolbelt';
import type { IsNegative, IsPositive } from '.';

type MAX_DEPTH = 50;

type More<TArr extends any[], TLen extends number> = (
  N.Greater<TLen, MAX_DEPTH> extends 0
    ? TLen extends 0
      ? [TArr[number], ...TArr[number][]]
      : [TArr[number], ...More<TArr, N.Sub<TLen, 1>>]
    : TArr
);
type Less<TArr extends any[], TLen extends number> = (
  N.Greater<TLen, MAX_DEPTH> extends 0
    ? TLen extends 1
      ? []
      : [TArr[number], ...Less<TArr, N.Sub<TLen, 1>>] | Less<TArr, N.Sub<TLen, 1>>
    : TArr
);
type MoreOrEqual<TArr extends any[], TLen extends number> = (
  N.Greater<TLen, MAX_DEPTH> extends 0
    ? TLen extends 1
      ? [TArr[number], ...TArr[number][]]
      : [TArr[number], ...MoreOrEqual<TArr, N.Sub<TLen, 1>>]
    : TArr
);
type LessOrEqual<TArr extends any[], TLen extends number> = (
  N.Greater<TLen, MAX_DEPTH> extends 0
    ? TLen extends 0
      ? []
      : [TArr[number], ...LessOrEqual<TArr, N.Sub<TLen, 1>>] | LessOrEqual<TArr, N.Sub<TLen, 1>>
    : TArr
);
type Equal<TArr extends any[], TLen extends number> = (
  number extends TLen
    ? TArr
    : N.Greater<TLen, MAX_DEPTH> extends 0
      ? TLen extends 0
        ? []
        : [TArr[number], ...Equal<TArr, N.Sub<TLen, 1>>]
      : TArr & { length: TLen }
);

export const isArrayLength = <
  TArr extends any[],
  TOp extends '>' | '<' | '>=' | '<=' | '===',
  TLen extends (
    IsNegative<TLen> extends true
      ? never
      : TOp extends '<' | '>='
        ? IsPositive<TLen> extends true
          ? TArr['length']
          : never
        : TArr['length']
  ),
// @ts-expect-error
>(arr: TArr, op: TOp, length: TLen): arr is (
  TOp extends '>'
    ? More<TArr, TLen>
    : TOp extends '<'
      ? Less<TArr, TLen>
      : TOp extends '>='
        ? MoreOrEqual<TArr, TLen>
        : TOp extends '<='
          ? LessOrEqual<TArr, TLen>
          : Equal<TArr, TLen>
) => {
  switch(op) {
    case '>':
      return arr.length > length;
    case '<':
      return arr.length < length;
    case '>=':
      return arr.length >= length;
    case '<=':
      return arr.length <= length;
    case '===':
      return arr.length === length;
    default:
      ((e: never) => e)(op);
      throw new Error('Something went wrong');
  }
};
