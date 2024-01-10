import { isArrayLength } from 'dist';

function testMore() {
  const arr: string[] = [];
  const op: Parameters<typeof isArrayLength>[1] = '>';

  // @ts-expect-error
  if (isArrayLength(arr, op, -1)) {
    // $ExpectType never
    arr;
  }
  // @ts-expect-error
  isArrayLength(arr, op, -2);
  // @ts-expect-error
  isArrayLength(arr, op, -5);
  // @ts-expect-error
  isArrayLength(arr, op, -90);
  // @ts-expect-error
  isArrayLength(arr, op, -100);
  // @ts-expect-error
  isArrayLength(arr, op, -100500);

  if (isArrayLength(arr, op, 0)) {
    // $ExpectType [string, ...string[]]
    arr;
  }
  if (isArrayLength(arr, op, 1)) {
    // $ExpectType [string, string, ...string[]]
    arr;
    // $ExpectType number
    arr.length;
    // $ExpectType string
    arr[0];
    // $ExpectType string
    arr[1];
    // $ExpectType string | undefined
    arr[2];
  }
  if (isArrayLength(arr, op, 2)) {
    // $ExpectType [string, string, string, ...string[]]
    arr;
    // $ExpectType string
    arr[0];
    // $ExpectType string
    arr[1];
    // $ExpectType string
    arr[2];
    // $ExpectType string | undefined
    const a = arr[3];
  }
  if (isArrayLength(arr, op, 81)) {
    // $ExpectType string[]
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    // $ExpectType string[]
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    // $ExpectType string[]
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    // $ExpectType string[]
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    // $ExpectType string[]
    arr;
  }

  // #region
  if (isArrayLength(arr, op, 0)) {
    arr;
  }
  if (isArrayLength(arr, op, 1)) {
    arr;
  }
  if (isArrayLength(arr, op, 2)) {
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    arr;
  }
  if (isArrayLength(arr, op, 4)) {
    arr;
  }
  if (isArrayLength(arr, op, 5)) {
    arr;
  }
  if (isArrayLength(arr, op, 6)) {
    arr;
  }
  if (isArrayLength(arr, op, 7)) {
    arr;
  }
  if (isArrayLength(arr, op, 8)) {
    arr;
  }
  if (isArrayLength(arr, op, 9)) {
    arr;
  }
  if (isArrayLength(arr, op, 10)) {
    arr;
  }
  if (isArrayLength(arr, op, 11)) {
    arr;
  }
  if (isArrayLength(arr, op, 12)) {
    arr;
  }
  if (isArrayLength(arr, op, 13)) {
    arr;
  }
  if (isArrayLength(arr, op, 14)) {
    arr;
  }
  if (isArrayLength(arr, op, 15)) {
    arr;
  }
  if (isArrayLength(arr, op, 16)) {
    arr;
  }
  if (isArrayLength(arr, op, 17)) {
    arr;
  }
  if (isArrayLength(arr, op, 18)) {
    arr;
  }
  if (isArrayLength(arr, op, 19)) {
    arr;
  }
  if (isArrayLength(arr, op, 20)) {
    arr;
  }
  if (isArrayLength(arr, op, 21)) {
    arr;
  }
  if (isArrayLength(arr, op, 22)) {
    arr;
  }
  if (isArrayLength(arr, op, 23)) {
    arr;
  }
  if (isArrayLength(arr, op, 24)) {
    arr;
  }
  if (isArrayLength(arr, op, 25)) {
    arr;
  }
  if (isArrayLength(arr, op, 26)) {
    arr;
  }
  if (isArrayLength(arr, op, 27)) {
    arr;
  }
  if (isArrayLength(arr, op, 28)) {
    arr;
  }
  if (isArrayLength(arr, op, 29)) {
    arr;
  }
  if (isArrayLength(arr, op, 30)) {
    arr;
  }
  if (isArrayLength(arr, op, 31)) {
    arr;
  }
  if (isArrayLength(arr, op, 32)) {
    arr;
  }
  if (isArrayLength(arr, op, 33)) {
    arr;
  }
  if (isArrayLength(arr, op, 34)) {
    arr;
  }
  if (isArrayLength(arr, op, 35)) {
    arr;
  }
  if (isArrayLength(arr, op, 36)) {
    arr;
  }
  if (isArrayLength(arr, op, 37)) {
    arr;
  }
  if (isArrayLength(arr, op, 38)) {
    arr;
  }
  if (isArrayLength(arr, op, 39)) {
    arr;
  }
  if (isArrayLength(arr, op, 40)) {
    arr;
  }
  if (isArrayLength(arr, op, 41)) {
    arr;
  }
  if (isArrayLength(arr, op, 42)) {
    arr;
  }
  if (isArrayLength(arr, op, 43)) {
    arr;
  }
  if (isArrayLength(arr, op, 44)) {
    arr;
  }
  if (isArrayLength(arr, op, 45)) {
    arr;
  }
  if (isArrayLength(arr, op, 46)) {
    arr;
  }
  if (isArrayLength(arr, op, 47)) {
    arr;
  }
  if (isArrayLength(arr, op, 48)) {
    arr;
  }
  if (isArrayLength(arr, op, 49)) {
    arr;
  }
  if (isArrayLength(arr, op, 50)) {
    arr;
  }
  if (isArrayLength(arr, op, 51)) {
    arr;
  }
  if (isArrayLength(arr, op, 52)) {
    arr;
  }
  if (isArrayLength(arr, op, 53)) {
    arr;
  }
  if (isArrayLength(arr, op, 54)) {
    arr;
  }
  if (isArrayLength(arr, op, 55)) {
    arr;
  }
  if (isArrayLength(arr, op, 56)) {
    arr;
  }
  if (isArrayLength(arr, op, 57)) {
    arr;
  }
  if (isArrayLength(arr, op, 58)) {
    arr;
  }
  if (isArrayLength(arr, op, 59)) {
    arr;
  }
  if (isArrayLength(arr, op, 60)) {
    arr;
  }
  if (isArrayLength(arr, op, 61)) {
    arr;
  }
  if (isArrayLength(arr, op, 62)) {
    arr;
  }
  if (isArrayLength(arr, op, 63)) {
    arr;
  }
  if (isArrayLength(arr, op, 64)) {
    arr;
  }
  if (isArrayLength(arr, op, 65)) {
    arr;
  }
  if (isArrayLength(arr, op, 66)) {
    arr;
  }
  if (isArrayLength(arr, op, 67)) {
    arr;
  }
  if (isArrayLength(arr, op, 68)) {
    arr;
  }
  if (isArrayLength(arr, op, 69)) {
    arr;
  }
  if (isArrayLength(arr, op, 70)) {
    arr;
  }
  if (isArrayLength(arr, op, 71)) {
    arr;
  }
  if (isArrayLength(arr, op, 72)) {
    arr;
  }
  if (isArrayLength(arr, op, 73)) {
    arr;
  }
  if (isArrayLength(arr, op, 74)) {
    arr;
  }
  if (isArrayLength(arr, op, 75)) {
    arr;
  }
  if (isArrayLength(arr, op, 76)) {
    arr;
  }
  if (isArrayLength(arr, op, 77)) {
    arr;
  }
  if (isArrayLength(arr, op, 78)) {
    arr;
  }
  if (isArrayLength(arr, op, 79)) {
    arr;
  }
  if (isArrayLength(arr, op, 80)) {
    arr;
  }
  if (isArrayLength(arr, op, 81)) {
    arr;
  }
  if (isArrayLength(arr, op, 82)) {
    arr;
  }
  if (isArrayLength(arr, op, 83)) {
    arr;
  }
  if (isArrayLength(arr, op, 84)) {
    arr;
  }
  if (isArrayLength(arr, op, 85)) {
    arr;
  }
  if (isArrayLength(arr, op, 86)) {
    arr;
  }
  if (isArrayLength(arr, op, 87)) {
    arr;
  }
  if (isArrayLength(arr, op, 88)) {
    arr;
  }
  if (isArrayLength(arr, op, 89)) {
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    arr;
  }
  if (isArrayLength(arr, op, 91)) {
    arr;
  }
  if (isArrayLength(arr, op, 92)) {
    arr;
  }
  if (isArrayLength(arr, op, 93)) {
    arr;
  }
  if (isArrayLength(arr, op, 94)) {
    arr;
  }
  if (isArrayLength(arr, op, 95)) {
    arr;
  }
  if (isArrayLength(arr, op, 96)) {
    arr;
  }
  if (isArrayLength(arr, op, 97)) {
    arr;
  }
  if (isArrayLength(arr, op, 98)) {
    arr;
  }
  if (isArrayLength(arr, op, 99)) {
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    arr;
  }
  if (isArrayLength(arr, op, 102)) {
    arr;
  }
  if (isArrayLength(arr, op, 103)) {
    arr;
  }
  if (isArrayLength(arr, op, 104)) {
    arr;
  }
  if (isArrayLength(arr, op, 105)) {
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    arr;
  }
  // #endregion

  const n = 3 as number;
  if (isArrayLength(arr, op, n)) {
    // $ExpectType string[]
    arr;
  }
}
function testLess() {
  const arr: number[] = [];
  const op: Parameters<typeof isArrayLength>[1] = '<';

  // @ts-expect-error
  if (isArrayLength(arr, op, -1)) {
    // $ExpectType never
    arr;
  }
  // @ts-expect-error
  isArrayLength(arr, op, -2);
  // @ts-expect-error
  isArrayLength(arr, op, -5);
  // @ts-expect-error
  isArrayLength(arr, op, -90);
  // @ts-expect-error
  isArrayLength(arr, op, -100);
  // @ts-expect-error
  isArrayLength(arr, op, -100500);
  // @ts-expect-error
  isArrayLength(arr, op, 0);

  if (isArrayLength(arr, op, 1)) {
    // $ExpectType []
    arr;
  }
  if (isArrayLength(arr, op, 2)) {
    // $ExpectType [] | [number]
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    // $ExpectType [] | [number, number] | [number]
    arr;
    // $ExpectType 0 | 2 | 1
    arr.length;
    // $ExpectType number | undefined
    arr[1];
    // @ts-expect-error
    // $ExpectType undefined
    arr[2];
  }
  if (isArrayLength(arr, op, 51)) {
    // $ExpectType number[]
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    // $ExpectType number[]
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    // $ExpectType number[]
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    // $ExpectType number[]
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    // $ExpectType number[]
    arr;
  }

  // #region
  if (isArrayLength(arr, op, 1)) {
    arr;
  }
  if (isArrayLength(arr, op, 2)) {
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    arr;
  }
  if (isArrayLength(arr, op, 4)) {
    arr;
  }
  if (isArrayLength(arr, op, 5)) {
    arr;
  }
  if (isArrayLength(arr, op, 6)) {
    arr;
  }
  if (isArrayLength(arr, op, 7)) {
    arr;
  }
  if (isArrayLength(arr, op, 8)) {
    arr;
  }
  if (isArrayLength(arr, op, 9)) {
    arr;
  }
  if (isArrayLength(arr, op, 10)) {
    arr;
  }
  if (isArrayLength(arr, op, 11)) {
    arr;
  }
  if (isArrayLength(arr, op, 12)) {
    arr;
  }
  if (isArrayLength(arr, op, 13)) {
    arr;
  }
  if (isArrayLength(arr, op, 14)) {
    arr;
  }
  if (isArrayLength(arr, op, 15)) {
    arr;
  }
  if (isArrayLength(arr, op, 16)) {
    arr;
  }
  if (isArrayLength(arr, op, 17)) {
    arr;
  }
  if (isArrayLength(arr, op, 18)) {
    arr;
  }
  if (isArrayLength(arr, op, 19)) {
    arr;
  }
  if (isArrayLength(arr, op, 20)) {
    arr;
  }
  if (isArrayLength(arr, op, 21)) {
    arr;
  }
  if (isArrayLength(arr, op, 22)) {
    arr;
  }
  if (isArrayLength(arr, op, 23)) {
    arr;
  }
  if (isArrayLength(arr, op, 24)) {
    arr;
  }
  if (isArrayLength(arr, op, 25)) {
    arr;
  }
  if (isArrayLength(arr, op, 26)) {
    arr;
  }
  if (isArrayLength(arr, op, 27)) {
    arr;
  }
  if (isArrayLength(arr, op, 28)) {
    arr;
  }
  if (isArrayLength(arr, op, 29)) {
    arr;
  }
  if (isArrayLength(arr, op, 30)) {
    arr;
  }
  if (isArrayLength(arr, op, 31)) {
    arr;
  }
  if (isArrayLength(arr, op, 32)) {
    arr;
  }
  if (isArrayLength(arr, op, 33)) {
    arr;
  }
  if (isArrayLength(arr, op, 34)) {
    arr;
  }
  if (isArrayLength(arr, op, 35)) {
    arr;
  }
  if (isArrayLength(arr, op, 36)) {
    arr;
  }
  if (isArrayLength(arr, op, 37)) {
    arr;
  }
  if (isArrayLength(arr, op, 38)) {
    arr;
  }
  if (isArrayLength(arr, op, 39)) {
    arr;
  }
  if (isArrayLength(arr, op, 40)) {
    arr;
  }
  if (isArrayLength(arr, op, 41)) {
    arr;
  }
  if (isArrayLength(arr, op, 42)) {
    arr;
  }
  if (isArrayLength(arr, op, 43)) {
    arr;
  }
  if (isArrayLength(arr, op, 44)) {
    arr;
  }
  if (isArrayLength(arr, op, 45)) {
    arr;
  }
  if (isArrayLength(arr, op, 46)) {
    arr;
  }
  if (isArrayLength(arr, op, 47)) {
    arr;
  }
  if (isArrayLength(arr, op, 48)) {
    arr;
  }
  if (isArrayLength(arr, op, 49)) {
    arr;
  }
  if (isArrayLength(arr, op, 50)) {
    arr;
  }
  if (isArrayLength(arr, op, 51)) {
    arr;
  }
  if (isArrayLength(arr, op, 52)) {
    arr;
  }
  if (isArrayLength(arr, op, 53)) {
    arr;
  }
  if (isArrayLength(arr, op, 54)) {
    arr;
  }
  if (isArrayLength(arr, op, 55)) {
    arr;
  }
  if (isArrayLength(arr, op, 56)) {
    arr;
  }
  if (isArrayLength(arr, op, 57)) {
    arr;
  }
  if (isArrayLength(arr, op, 58)) {
    arr;
  }
  if (isArrayLength(arr, op, 59)) {
    arr;
  }
  if (isArrayLength(arr, op, 60)) {
    arr;
  }
  if (isArrayLength(arr, op, 61)) {
    arr;
  }
  if (isArrayLength(arr, op, 62)) {
    arr;
  }
  if (isArrayLength(arr, op, 63)) {
    arr;
  }
  if (isArrayLength(arr, op, 64)) {
    arr;
  }
  if (isArrayLength(arr, op, 65)) {
    arr;
  }
  if (isArrayLength(arr, op, 66)) {
    arr;
  }
  if (isArrayLength(arr, op, 67)) {
    arr;
  }
  if (isArrayLength(arr, op, 68)) {
    arr;
  }
  if (isArrayLength(arr, op, 69)) {
    arr;
  }
  if (isArrayLength(arr, op, 70)) {
    arr;
  }
  if (isArrayLength(arr, op, 71)) {
    arr;
  }
  if (isArrayLength(arr, op, 72)) {
    arr;
  }
  if (isArrayLength(arr, op, 73)) {
    arr;
  }
  if (isArrayLength(arr, op, 74)) {
    arr;
  }
  if (isArrayLength(arr, op, 75)) {
    arr;
  }
  if (isArrayLength(arr, op, 76)) {
    arr;
  }
  if (isArrayLength(arr, op, 77)) {
    arr;
  }
  if (isArrayLength(arr, op, 78)) {
    arr;
  }
  if (isArrayLength(arr, op, 79)) {
    arr;
  }
  if (isArrayLength(arr, op, 80)) {
    arr;
  }
  if (isArrayLength(arr, op, 81)) {
    arr;
  }
  if (isArrayLength(arr, op, 82)) {
    arr;
  }
  if (isArrayLength(arr, op, 83)) {
    arr;
  }
  if (isArrayLength(arr, op, 84)) {
    arr;
  }
  if (isArrayLength(arr, op, 85)) {
    arr;
  }
  if (isArrayLength(arr, op, 86)) {
    arr;
  }
  if (isArrayLength(arr, op, 87)) {
    arr;
  }
  if (isArrayLength(arr, op, 88)) {
    arr;
  }
  if (isArrayLength(arr, op, 89)) {
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    arr;
  }
  if (isArrayLength(arr, op, 91)) {
    arr;
  }
  if (isArrayLength(arr, op, 92)) {
    arr;
  }
  if (isArrayLength(arr, op, 93)) {
    arr;
  }
  if (isArrayLength(arr, op, 94)) {
    arr;
  }
  if (isArrayLength(arr, op, 95)) {
    arr;
  }
  if (isArrayLength(arr, op, 96)) {
    arr;
  }
  if (isArrayLength(arr, op, 97)) {
    arr;
  }
  if (isArrayLength(arr, op, 98)) {
    arr;
  }
  if (isArrayLength(arr, op, 99)) {
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    arr;
  }
  if (isArrayLength(arr, op, 102)) {
    arr;
  }
  if (isArrayLength(arr, op, 103)) {
    arr;
  }
  if (isArrayLength(arr, op, 104)) {
    arr;
  }
  if (isArrayLength(arr, op, 105)) {
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    arr;
  }
  // #endregion

  const n = 3 as number;
  if (isArrayLength(arr, op, n)) {
    // $ExpectType number[]
    arr;
  }
}
function testMoreOrEqual() {
  const arr: number[] = [];
  const op: Parameters<typeof isArrayLength>[1] = '>=';

  // @ts-expect-error
  if (isArrayLength(arr, op, -1)) {
    // $ExpectType never
    arr;
  }
  // @ts-expect-error
  isArrayLength(arr, op, -2);
  // @ts-expect-error
  isArrayLength(arr, op, -5);
  // @ts-expect-error
  isArrayLength(arr, op, -90);
  // @ts-expect-error
  isArrayLength(arr, op, -100);
  // @ts-expect-error
  isArrayLength(arr, op, -100500);
  // @ts-expect-error
  isArrayLength(arr, op, 0);

  if (isArrayLength(arr, op, 1)) {
    // $ExpectType [number, ...number[]]
    arr;
  }
  if (isArrayLength(arr, op, 2)) {
    // $ExpectType [number, number, ...number[]]
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    // $ExpectType [number, number, number, ...number[]]
    arr;
    // $ExpectType number
    arr.length;
    // $ExpectType number
    arr[1];
    // $ExpectType number
    arr[2];
    // $ExpectType number | undefined
    arr[3];
    // $ExpectType number | undefined
    arr[222];
  }
  if (isArrayLength(arr, op, 51)) {
    // $ExpectType number[]
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    // $ExpectType number[]
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    // $ExpectType number[]
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    // $ExpectType number[]
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    // $ExpectType number[]
    arr;
  }

  // #region
  if (isArrayLength(arr, op, 1)) {
    arr;
  }
  if (isArrayLength(arr, op, 2)) {
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    arr;
  }
  if (isArrayLength(arr, op, 4)) {
    arr;
  }
  if (isArrayLength(arr, op, 5)) {
    arr;
  }
  if (isArrayLength(arr, op, 6)) {
    arr;
  }
  if (isArrayLength(arr, op, 7)) {
    arr;
  }
  if (isArrayLength(arr, op, 8)) {
    arr;
  }
  if (isArrayLength(arr, op, 9)) {
    arr;
  }
  if (isArrayLength(arr, op, 10)) {
    arr;
  }
  if (isArrayLength(arr, op, 11)) {
    arr;
  }
  if (isArrayLength(arr, op, 12)) {
    arr;
  }
  if (isArrayLength(arr, op, 13)) {
    arr;
  }
  if (isArrayLength(arr, op, 14)) {
    arr;
  }
  if (isArrayLength(arr, op, 15)) {
    arr;
  }
  if (isArrayLength(arr, op, 16)) {
    arr;
  }
  if (isArrayLength(arr, op, 17)) {
    arr;
  }
  if (isArrayLength(arr, op, 18)) {
    arr;
  }
  if (isArrayLength(arr, op, 19)) {
    arr;
  }
  if (isArrayLength(arr, op, 20)) {
    arr;
  }
  if (isArrayLength(arr, op, 21)) {
    arr;
  }
  if (isArrayLength(arr, op, 22)) {
    arr;
  }
  if (isArrayLength(arr, op, 23)) {
    arr;
  }
  if (isArrayLength(arr, op, 24)) {
    arr;
  }
  if (isArrayLength(arr, op, 25)) {
    arr;
  }
  if (isArrayLength(arr, op, 26)) {
    arr;
  }
  if (isArrayLength(arr, op, 27)) {
    arr;
  }
  if (isArrayLength(arr, op, 28)) {
    arr;
  }
  if (isArrayLength(arr, op, 29)) {
    arr;
  }
  if (isArrayLength(arr, op, 30)) {
    arr;
  }
  if (isArrayLength(arr, op, 31)) {
    arr;
  }
  if (isArrayLength(arr, op, 32)) {
    arr;
  }
  if (isArrayLength(arr, op, 33)) {
    arr;
  }
  if (isArrayLength(arr, op, 34)) {
    arr;
  }
  if (isArrayLength(arr, op, 35)) {
    arr;
  }
  if (isArrayLength(arr, op, 36)) {
    arr;
  }
  if (isArrayLength(arr, op, 37)) {
    arr;
  }
  if (isArrayLength(arr, op, 38)) {
    arr;
  }
  if (isArrayLength(arr, op, 39)) {
    arr;
  }
  if (isArrayLength(arr, op, 40)) {
    arr;
  }
  if (isArrayLength(arr, op, 41)) {
    arr;
  }
  if (isArrayLength(arr, op, 42)) {
    arr;
  }
  if (isArrayLength(arr, op, 43)) {
    arr;
  }
  if (isArrayLength(arr, op, 44)) {
    arr;
  }
  if (isArrayLength(arr, op, 45)) {
    arr;
  }
  if (isArrayLength(arr, op, 46)) {
    arr;
  }
  if (isArrayLength(arr, op, 47)) {
    arr;
  }
  if (isArrayLength(arr, op, 48)) {
    arr;
  }
  if (isArrayLength(arr, op, 49)) {
    arr;
  }
  if (isArrayLength(arr, op, 50)) {
    arr;
  }
  if (isArrayLength(arr, op, 51)) {
    arr;
  }
  if (isArrayLength(arr, op, 52)) {
    arr;
  }
  if (isArrayLength(arr, op, 53)) {
    arr;
  }
  if (isArrayLength(arr, op, 54)) {
    arr;
  }
  if (isArrayLength(arr, op, 55)) {
    arr;
  }
  if (isArrayLength(arr, op, 56)) {
    arr;
  }
  if (isArrayLength(arr, op, 57)) {
    arr;
  }
  if (isArrayLength(arr, op, 58)) {
    arr;
  }
  if (isArrayLength(arr, op, 59)) {
    arr;
  }
  if (isArrayLength(arr, op, 60)) {
    arr;
  }
  if (isArrayLength(arr, op, 61)) {
    arr;
  }
  if (isArrayLength(arr, op, 62)) {
    arr;
  }
  if (isArrayLength(arr, op, 63)) {
    arr;
  }
  if (isArrayLength(arr, op, 64)) {
    arr;
  }
  if (isArrayLength(arr, op, 65)) {
    arr;
  }
  if (isArrayLength(arr, op, 66)) {
    arr;
  }
  if (isArrayLength(arr, op, 67)) {
    arr;
  }
  if (isArrayLength(arr, op, 68)) {
    arr;
  }
  if (isArrayLength(arr, op, 69)) {
    arr;
  }
  if (isArrayLength(arr, op, 70)) {
    arr;
  }
  if (isArrayLength(arr, op, 71)) {
    arr;
  }
  if (isArrayLength(arr, op, 72)) {
    arr;
  }
  if (isArrayLength(arr, op, 73)) {
    arr;
  }
  if (isArrayLength(arr, op, 74)) {
    arr;
  }
  if (isArrayLength(arr, op, 75)) {
    arr;
  }
  if (isArrayLength(arr, op, 76)) {
    arr;
  }
  if (isArrayLength(arr, op, 77)) {
    arr;
  }
  if (isArrayLength(arr, op, 78)) {
    arr;
  }
  if (isArrayLength(arr, op, 79)) {
    arr;
  }
  if (isArrayLength(arr, op, 80)) {
    arr;
  }
  if (isArrayLength(arr, op, 81)) {
    arr;
  }
  if (isArrayLength(arr, op, 82)) {
    arr;
  }
  if (isArrayLength(arr, op, 83)) {
    arr;
  }
  if (isArrayLength(arr, op, 84)) {
    arr;
  }
  if (isArrayLength(arr, op, 85)) {
    arr;
  }
  if (isArrayLength(arr, op, 86)) {
    arr;
  }
  if (isArrayLength(arr, op, 87)) {
    arr;
  }
  if (isArrayLength(arr, op, 88)) {
    arr;
  }
  if (isArrayLength(arr, op, 89)) {
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    arr;
  }
  if (isArrayLength(arr, op, 91)) {
    arr;
  }
  if (isArrayLength(arr, op, 92)) {
    arr;
  }
  if (isArrayLength(arr, op, 93)) {
    arr;
  }
  if (isArrayLength(arr, op, 94)) {
    arr;
  }
  if (isArrayLength(arr, op, 95)) {
    arr;
  }
  if (isArrayLength(arr, op, 96)) {
    arr;
  }
  if (isArrayLength(arr, op, 97)) {
    arr;
  }
  if (isArrayLength(arr, op, 98)) {
    arr;
  }
  if (isArrayLength(arr, op, 99)) {
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    arr;
  }
  if (isArrayLength(arr, op, 102)) {
    arr;
  }
  if (isArrayLength(arr, op, 103)) {
    arr;
  }
  if (isArrayLength(arr, op, 104)) {
    arr;
  }
  if (isArrayLength(arr, op, 105)) {
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    arr;
  }
  // #endregion

  const n = 3 as number;
  if (isArrayLength(arr, op, n)) {
    // $ExpectType number[]
    arr;
  }
}
function testLessOrEqual() {
  const arr: Array<null> = [];
  const op: Parameters<typeof isArrayLength>[1] = '<=';

  // @ts-expect-error
  if (isArrayLength(arr, op, -1)) {
    // $ExpectType never
    arr;
  }
  // @ts-expect-error
  isArrayLength(arr, op, -2);
  // @ts-expect-error
  isArrayLength(arr, op, -5);
  // @ts-expect-error
  isArrayLength(arr, op, -90);
  // @ts-expect-error
  isArrayLength(arr, op, -100);
  // @ts-expect-error
  isArrayLength(arr, op, -100500);

  if (isArrayLength(arr, op, 0)) {
    // $ExpectType []
    arr;
  }
  if (isArrayLength(arr, op, 1)) {
    // $ExpectType [] | [null]
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    // $ExpectType [] | [null] | [null, null] | [null, null, null]
    arr;
    // $ExpectType 0 | 3 | 2 | 1
    arr.length;
    // $ExpectType null | undefined
    arr[1];
    // $ExpectType null | undefined
    arr[2];
    // @ts-expect-error
    // $ExpectType undefined
    arr[3];
  }
  if (isArrayLength(arr, op, 51)) {
    // $ExpectType null[]
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    // $ExpectType null[]
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    // $ExpectType null[]
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    // $ExpectType null[]
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    // $ExpectType null[]
    arr;
  }

  // #region
  if (isArrayLength(arr, op, 1)) {
    arr;
  }
  if (isArrayLength(arr, op, 2)) {
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    arr;
  }
  if (isArrayLength(arr, op, 4)) {
    arr;
  }
  if (isArrayLength(arr, op, 5)) {
    arr;
  }
  if (isArrayLength(arr, op, 6)) {
    arr;
  }
  if (isArrayLength(arr, op, 7)) {
    arr;
  }
  if (isArrayLength(arr, op, 8)) {
    arr;
  }
  if (isArrayLength(arr, op, 9)) {
    arr;
  }
  if (isArrayLength(arr, op, 10)) {
    arr;
  }
  if (isArrayLength(arr, op, 11)) {
    arr;
  }
  if (isArrayLength(arr, op, 12)) {
    arr;
  }
  if (isArrayLength(arr, op, 13)) {
    arr;
  }
  if (isArrayLength(arr, op, 14)) {
    arr;
  }
  if (isArrayLength(arr, op, 15)) {
    arr;
  }
  if (isArrayLength(arr, op, 16)) {
    arr;
  }
  if (isArrayLength(arr, op, 17)) {
    arr;
  }
  if (isArrayLength(arr, op, 18)) {
    arr;
  }
  if (isArrayLength(arr, op, 19)) {
    arr;
  }
  if (isArrayLength(arr, op, 20)) {
    arr;
  }
  if (isArrayLength(arr, op, 21)) {
    arr;
  }
  if (isArrayLength(arr, op, 22)) {
    arr;
  }
  if (isArrayLength(arr, op, 23)) {
    arr;
  }
  if (isArrayLength(arr, op, 24)) {
    arr;
  }
  if (isArrayLength(arr, op, 25)) {
    arr;
  }
  if (isArrayLength(arr, op, 26)) {
    arr;
  }
  if (isArrayLength(arr, op, 27)) {
    arr;
  }
  if (isArrayLength(arr, op, 28)) {
    arr;
  }
  if (isArrayLength(arr, op, 29)) {
    arr;
  }
  if (isArrayLength(arr, op, 30)) {
    arr;
  }
  if (isArrayLength(arr, op, 31)) {
    arr;
  }
  if (isArrayLength(arr, op, 32)) {
    arr;
  }
  if (isArrayLength(arr, op, 33)) {
    arr;
  }
  if (isArrayLength(arr, op, 34)) {
    arr;
  }
  if (isArrayLength(arr, op, 35)) {
    arr;
  }
  if (isArrayLength(arr, op, 36)) {
    arr;
  }
  if (isArrayLength(arr, op, 37)) {
    arr;
  }
  if (isArrayLength(arr, op, 38)) {
    arr;
  }
  if (isArrayLength(arr, op, 39)) {
    arr;
  }
  if (isArrayLength(arr, op, 40)) {
    arr;
  }
  if (isArrayLength(arr, op, 41)) {
    arr;
  }
  if (isArrayLength(arr, op, 42)) {
    arr;
  }
  if (isArrayLength(arr, op, 43)) {
    arr;
  }
  if (isArrayLength(arr, op, 44)) {
    arr;
  }
  if (isArrayLength(arr, op, 45)) {
    arr;
  }
  if (isArrayLength(arr, op, 46)) {
    arr;
  }
  if (isArrayLength(arr, op, 47)) {
    arr;
  }
  if (isArrayLength(arr, op, 48)) {
    arr;
  }
  if (isArrayLength(arr, op, 49)) {
    arr;
  }
  if (isArrayLength(arr, op, 50)) {
    arr;
  }
  if (isArrayLength(arr, op, 51)) {
    arr;
  }
  if (isArrayLength(arr, op, 52)) {
    arr;
  }
  if (isArrayLength(arr, op, 53)) {
    arr;
  }
  if (isArrayLength(arr, op, 54)) {
    arr;
  }
  if (isArrayLength(arr, op, 55)) {
    arr;
  }
  if (isArrayLength(arr, op, 56)) {
    arr;
  }
  if (isArrayLength(arr, op, 57)) {
    arr;
  }
  if (isArrayLength(arr, op, 58)) {
    arr;
  }
  if (isArrayLength(arr, op, 59)) {
    arr;
  }
  if (isArrayLength(arr, op, 60)) {
    arr;
  }
  if (isArrayLength(arr, op, 61)) {
    arr;
  }
  if (isArrayLength(arr, op, 62)) {
    arr;
  }
  if (isArrayLength(arr, op, 63)) {
    arr;
  }
  if (isArrayLength(arr, op, 64)) {
    arr;
  }
  if (isArrayLength(arr, op, 65)) {
    arr;
  }
  if (isArrayLength(arr, op, 66)) {
    arr;
  }
  if (isArrayLength(arr, op, 67)) {
    arr;
  }
  if (isArrayLength(arr, op, 68)) {
    arr;
  }
  if (isArrayLength(arr, op, 69)) {
    arr;
  }
  if (isArrayLength(arr, op, 70)) {
    arr;
  }
  if (isArrayLength(arr, op, 71)) {
    arr;
  }
  if (isArrayLength(arr, op, 72)) {
    arr;
  }
  if (isArrayLength(arr, op, 73)) {
    arr;
  }
  if (isArrayLength(arr, op, 74)) {
    arr;
  }
  if (isArrayLength(arr, op, 75)) {
    arr;
  }
  if (isArrayLength(arr, op, 76)) {
    arr;
  }
  if (isArrayLength(arr, op, 77)) {
    arr;
  }
  if (isArrayLength(arr, op, 78)) {
    arr;
  }
  if (isArrayLength(arr, op, 79)) {
    arr;
  }
  if (isArrayLength(arr, op, 80)) {
    arr;
  }
  if (isArrayLength(arr, op, 81)) {
    arr;
  }
  if (isArrayLength(arr, op, 82)) {
    arr;
  }
  if (isArrayLength(arr, op, 83)) {
    arr;
  }
  if (isArrayLength(arr, op, 84)) {
    arr;
  }
  if (isArrayLength(arr, op, 85)) {
    arr;
  }
  if (isArrayLength(arr, op, 86)) {
    arr;
  }
  if (isArrayLength(arr, op, 87)) {
    arr;
  }
  if (isArrayLength(arr, op, 88)) {
    arr;
  }
  if (isArrayLength(arr, op, 89)) {
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    arr;
  }
  if (isArrayLength(arr, op, 91)) {
    arr;
  }
  if (isArrayLength(arr, op, 92)) {
    arr;
  }
  if (isArrayLength(arr, op, 93)) {
    arr;
  }
  if (isArrayLength(arr, op, 94)) {
    arr;
  }
  if (isArrayLength(arr, op, 95)) {
    arr;
  }
  if (isArrayLength(arr, op, 96)) {
    arr;
  }
  if (isArrayLength(arr, op, 97)) {
    arr;
  }
  if (isArrayLength(arr, op, 98)) {
    arr;
  }
  if (isArrayLength(arr, op, 99)) {
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    arr;
  }
  if (isArrayLength(arr, op, 102)) {
    arr;
  }
  if (isArrayLength(arr, op, 103)) {
    arr;
  }
  if (isArrayLength(arr, op, 104)) {
    arr;
  }
  if (isArrayLength(arr, op, 105)) {
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    arr;
  }
  // #endregion

  const n = 3 as number;
  if (isArrayLength(arr, op, n)) {
    // $ExpectType null[]
    arr;
  }
}
function testEqual() {
  const arr: number[] = [];
  const op: Parameters<typeof isArrayLength>[1] = '===';

  // @ts-expect-error
  if (isArrayLength(arr, op, -1)) {
    // $ExpectType never
    arr;
  }
  // @ts-expect-error
  isArrayLength(arr, op, -2);
  // @ts-expect-error
  isArrayLength(arr, op, -5);
  // @ts-expect-error
  isArrayLength(arr, op, -90);
  // @ts-expect-error
  isArrayLength(arr, op, -100);
  // @ts-expect-error
  isArrayLength(arr, op, -100500);

  if (isArrayLength(arr, op, 0)) {
    // $ExpectType []
    arr;
  }
  if (isArrayLength(arr, op, 1)) {
    // $ExpectType [number]
    arr;
  }
  if (isArrayLength(arr, op, 2)) {
    // $ExpectType [number, number]
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    // $ExpectType [number, number, number]
    arr;
    // $ExpectType 3
    arr.length;
    // $ExpectType number
    arr[1];
    // $ExpectType number
    arr[2];
    // @ts-expect-error
    // $ExpectType undefined
    arr[3];
    // @ts-expect-error
    // $ExpectType undefined
    arr[222];
  }
  if (isArrayLength(arr, op, 51)) {
    // $ExpectType number[] & { length: 51; }
    arr;
    // $ExpectType number | undefined
    arr[1];
    // $ExpectType number | undefined
    arr[50];
    // $ExpectType number | undefined
    arr[123];
  }
  if (isArrayLength(arr, op, 90)) {
    // $ExpectType number[] & { length: 90; }
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    // $ExpectType number[] & { length: 100; }
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    // $ExpectType number[] & { length: 101; }
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    // $ExpectType number[] & { length: 100500; }
    arr;
  }

  // #region
  if (isArrayLength(arr, op, 1)) {
    arr;
  }
  if (isArrayLength(arr, op, 2)) {
    arr;
  }
  if (isArrayLength(arr, op, 3)) {
    arr;
  }
  if (isArrayLength(arr, op, 4)) {
    arr;
  }
  if (isArrayLength(arr, op, 5)) {
    arr;
  }
  if (isArrayLength(arr, op, 6)) {
    arr;
  }
  if (isArrayLength(arr, op, 7)) {
    arr;
  }
  if (isArrayLength(arr, op, 8)) {
    arr;
  }
  if (isArrayLength(arr, op, 9)) {
    arr;
  }
  if (isArrayLength(arr, op, 10)) {
    arr;
  }
  if (isArrayLength(arr, op, 11)) {
    arr;
  }
  if (isArrayLength(arr, op, 12)) {
    arr;
  }
  if (isArrayLength(arr, op, 13)) {
    arr;
  }
  if (isArrayLength(arr, op, 14)) {
    arr;
  }
  if (isArrayLength(arr, op, 15)) {
    arr;
  }
  if (isArrayLength(arr, op, 16)) {
    arr;
  }
  if (isArrayLength(arr, op, 17)) {
    arr;
  }
  if (isArrayLength(arr, op, 18)) {
    arr;
  }
  if (isArrayLength(arr, op, 19)) {
    arr;
  }
  if (isArrayLength(arr, op, 20)) {
    arr;
  }
  if (isArrayLength(arr, op, 21)) {
    arr;
  }
  if (isArrayLength(arr, op, 22)) {
    arr;
  }
  if (isArrayLength(arr, op, 23)) {
    arr;
  }
  if (isArrayLength(arr, op, 24)) {
    arr;
  }
  if (isArrayLength(arr, op, 25)) {
    arr;
  }
  if (isArrayLength(arr, op, 26)) {
    arr;
  }
  if (isArrayLength(arr, op, 27)) {
    arr;
  }
  if (isArrayLength(arr, op, 28)) {
    arr;
  }
  if (isArrayLength(arr, op, 29)) {
    arr;
  }
  if (isArrayLength(arr, op, 30)) {
    arr;
  }
  if (isArrayLength(arr, op, 31)) {
    arr;
  }
  if (isArrayLength(arr, op, 32)) {
    arr;
  }
  if (isArrayLength(arr, op, 33)) {
    arr;
  }
  if (isArrayLength(arr, op, 34)) {
    arr;
  }
  if (isArrayLength(arr, op, 35)) {
    arr;
  }
  if (isArrayLength(arr, op, 36)) {
    arr;
  }
  if (isArrayLength(arr, op, 37)) {
    arr;
  }
  if (isArrayLength(arr, op, 38)) {
    arr;
  }
  if (isArrayLength(arr, op, 39)) {
    arr;
  }
  if (isArrayLength(arr, op, 40)) {
    arr;
  }
  if (isArrayLength(arr, op, 41)) {
    arr;
  }
  if (isArrayLength(arr, op, 42)) {
    arr;
  }
  if (isArrayLength(arr, op, 43)) {
    arr;
  }
  if (isArrayLength(arr, op, 44)) {
    arr;
  }
  if (isArrayLength(arr, op, 45)) {
    arr;
  }
  if (isArrayLength(arr, op, 46)) {
    arr;
  }
  if (isArrayLength(arr, op, 47)) {
    arr;
  }
  if (isArrayLength(arr, op, 48)) {
    arr;
  }
  if (isArrayLength(arr, op, 49)) {
    arr;
  }
  if (isArrayLength(arr, op, 50)) {
    arr;
  }
  if (isArrayLength(arr, op, 51)) {
    arr;
  }
  if (isArrayLength(arr, op, 52)) {
    arr;
  }
  if (isArrayLength(arr, op, 53)) {
    arr;
  }
  if (isArrayLength(arr, op, 54)) {
    arr;
  }
  if (isArrayLength(arr, op, 55)) {
    arr;
  }
  if (isArrayLength(arr, op, 56)) {
    arr;
  }
  if (isArrayLength(arr, op, 57)) {
    arr;
  }
  if (isArrayLength(arr, op, 58)) {
    arr;
  }
  if (isArrayLength(arr, op, 59)) {
    arr;
  }
  if (isArrayLength(arr, op, 60)) {
    arr;
  }
  if (isArrayLength(arr, op, 61)) {
    arr;
  }
  if (isArrayLength(arr, op, 62)) {
    arr;
  }
  if (isArrayLength(arr, op, 63)) {
    arr;
  }
  if (isArrayLength(arr, op, 64)) {
    arr;
  }
  if (isArrayLength(arr, op, 65)) {
    arr;
  }
  if (isArrayLength(arr, op, 66)) {
    arr;
  }
  if (isArrayLength(arr, op, 67)) {
    arr;
  }
  if (isArrayLength(arr, op, 68)) {
    arr;
  }
  if (isArrayLength(arr, op, 69)) {
    arr;
  }
  if (isArrayLength(arr, op, 70)) {
    arr;
  }
  if (isArrayLength(arr, op, 71)) {
    arr;
  }
  if (isArrayLength(arr, op, 72)) {
    arr;
  }
  if (isArrayLength(arr, op, 73)) {
    arr;
  }
  if (isArrayLength(arr, op, 74)) {
    arr;
  }
  if (isArrayLength(arr, op, 75)) {
    arr;
  }
  if (isArrayLength(arr, op, 76)) {
    arr;
  }
  if (isArrayLength(arr, op, 77)) {
    arr;
  }
  if (isArrayLength(arr, op, 78)) {
    arr;
  }
  if (isArrayLength(arr, op, 79)) {
    arr;
  }
  if (isArrayLength(arr, op, 80)) {
    arr;
  }
  if (isArrayLength(arr, op, 81)) {
    arr;
  }
  if (isArrayLength(arr, op, 82)) {
    arr;
  }
  if (isArrayLength(arr, op, 83)) {
    arr;
  }
  if (isArrayLength(arr, op, 84)) {
    arr;
  }
  if (isArrayLength(arr, op, 85)) {
    arr;
  }
  if (isArrayLength(arr, op, 86)) {
    arr;
  }
  if (isArrayLength(arr, op, 87)) {
    arr;
  }
  if (isArrayLength(arr, op, 88)) {
    arr;
  }
  if (isArrayLength(arr, op, 89)) {
    arr;
  }
  if (isArrayLength(arr, op, 90)) {
    arr;
  }
  if (isArrayLength(arr, op, 91)) {
    arr;
  }
  if (isArrayLength(arr, op, 92)) {
    arr;
  }
  if (isArrayLength(arr, op, 93)) {
    arr;
  }
  if (isArrayLength(arr, op, 94)) {
    arr;
  }
  if (isArrayLength(arr, op, 95)) {
    arr;
  }
  if (isArrayLength(arr, op, 96)) {
    arr;
  }
  if (isArrayLength(arr, op, 97)) {
    arr;
  }
  if (isArrayLength(arr, op, 98)) {
    arr;
  }
  if (isArrayLength(arr, op, 99)) {
    arr;
  }
  if (isArrayLength(arr, op, 100)) {
    arr;
  }
  if (isArrayLength(arr, op, 101)) {
    arr;
  }
  if (isArrayLength(arr, op, 102)) {
    arr;
  }
  if (isArrayLength(arr, op, 103)) {
    arr;
  }
  if (isArrayLength(arr, op, 104)) {
    arr;
  }
  if (isArrayLength(arr, op, 105)) {
    arr;
  }
  if (isArrayLength(arr, op, 100500)) {
    arr;
  }
  // #endregion

  const n = 3 as number;
  if (isArrayLength(arr, op, n)) {
    // $ExpectType number[]
    arr;
  }
}
