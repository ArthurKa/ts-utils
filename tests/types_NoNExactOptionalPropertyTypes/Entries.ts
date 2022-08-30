/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */

import { Entries } from 'build';

// $ExpectType ["asd", 123 | undefined]
type A1 = Entries<{ asd?: 123 }>[number];
// $ExpectType ["asd", 123 | undefined]
type A2 = Entries<{ asd?: 123 | undefined }>[number];
// $ExpectType ["asd", 123]
type A3 = Entries<{ asd: 123 }>[number];
// $ExpectType ["asd", 123 | undefined]
type A4 = Entries<{ asd: 123 | undefined }>[number];
