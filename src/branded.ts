declare const BRANDS: unique symbol;
type BRANDS = typeof BRANDS;

export declare const WITNESS: unique symbol;
export type WITNESS = typeof WITNESS;

type RearrangeKeysAndUseWitness<T extends { [WITNESS]: unknown; [BRANDS]: unknown }> = T[WITNESS] & {
  [WITNESS]: T[WITNESS];
  [BRANDS]: {
    [K in keyof T[BRANDS]]: T[BRANDS][K];
  };
};

export type Branded<T extends unknown, U extends string> = RearrangeKeysAndUseWitness<{
  [WITNESS]: T extends { [WITNESS]: unknown } ? T[WITNESS] : T;
  [BRANDS]: (
    T extends { [BRANDS]: unknown }
      ? T[BRANDS] & { [k in U]: true }
      : { [k in U]: true }
  );
}>;

export type Brand<T extends unknown, U extends string> = Branded<T, U>;
