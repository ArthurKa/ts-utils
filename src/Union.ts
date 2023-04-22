import { KeyOfUnion, TheSame } from '.';

export type Union<T> = (
  KeyOfUnion<T> extends infer K extends PropertyKey
    ? T extends object
      ? TheSame<K, keyof T> extends true
        ? T
        : (
          & { [V in K extends keyof T ? K : never]: T[V] }
          & { [V in K extends keyof T ? never : K]?: undefined }
        ) extends infer V
          ? {
            [K2 in keyof V]: V[K2];
          }
          : never
      : T
    : never
);
