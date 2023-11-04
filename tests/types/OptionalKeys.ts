import { OptionalKeys } from 'dist';
import { Equal, ExpectTrue } from '@type-challenges/utils';

type Result1 = OptionalKeys<{
  // ^?
  a: string;
}>;
type Test1 = ExpectTrue<Equal<Result1, never>>;

type Result2 = OptionalKeys<{
  // ^?
  a?: string;
  b?: string | undefined;
  c: string;
  d: string | undefined;
}>;
type Test2 = ExpectTrue<Equal<Result2, 'a' | 'b'>>;
