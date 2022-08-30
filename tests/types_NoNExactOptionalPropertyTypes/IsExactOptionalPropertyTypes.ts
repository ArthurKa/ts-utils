/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */

import { IsExactOptionalPropertyTypes } from 'build';

// $ExpectType false
type A = IsExactOptionalPropertyTypes;
