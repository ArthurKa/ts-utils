import type { KeyOfUnion, OptionalKeys, TheSame } from '.';

export type Union<T extends object> = (
  KeyOfUnion<T> extends infer K
    ? T extends unknown
      ? TheSame<K, keyof T> extends true
        ? T
        : (
          & { [V in K extends keyof T ? Exclude<K, OptionalKeys<T>> : never]: T[V] }
          & { [V in K extends keyof T ? OptionalKeys<T> : never]?: T[V] }
          & { [V in K extends keyof T ? never : K & PropertyKey]?: undefined }
        ) extends infer V
          ? { [K in keyof V]: V[K] }
          : never
      : never
    : never
);
