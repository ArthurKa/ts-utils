export type Unionize<T> = {
  [K in keyof T]: {
    [K2 in K]: T[K];
  };
}[keyof T] extends infer X ? X : never;
