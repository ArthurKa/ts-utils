export type ValueOf<T> = T[keyof T];
export type KeyOfUnion<T> = T extends T ? keyof T : never;

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
export function ObjEntries<T>(obj: T): Entries<T> {
  return Object.entries(obj) as any;
}

export function ObjKeys<T>(obj: T): (
  /* eslint-disable @typescript-eslint/indent */ // eslint-disable-line @typescript-eslint/indent
  T extends null | undefined
    ? never
    : undefined extends T[keyof T]
      ? ReturnType<typeof Object.keys>
      : keyof T extends string | symbol
        ? T extends Record<string, unknown>
          ? Array<keyof T>
          : ReturnType<typeof Object.keys>
        : ReturnType<typeof Object.keys>
  /* eslint-enable @typescript-eslint/indent */
) {
  return Object.keys(obj) as any;
}

export function ObjValues<T>(obj: T): ValueOf<T>[] {
  return Object.values(obj) as any;
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

export function round(n: number, digits = 0) {
  const [beforeDot, afterDot = ''] = String(n).split('.') as [string, string?];

  if(afterDot[digits] === '5') {
    const arr = afterDot.split('');
    arr.splice(digits, 1, '9');
    // eslint-disable-next-line no-param-reassign
    n = +`${beforeDot}.${arr.join('')}`;
  }

  return +n.toFixed(digits);
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

export type GeneratorParams<T> = T extends Generator<infer U, infer M, infer A> ? [U, M, A] : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type GuardedType<T> = T extends (x: any) => x is infer T ? T : never;

export const wait = (seconds: number) => new Promise<void>(res => setTimeout(res, seconds * 1000));

class ExtraPropertiesError<T> {
  private noExtraProperty!: T;
}

export type ExactShape<T, Shape> = (
  T extends Shape
    ? Exclude<keyof T, keyof Shape> extends never
      ? T
      : ExtraPropertiesError<Shape>
    : Shape
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const checkExactShape = <Shape>() => <T>(_e: ExactShape<T, Shape>) => {};

export * from './makeUnderLangPropsCreator';

export type NonExactOptional<T> = (
  & { [K in keyof T as undefined extends T[K] ? never : K]: T[K] }
  & { [K in keyof T as undefined extends T[K] ? K : never]: T[K] | undefined }
);

export const isTruthy = <T extends unknown>(e: T): e is Exclude<T, 0 | 0n | '' | false | null | undefined | HTMLAllCollection> => Boolean(e);

export type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
