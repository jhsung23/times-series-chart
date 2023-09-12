export const makeKeyToAttributeOfValue = <TValue>(
  object: Record<string, Record<string, TValue>>,
  nameForKey: string,
) => {
  const arr = Object.entries(object);
  return arr.map(([key, value]) => ({ [nameForKey]: key.split(' ')[1], ...value }));
};
