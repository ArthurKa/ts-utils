// eslint-disable-next-line @typescript-eslint/no-unused-vars
type UnionObject<T extends string | number, U> = {
  [K in T]: {
    [A in K]: U;
  };
}[T] extends infer T ? T : never;

export const unionObject = <T extends string | number, U>(e: T, v: U) => (
  { [e]: v } as UnionObject<T, U>
);
