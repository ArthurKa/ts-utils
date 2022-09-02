class ExtraPropertyError<T> {
  private noExtraProperty!: T;
}

// @ts-expect-error
type _IsExactShape<T, U, K> = IsExactShape<T[K], U[K]>;

export type IsExactShape<TShape extends Record<string, unknown> | unknown[], TValue extends TShape> = (
  false extends {
    [K in keyof TValue]: (
      K extends keyof TShape
        ? TValue[K] extends TShape[K]
          ? _IsExactShape<TShape, TValue, K>
          : false
        : TShape extends unknown[]
          ? Exclude<keyof TValue, keyof TShape | `${number}`> extends never
            ? _IsExactShape<TShape, TValue, K>
            : false
          : false
    )
  }[keyof TValue] ? false : true
);

export type ExactShape<TShape extends Record<string, unknown>, TValue extends TShape> = (
  IsExactShape<TShape, TValue> extends true ? TValue : ExtraPropertyError<TShape>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const checkExactShape = <TShape extends Record<string, unknown>>() => <T extends TShape>(e: ExactShape<TShape, T>) => {};
