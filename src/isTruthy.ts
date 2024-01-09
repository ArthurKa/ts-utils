import type { ReplaceAllAnyWithNever } from './utils';

type Falsies = [0, 0n, '', false, null, undefined, HTMLAllCollection];

type PreserveAfterExtendsForBuild<T> = T extends ReplaceAllAnyWithNever<Falsies>[number] ? T : never;

export const isTruthy = <T>(e: T): e is Exclude<T, PreserveAfterExtendsForBuild<T>> => (
  Boolean(e)
);
