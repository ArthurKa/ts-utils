declare const BRAND: unique symbol;
type BRAND = typeof BRAND;

export declare const WITNESS: unique symbol;
export type WITNESS = typeof WITNESS;

type RearrangeKeysAndUseWitness<T extends { [WITNESS]: unknown;[BRAND]: unknown }> = T[WITNESS] & {
  [WITNESS]: T[WITNESS];
  [BRAND]: {
    [k in keyof T[BRAND]]: T[BRAND][k];
  };
};

export type Branded<T extends unknown, U extends string> = RearrangeKeysAndUseWitness<{
  [WITNESS]: T extends { [WITNESS]: unknown } ? T[WITNESS] : T;
  [BRAND]: (
    T extends { [BRAND]: unknown }
      ? T[BRAND] & { [k in U]: true }
      : { [k in U]: true }
  );
}>;

export type Brand<T extends unknown, U extends string> = Branded<T, U>;
