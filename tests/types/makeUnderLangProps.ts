/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */

import { makeUnderLangPropsCreator } from 'build';
import { byFulfilledObjectMixedKeysDeepLvl, byString, LANG } from 'tests/makeUnderLangProps/constants';

const makeUnderLangProps = makeUnderLangPropsCreator(LANG);

const t1 = makeUnderLangProps(byString);
// $ExpectType "asd"
t1._;
// $ExpectType "LANG.asd"
t1._path;

const t2 = makeUnderLangProps(byFulfilledObjectMixedKeysDeepLvl);
// $ExpectType "asd"
t2._;
// $ExpectType "LANG.asd"
t2._path;
// $ExpectType "LVL11"
t2.lvl11._;
// $ExpectType "LANG.asd.LVL11"
t2.lvl11._path;
// $ExpectType "LVL12"
t2.lvl12._;
// $ExpectType "LANG.asd.LVL12"
t2.lvl12._path;
// $ExpectType "LVL21"
t2.lvl12.lvl21._;
// $ExpectType "LANG.asd.LVL12.LVL21"
t2.lvl12.lvl21._path;
// $ExpectType "LVL22"
t2.lvl12.lvl22._;
// $ExpectType "LANG.asd.LVL12.LVL22"
t2.lvl12.lvl22._path;
// $ExpectType "LVL23"
t2.lvl12.lvl23._;
// $ExpectType "LANG.asd.LVL12.LVL23"
t2.lvl12.lvl23._path;
// $ExpectType "LVL31"
t2.lvl12.lvl23.lvl31._;
// $ExpectType "LANG.asd.LVL12.LVL23.LVL31"
t2.lvl12.lvl23.lvl31._path;
// $ExpectType "LVL41"
t2.lvl12.lvl23.lvl31.lvl41._;
// $ExpectType "LANG.asd.LVL12.LVL23.LVL31.LVL41"
t2.lvl12.lvl23.lvl31.lvl41._path;
// $ExpectType "LVL51"
t2.lvl12.lvl23.lvl31.lvl41.lvl51._;
// $ExpectType "LANG.asd.LVL12.LVL23.LVL31.LVL41.LVL51"
t2.lvl12.lvl23.lvl31.lvl41.lvl51._path;
// $ExpectType "LVL52"
t2.lvl12.lvl23.lvl31.lvl41.lvl52._;
// $ExpectType "LANG.asd.LVL12.LVL23.LVL31.LVL41.LVL52"
t2.lvl12.lvl23.lvl31.lvl41.lvl52._path;
