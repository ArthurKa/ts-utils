export type IsAnyOrUnknown<T> = false extends (any extends T ? true : false) ? false : true;
export type IsExactOptionalPropertyTypes = Required<{ e?: string | undefined }>['e'] extends string ? false : true;
export type LoopOver<T> = { [K in keyof T]: T[K] };

type KeyOfMap<T extends Map<unknown, unknown>> = T extends Map<infer U, unknown> ? U : never;
export type KeyOf<T> = T extends Map<any, any> ? KeyOfMap<T> : keyof T;

export type ValueOf<T> = T extends Map<unknown, infer U> ? U : T[keyof T];

export type NonUndefined<T> = T extends undefined ? never : T;

export type Entries<T> = {
  [K in KeyOf<T>]: (
    T extends Map<unknown, infer U>
      ? [K, U]
      : [
        K extends number ? `${K}` : K,
        IsExactOptionalPropertyTypes extends false
          ? T[K]
          : T extends { [k in K]: unknown }
            ? T[K]
            : Required<T>[K] extends NonUndefined<T[K]>
              ? NonUndefined<T[K]>
              : T[K],
      ]
  );
}[KeyOf<T>][];

export type KeyOfUnion<T> = T extends unknown ? keyof T : never;

export type TheSame<T, U> = (
  T extends U
    ? U extends T
      ? true
      : false
    : false
);

export function ObjEntries<T>(obj: T): Entries<T> {
  if(obj instanceof Map) {
    return [...obj.entries()] as any;
  }

  return Object.entries(obj as any) as any;
}

export function ObjFromEntries<T, U extends PropertyKey>(entries: Array<readonly [U, T]>): Record<U, T> {
  return Object.fromEntries(entries) as any;
}

type IsNotRecordOrUnknown<T> = (
  T extends Record<string, unknown>
    ? false
    : unknown extends T
      ? false
      : true
);
type IsBadParamForObjKeys<T> = (
  null extends T
    ? IsNotRecordOrUnknown<T>
    : undefined extends T
      ? IsNotRecordOrUnknown<T>
      : false
);
/* eslint-disable @typescript-eslint/indent */
export function ObjKeys<T extends true extends IsBadParamForObjKeys<T> ? never : unknown>(obj: T): (
  IsAnyOrUnknown<T> extends true
    ? ReturnType<typeof Object.keys>
    : T extends Map<unknown, unknown>
      ? KeyOf<T>[]
      : T extends Record<string, any>
        ? Array<keyof {
          [K in KeyOf<T> as `${K}`]: true;
        }>
        : ReturnType<typeof Object.keys>
/* eslint-enable @typescript-eslint/indent */
) {
  if(obj instanceof Map) {
    return [...obj.keys()] as any;
  }

  return Object.keys(obj as any) as any;
}

export function ObjValues<T>(obj: T): ValueOf<T>[] {
  if(obj instanceof Map) {
    return [...obj.values()];
  }

  return Object.values(obj as any) as any;
}

export const twoDigitsMin = (value: string | number) => (
  `00${value}`.slice(-Math.max(2, String(value).length))
);

export function trimMultiline(strings: TemplateStringsArray, ...params: unknown[]): string {
  const s = strings.map((e, i) => `${e}${i === params.length ? '' : params[i]}`).join('');

  const whiteSpaceAmount = s.match(/\n?(\s*)\S/)?.[1]?.length;

  let res = s.trim();
  if(whiteSpaceAmount) {
    const re = new RegExp(`\\n[\\t ]{1,${whiteSpaceAmount}}`, 'g');
    res = res.replace(re, '\n');
  }

  return res;
}

export function round(n: number, precision = 0) {
  const [beforeDot, afterDot = ''] = String(n).split('.') as [string, string?];

  if(afterDot[precision] === '5') {
    const arr = afterDot.split('');
    arr.splice(precision, 1, '9');
    // eslint-disable-next-line no-param-reassign
    n = +`${beforeDot}.${arr.join('')}`;
  }

  return +n.toFixed(precision);
}

export function getRandom(max: number): number;
export function getRandom(from: number, to: number): number;
export function getRandom(str: string): string;
export function getRandom<T>(arr: T[]): T;
export function getRandom(a: any, b?: any) {
  return Array.isArray(a) || typeof a === 'string'
    ? a[getRandom(a.length)]
    : b === undefined
      ? Math.floor(Math.random() * a)
      : Math.floor(Math.random() * (b - a + 1)) + a;
}

export type ThenArg<T> = T extends PromiseLike<infer U> ? ThenArg<U> : T;

export type ExtractGeneric<T> = T extends Array<infer U> ? U : never;

export type ExtractSet<T> = T extends Set<infer U> ? U : never;

export type GeneratorParams<T> = T extends Generator<infer U, infer M, infer A> ? [U, M, A] : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type GuardedType<T> = T extends (e: any) => e is infer T ? T : never;

export const wait = (seconds: number) => new Promise<void>(res => {
  setTimeout(res, seconds * 1000);
});

export * from './ExactShape';

export * from './makeUnderLangPropsCreator';

export type NonExactOptional<T> = (
  & { [K in keyof T as undefined extends T[K] ? never : K]: T[K] }
  & { [K in keyof T as undefined extends T[K] ? K : never]: T[K] | undefined }
);

export const isTruthy = <T>(e: T): e is Exclude<T, 0 | 0n | '' | false | null | undefined> => Boolean(e);

export type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

export * from './branded';

export const typeOf = (e: unknown): string => ({}).toString.call(e).slice(8, -1);

export type IsNegative<T extends number> = `${T}` extends `-${string}` ? true : false;
export type IsPositive<T extends number> = (
  T extends 0
    ? false
    : `${T}` extends `-${string}`
      ? false
      : true
);

export * from './isArrayLength';
export * from './isArrayIncludes';
export * from './MinTupleLength';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Combine<T1 extends object, T2 extends object, TKeys extends keyof T2> = (
  & Omit<T1, TKeys>
  & Pick<T2, TKeys>
);

export const tuple = <T extends unknown[]>(...params: T) => params;

export * from './Union';
