import { ReplaceAllAnyWithNever } from './utils';

type NonDeepPartibleTypes = [Date, Blob, FileList];

export type DeepPartial<T extends AcceptAll extends true ? unknown : object, AcceptAll extends boolean = false> = (
  T extends ReplaceAllAnyWithNever<NonDeepPartibleTypes>[number]
    ? T
    : T extends unknown[]
      ? DeepPartial<T[number], true>[]
      : {
        [K in keyof T]?: (
          T[K] extends object
            ? DeepPartial<T[K]>
            : T[K]
        );
      }
);
