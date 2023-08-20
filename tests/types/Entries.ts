import { Entries } from 'dist';

// $ExpectType ["asd", 123]
type A1 = Entries<{ asd?: 123 }>[number];
// $ExpectType ["asd", 123 | undefined]
type A2 = Entries<{ asd?: 123 | undefined }>[number];
// $ExpectType ["asd", 123]
type A3 = Entries<{ asd: 123 }>[number];
// $ExpectType ["asd", 123 | undefined]
type A4 = Entries<{ asd: 123 | undefined }>[number];
// $ExpectType ["1", 3] | ["2", 4]
type A5 = Entries<{ '1': 3; '2': 4 }>[number];
// $ExpectType [`${number}`, number]
type A6 = Entries<Record<number, number>>[number];
// $ExpectType [number, number]
type A7 = Entries<Map<number, number>>[number];
