import {
  getNotNull,
  getNotNullSimple,
  getNotUndefined,
  getNotUndefinedSimple,
  isNull,
  isNullish,
  isNullishSimple,
  isNullSimple,
  isUndefined,
  isUndefinedSimple,
} from 'dist';

declare const a1: null;
declare const a2: undefined;
declare const a3: null | undefined;
declare const a4: 123 | 222;
declare const a5: null | undefined | 222;

{
  if (isNullSimple(a1)) {
    // $ExpectType null
    a1;
  } else {
    // $ExpectType never
    a1;
  }

  // @ts-expect-error
  isNullSimple(a2);

  if (isNullSimple(a3)) {
    // $ExpectType null
    a3;
  } else {
    // $ExpectType undefined
    a3;
  }

  // @ts-expect-error
  isNullSimple(a4);

  if (isNullSimple(a5)) {
    // $ExpectType null
    a5;
  } else {
    // $ExpectType 222 | undefined
    a5;
  }
}

{
  // @ts-expect-error
  isUndefinedSimple(a1);

  if (isUndefinedSimple(a2)) {
  // $ExpectType undefined
    a2;
  } else {
  // $ExpectType never
    a2;
  }

  if (isUndefinedSimple(a3)) {
  // $ExpectType undefined
    a3;
  } else {
  // $ExpectType null
    a3;
  }

  // @ts-expect-error
  isUndefinedSimple(a4);

  if (isUndefinedSimple(a5)) {
  // $ExpectType undefined
    a5;
  } else {
  // $ExpectType 222 | null
    a5;
  }
}

{
  // @ts-expect-error
  isNullishSimple(a1);

  // @ts-expect-error
  isNullishSimple(a2);

  if (isNullishSimple(a3)) {
  // $ExpectType null | undefined
    a3;
  } else {
  // $ExpectType never
    a3;
  }

  // @ts-expect-error
  isNullishSimple(a4);

  if (isNullishSimple(a5)) {
  // $ExpectType null | undefined
    a5;
  } else {
  // $ExpectType 222
    a5;
  }

  if (isNullishSimple(a5)) {
  // $ExpectType null | undefined
    a5;
  } else {
  // $ExpectType 222
    a5;
  }
}

{
  // @ts-expect-error
  isNull(a1);

  // @ts-expect-error
  isNull(a2);

  if (isNull(a3)) {
    // $ExpectType null
    a3;
  } else {
    // $ExpectType undefined
    a3;
  }

  // @ts-expect-error
  isNull(a4);

  if (isNull(a5)) {
    // $ExpectType null
    a5;
  } else {
    // $ExpectType 222 | undefined
    a5;
  }
}

{
  // @ts-expect-error
  isUndefined(a1);

  // @ts-expect-error
  isUndefined(a2);

  if (isUndefined(a3)) {
  // $ExpectType undefined
    a3;
  } else {
  // $ExpectType null
    a3;
  }

  // @ts-expect-error
  isUndefined(a4);

  if (isUndefined(a5)) {
  // $ExpectType undefined
    a5;
  } else {
  // $ExpectType 222 | null
    a5;
  }
}

{
  // @ts-expect-error
  isNullish(a1);

  // @ts-expect-error
  isNullish(a2);

  // @ts-expect-error
  isNullish(a3);

  // @ts-expect-error
  isNullish(a4);

  if (isNullish(a5)) {
  // $ExpectType null | undefined
    a5;
  } else {
  // $ExpectType 222
    a5;
  }

  if (isNullishSimple(a5)) {
  // $ExpectType null | undefined
    a5;
  } else {
  // $ExpectType 222
    a5;
  }
}

{
  // $ExpectType never
  getNotNullSimple(a1, '');
  // @ts-expect-error
  getNotNullSimple(a2, '');
  // $ExpectType undefined
  getNotNullSimple(a3, '');
  // @ts-expect-error
  getNotNullSimple(a4, '');
  // $ExpectType 222 | undefined
  getNotNullSimple(a5, '');

  // @ts-expect-error
  getNotUndefinedSimple(a1, '');
  // $ExpectType never
  getNotUndefinedSimple(a2, '');
  // $ExpectType null
  getNotUndefinedSimple(a3, '');
  // @ts-expect-error
  getNotUndefinedSimple(a4, '');
  // $ExpectType 222 | null
  getNotUndefinedSimple(a5, '');

  // @ts-expect-error
  getNotNull(a1, '');
  // @ts-expect-error
  getNotNull(a2, '');
  // $ExpectType undefined
  getNotNull(a3, '');
  // @ts-expect-error
  getNotNull(a4, '');
  // $ExpectType 222 | undefined
  getNotNull(a5, '');

  // @ts-expect-error
  getNotUndefined(a1, '');
  // @ts-expect-error
  getNotUndefined(a2, '');
  // $ExpectType null
  getNotUndefined(a3, '');
  // @ts-expect-error
  getNotUndefined(a4, '');
  // $ExpectType 222 | null
  getNotUndefined(a5, '');
}
