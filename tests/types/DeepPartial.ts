import { Brand, DeepPartial } from 'dist';

// $ExpectType { asd?: number; }
type A1 = DeepPartial<{ asd: number }>;

// $ExpectType { a?: number; b?: { c?: string; }; }
type A2 = DeepPartial<{ a: number; b: { c: string } }>;

// @ts-expect-error
type A3 = DeepPartial<number>;

// $ExpectType number
type A4 = DeepPartial<number, true>;

// $ExpectType { a?: Date; }
type A5 = DeepPartial<{ a: Date }>;

// $ExpectType { a?: Blob; }
type A6 = DeepPartial<{ a: Blob }>;

// $ExpectType { a?: File; }
type A7 = DeepPartial<{ a: File }>;

// $ExpectType { a?: FileList; }
type A8 = DeepPartial<{ a: FileList }>;

// $ExpectType { arr?: number[]; }
type A9 = DeepPartial<{ arr: number[] }>;

// $ExpectType { arr?: { a?: 123; }[]; }
type A10 = DeepPartial<{ arr: Array<{ a: 123 }> }>;

// $ExpectType { brand?: number & { __brand: true; }; }
type A11 = DeepPartial<{ brand: number & { __brand: true } }>;

type Integer = Brand<number, 'Integer'>;
// $ExpectType { brand?: Integer; }
type A12 = DeepPartial<{ brand: Integer }>;

type Obj = Brand<{ asd: 123 }, 'Obj'>;
// $ExpectType { obj?: Obj; }
type A13 = DeepPartial<{ obj: Obj }>;
