import { Unionize } from 'dist';
import { Equal, ExpectTrue } from '@type-challenges/utils';

type True1 = ExpectTrue<Equal<Unionize<{ a: 1; b: 2 }>, { a: 1 } | { b: 2 }>>;
type True2 = ExpectTrue<Equal<Unionize<{ a: 1; b: 2 | 3 }>, { a: 1 } | { b: 2 | 3 }>>;
