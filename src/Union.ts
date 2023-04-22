import type { KeyOfUnion, TheSame } from '.';

export type Union<T extends object> = (
  KeyOfUnion<T> extends infer K
    ? T extends unknown
      ? TheSame<K, keyof T> extends true
        ? T
        : (
          & { [V in K extends keyof T ? K : never]: T[V] }
          & { [V in K extends keyof T ? never : K & PropertyKey]?: undefined }
        ) extends infer V
          ? { [K2 in keyof V]: V[K2] }
          : never
      : never
    : never
);
