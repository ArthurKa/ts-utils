export const isNullSimple = <T>(e: null extends T ? T : never): e is typeof e & null => e === null;
export const isUndefinedSimple = <T>(e: undefined extends T ? T : never): e is typeof e & undefined => e === undefined;
export const isNullishSimple = <T>(e: null | undefined extends T ? T : never): e is (
  | ((null extends T ? T : never) & null)
  | ((undefined extends T ? T : never) & undefined)
 ) => isNullSimple(e) || isUndefinedSimple(e);

export const isNull = <T>(e: null extends T ? [T] extends [null] ? never : T : never): e is typeof e & null => (
  isNullSimple(e)
);
export const isUndefined = <T>(e: undefined extends T ? [T] extends [undefined] ? never : T : never): e is typeof e & undefined => (
  isUndefinedSimple(e)
);
export const isNullish = <T>(e: null | undefined extends T ? [T] extends [null | undefined] ? never : T : never): e is typeof e & (
  | ((null extends T ? T : never) & null)
  | ((undefined extends T ? T : never) & undefined)
) => isNullishSimple(e);

export const getNotNullSimple = <T>(
  e: null extends T ? T : never,
  errorMessage: string,
): Exclude<T, null> => {
  if(isNullSimple(e)) {
    throw new Error(errorMessage);
  }

  return e as any;
};
export const getNotUndefinedSimple = <T>(
  e: undefined extends T ? T : never,
  errorMessage: string,
): Exclude<T, undefined> => {
  if(isUndefinedSimple(e)) {
    throw new Error(errorMessage);
  }

  return e as any;
};

export const getNotNull = <T>(
  e: null extends T ? [T] extends [null] ? never : T : never,
  errorMessage: string,
): Exclude<T, null> => getNotNullSimple(e, errorMessage);
export const getNotUndefined = <T>(
  e: undefined extends T ? [T] extends [undefined] ? never : T : never,
  errorMessage: string,
): Exclude<T, undefined> => getNotUndefinedSimple(e, errorMessage);
