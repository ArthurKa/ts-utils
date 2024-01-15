import { Primitive } from 'ts-toolbelt/out/Misc/Primitive';
import type { WITNESS } from '.';
import { ReplaceAllAnyWithNever } from './utils';

type NonDeepPartibleTypes = [Date, Blob, FileList];

export type DeepPartial<T extends AcceptAll extends true ? unknown : object, AcceptAll extends boolean = false> = (
  T extends ReplaceAllAnyWithNever<NonDeepPartibleTypes>[number] | Primitive | { [WITNESS]: unknown }
    ? T
    : T extends unknown[]
      ? DeepPartial<T[number], true>[]
      : {
        [K in keyof T]?: (
          // Note: `object` would be more correct, but because of old TS 4.6 in tests need to put here `{}`
          // BTW it works the same because of primitives handled above
          T[K] extends {} // eslint-disable-line @typescript-eslint/ban-types
            ? DeepPartial<T[K]>
            : T[K]
        );
      }
);
