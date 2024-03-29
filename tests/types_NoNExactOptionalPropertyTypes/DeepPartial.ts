import { Brand, DeepPartial } from 'dist';

// $ExpectType { asd?: number | undefined; }
type A1 = DeepPartial<{ asd: number }>;

// $ExpectType { a?: number | undefined; b?: { c?: string | undefined; } | undefined; }
type A2 = DeepPartial<{ a: number; b: { c: string } }>;

// @ts-expect-error
type A3 = DeepPartial<number>;

// $ExpectType number
type A4 = DeepPartial<number, true>;

// $ExpectType { a?: Date | undefined; }
type A5 = DeepPartial<{ a: Date }>;

// $ExpectType { a?: Blob | undefined; }
type A6 = DeepPartial<{ a: Blob }>;

// $ExpectType { a?: File | undefined; }
type A7 = DeepPartial<{ a: File }>;

// $ExpectType { a?: FileList | undefined; }
type A8 = DeepPartial<{ a: FileList }>;

// $ExpectType { arr?: number[] | undefined; }
type A9 = DeepPartial<{ arr: number[] }>;

// $ExpectType { arr?: { a?: 123 | undefined; }[] | undefined; }
type A10 = DeepPartial<{ arr: Array<{ a: 123 }> }>;

// $ExpectType { brand?: (number & { __brand: true; }) | undefined; }
type A11 = DeepPartial<{ brand: number & { __brand: true } }>;

type Integer = Brand<number, 'Integer'>;
// $ExpectType { brand?: Integer | undefined; }
type A12 = DeepPartial<{ brand: Integer }>;

type Obj = Brand<{ asd: 123 }, 'Obj'>;
// $ExpectType { obj?: Obj | undefined; }
type A13 = DeepPartial<{ obj: Obj }>;
