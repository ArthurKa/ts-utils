import assert from 'assert';
import { makeUnderLangPropsCreator } from '../../build';
import {
  byEmptyObject,
  byFulfilledObjectMixedKeysDeepLvl,
  byString,
  LANG,
} from './constants';

const makeUnderLangProps = makeUnderLangPropsCreator(LANG);

describe('makeUnderLangPropsCreator:', () => {
  it('by string', () => {
    const underLangProps = {
      asd: makeUnderLangProps(byString),
    };
    assert.deepEqual(underLangProps, {
      asd: {
        _: 'asd',
        _path: `${LANG}.asd`,
      },
    });
  });
  it('by empty object', () => {
    const underLangProps = {
      asd: makeUnderLangProps(byEmptyObject),
    };
    assert.deepEqual(underLangProps, {
      asd: {
        _: 'asd',
        _path: `${LANG}.asd`,
      },
    });
  });
  it('by fulfilled object with string key first lvl', () => {
    const underLangProps = {
      asd: makeUnderLangProps({
        _: 'asd',
        lvl1: 'LVL1',
      } as const),
    };
    assert.deepEqual(underLangProps, {
      asd: {
        _: 'asd',
        _path: `${LANG}.asd`,
        lvl1: {
          _: 'LVL1',
          _path: `${LANG}.asd.LVL1`,
        },
      },
    });
  });
  it('by fulfilled object with string keys first lvl', () => {
    const underLangProps = {
      asd: makeUnderLangProps({
        _: 'asd',
        lvl11: 'LVL11',
        lvl12: 'LVL12',
      } as const),
    };
    assert.deepEqual(underLangProps, {
      asd: {
        _: 'asd',
        _path: `${LANG}.asd`,
        lvl11: {
          _: 'LVL11',
          _path: `${LANG}.asd.LVL11`,
        },
        lvl12: {
          _: 'LVL12',
          _path: `${LANG}.asd.LVL12`,
        },
      },
    });
  });
  it('by fulfilled object mixed keys first lvl', () => {
    const underLangProps = {
      asd: makeUnderLangProps({
        _: 'asd',
        lvl11: 'LVL11',
        lvl12: {
          _: 'LVL12',
        },
      } as const),
    };
    assert.deepEqual(underLangProps, {
      asd: {
        _: 'asd',
        _path: `${LANG}.asd`,
        lvl11: {
          _: 'LVL11',
          _path: `${LANG}.asd.LVL11`,
        },
        lvl12: {
          _: 'LVL12',
          _path: `${LANG}.asd.LVL12`,
        },
      },
    });
  });
  it('by fulfilled object mixed keys deep lvl', () => {
    const underLangProps = {
      asd: makeUnderLangProps(byFulfilledObjectMixedKeysDeepLvl),
    };
    assert.deepEqual(underLangProps, {
      asd: {
        _: 'asd',
        _path: `${LANG}.asd`,
        lvl11: {
          _: 'LVL11',
          _path: `${LANG}.asd.LVL11`,
        },
        lvl12: {
          _: 'LVL12',
          _path: `${LANG}.asd.LVL12`,
          lvl21: {
            _: 'LVL21',
            _path: `${LANG}.asd.LVL12.LVL21`,
          },
          lvl22: {
            _: 'LVL22',
            _path: `${LANG}.asd.LVL12.LVL22`,
          },
          lvl23: {
            _: 'LVL23',
            _path: `${LANG}.asd.LVL12.LVL23`,
            lvl31: {
              _: 'LVL31',
              _path: `${LANG}.asd.LVL12.LVL23.LVL31`,
              lvl41: {
                _: 'LVL41',
                _path: `${LANG}.asd.LVL12.LVL23.LVL31.LVL41`,
                lvl51: {
                  _: 'LVL51',
                  _path: `${LANG}.asd.LVL12.LVL23.LVL31.LVL41.LVL51`,
                },
                lvl52: {
                  _: 'LVL52',
                  _path: `${LANG}.asd.LVL12.LVL23.LVL31.LVL41.LVL52`,
                },
              },
            },
          },
        },
      },
    });
  });
});
