type UnionObject<T extends string | number, U> = {
  [K in T]: {
    [A in K]: U;
  };
}[T] extends infer X ? X : never;

export const unionObject = <T extends string | number, U>(e: T, v: U) => (
  { [e]: v } as UnionObject<T, U>
);
