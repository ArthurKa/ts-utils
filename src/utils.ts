import type { IsAnyOrUnknown } from './frontend';

export type ReplaceAllAnyWithNever<T extends unknown[]> = (
  T extends [infer U, ...infer Rest]
    ? [IsAnyOrUnknown<U> extends true ? never : U, ...ReplaceAllAnyWithNever<Rest>]
    : []
);
