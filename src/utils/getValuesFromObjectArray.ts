export const getValuesFromObjectArray = <TValue>(arrayOfObjects: Record<string, TValue>[]) => {
  return arrayOfObjects.map((object) => [...Object.values(object)]).flat();
};
