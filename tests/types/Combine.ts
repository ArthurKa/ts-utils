import { Combine } from 'build';

interface A1 {
  a: boolean[];
  b: string[];
}
interface A2 {
  a: number;
  b: 2;
}

declare const data: Combine<A1, A2, 'a'>;

// $ExpectType number
const a = data.a;
//             ^?

// $ExpectType string[]
const b = data.b;
//             ^?
