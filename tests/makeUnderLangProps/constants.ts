export const LANG = 'LANG';
export const byString = 'asd';
export const byEmptyObject = { _: 'asd' } as const;
export const byFulfilledObjectMixedKeysDeepLvl = {
  _: 'asd',
  lvl11: 'LVL11',
  lvl12: {
    _: 'LVL12',
    lvl21: {
      _: 'LVL21',
    },
    lvl22: 'LVL22',
    lvl23: {
      _: 'LVL23',
      lvl31: {
        _: 'LVL31',
        lvl41: {
          _: 'LVL41',
          lvl51: {
            _: 'LVL51',
          },
          lvl52: 'LVL52',
        },
      },
    },
  },
} as const;
