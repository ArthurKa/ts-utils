import type { ExtractGeneric, KeyOfUnion } from '.';

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

type BRAND = string | { [BRANDS]: unknown };

type GetBrands<U extends BRAND | [BRAND, BRAND, ...BRAND[]]> = {
  [K in (
    U extends Array<unknown>
      ? (
        | Extract<ExtractGeneric<U>, string>
        | KeyOfUnion<Extract<ExtractGeneric<U>, { [BRANDS]: unknown }>[BRANDS]>
      )
      : U extends { [BRANDS]: unknown }
        ? keyof U[BRANDS]
        : U
  )]: true;
};

export type Branded<T extends unknown, U extends BRAND | [BRAND, BRAND, ...BRAND[]]> = RearrangeKeysAndUseWitness<{
  [WITNESS]: T extends { [WITNESS]: unknown } ? T[WITNESS] : T;
  [BRANDS]: (
    T extends { [BRANDS]: unknown }
      ? T[BRANDS] & GetBrands<U>
      : GetBrands<U>
  );
}>;

export type Brand<T extends unknown, U extends BRAND | [BRAND, BRAND, ...BRAND[]]> = Branded<T, U>;
