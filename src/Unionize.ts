export type Unionize<T> = {
  [K in keyof T]: {
    [K2 in K]: T[K];
  };
}[keyof T];
