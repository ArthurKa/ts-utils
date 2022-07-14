export declare const BRAND: unique symbol;
export declare const BRAND2: unique symbol;
export declare const BRAND3: unique symbol;
export declare const BRAND4: unique symbol;
export declare const BRAND5: unique symbol;
export declare const BRAND6: unique symbol;
export declare const BRAND7: unique symbol;
export declare const BRAND8: unique symbol;
export declare const BRAND9: unique symbol;
export declare const BRAND10: unique symbol;

export declare const WITNESS: unique symbol;
export type WITNESS = typeof WITNESS;

type RearrangeKeys<T extends { [WITNESS]: unknown }> = T[WITNESS] & {
  [k in Exclude<keyof T, keyof NonNullable<T[WITNESS]>>]: T[k];
};

export type Branded<T extends unknown, U extends string> = RearrangeKeys<T & (
  T extends { [BRAND9]: unknown }
    ? { [BRAND10]: U }
    : T extends { [BRAND8]: unknown }
      ? { [BRAND9]: U }
      : T extends { [BRAND7]: unknown }
        ? { [BRAND8]: U }
        : T extends { [BRAND6]: unknown }
          ? { [BRAND7]: U }
          : T extends { [BRAND5]: unknown }
            ? { [BRAND6]: U }
            : T extends { [BRAND4]: unknown }
              ? { [BRAND5]: U }
              : T extends { [BRAND3]: unknown }
                ? { [BRAND4]: U }
                : T extends { [BRAND2]: unknown }
                  ? { [BRAND3]: U }
                  : T extends { [BRAND]: unknown }
                    ? { [BRAND2]: U }
                    : {
                      [WITNESS]: T;
                      [BRAND]: U;
                    }
)>;

export type Brand<T extends unknown, U extends string> = Branded<T, U>;
