import { Brand, IsBrand } from 'dist';

type BrandedString = Brand<string, ''>;

// $ExpectType true
type A1 = IsBrand<BrandedString>;
//   ^?

// $ExpectType false
type A2 = IsBrand<string>;
//   ^?

// $ExpectType false
type A3 = IsBrand<any>;
//   ^?

// $ExpectType false
type A4 = IsBrand<unknown>;
//   ^?
