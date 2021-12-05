type SimpleNode = {
  _: string;
};
// #region
type MyNode = (
  SimpleNode['_'] | (
    SimpleNode & Record<string, SimpleNode['_'] | (
      SimpleNode & Record<string, SimpleNode['_'] | (
        SimpleNode & Record<string, SimpleNode['_'] | (
          SimpleNode & Record<string, SimpleNode['_'] | (
            SimpleNode & Record<string, SimpleNode['_'] | (
              SimpleNode & Record<string, SimpleNode['_'] | (
                SimpleNode & Record<string, SimpleNode['_'] | (
                  SimpleNode & Record<string, SimpleNode['_'] | (
                    SimpleNode & Record<string, SimpleNode['_'] | (
                      SimpleNode & Record<string, SimpleNode['_'] | (
                        SimpleNode
                      )>
                    )>
                  )>
                )>
              )>
            )>
          )>
        )>
      )>
    )>
  )
);
// #endregion

interface StructNode<T extends MyNode, U extends string> {
  _: Exclude<T, SimpleNode['_']>['_'];
  _path: `${U}.${Exclude<T, SimpleNode['_']>['_']}`;
}

type Struct<T extends MyNode, U extends string> = (
  T extends SimpleNode['_']
    ? Struct<{ _: Exclude<T, SimpleNode> }, U>
    : keyof T extends '_'
      ? StructNode<T, U>
      : StructNode<T, U> & {
        [key in Exclude<keyof T, '_'>]: (
          T[key] extends SimpleNode['_']
            ? Struct<{ _: Exclude<T[key], SimpleNode> }, StructNode<T, U>['_path']>
            : Struct<Exclude<Exclude<T, SimpleNode['_']>[key], SimpleNode['_']>, StructNode<T, U>['_path']>
        );
      }
);

const makeStructNodeLikeObj = <T extends SimpleNode, U extends string>(obj: T, langWildcard: U) => ({
  _: obj._,
  _path: `${langWildcard}.${obj._}`,
} as const);

export function makeUnderLangPropsCreator<LANG_WILDCARD extends string>(langWildcard: LANG_WILDCARD) {
  const wildcards = [langWildcard];

  return function makeUnderLangProps<T extends MyNode>(obj: T): Struct<T, LANG_WILDCARD> {
    if(typeof obj === 'string') {
      return makeUnderLangProps({ _: obj } as T);
    }

    if(Object.keys(obj).length === 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return makeStructNodeLikeObj(obj, wildcards[wildcards.length - 1]!) as any;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const struct = makeStructNodeLikeObj(obj, wildcards[wildcards.length - 1]!);

    return {
      ...struct,
      ...Object.fromEntries(
        Object.entries(obj)
          .filter(([key]) => key !== '_')
          .map(([key, val]) => {
            wildcards.push(struct._path as LANG_WILDCARD);
            const res = [key, makeUnderLangProps(val)];
            wildcards.pop();

            return res;
          }),
      ),
    } as any;
  };
}
