export const makeKeyToAttributeOfValue = <TValue, TProccessedKey>(
  object: Record<string, Record<string, TValue>>,
  nameForKey: string,
  processKeyCallback?: (key: string) => TProccessedKey,
) => {
  const arr = Object.entries(object);
  return arr.map(([key, value]) => ({
    [nameForKey]: processKeyCallback ? processKeyCallback(key) : key,
    ...value,
  }));
};
