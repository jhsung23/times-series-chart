export const getUniqueProperties = <
  TData extends Record<string, unknown>,
  TKey extends keyof TData,
>(
  datas: TData[],
  filterKey: TKey,
) => {
  return datas
    .map((data) => ({ [filterKey]: data[filterKey] }) as Record<TKey, TData[TKey]>)
    .reduce(
      (acc, cur) => {
        const itemInAcc = acc.find((item) => item[filterKey] === cur[filterKey]);
        if (itemInAcc) return acc;
        return acc.concat([cur]);
      },
      [] as Array<Record<TKey, TData[TKey]>>,
    );
};
