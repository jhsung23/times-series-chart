export const makeKeyToPropertyOfValue = <TValue, TProccessedKey>(
  object: Record<string, Record<string, TValue>>,
  propertyKey: string,
  processKeyCallback?: (key: string) => TProccessedKey,
) => {
  const arr = Object.entries(object);
  return arr.map(([key, value]) => ({
    [propertyKey]: processKeyCallback ? processKeyCallback(key) : key,
    ...value,
  }));
};
