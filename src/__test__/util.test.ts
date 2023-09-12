import { getUniqueAttributes, getValuesFromObjectArray, makeKeyToAttributeOfValue } from '../utils';
import { datas } from './testData';

describe('getUniqueAttributes 함수 테스트', () => {
  test('객체 배열에서 특정 key를 가지는 attribute를 중복 없이 배열로 반환해야 한다.', () => {
    expect(getUniqueAttributes(datas, 'id')).toEqual([
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
    ]);
    expect(getUniqueAttributes(datas, 'first_name')).toEqual([
      { first_name: 'Michael' },
      { first_name: 'Lindsay' },
      { first_name: 'Tobias' },
      { first_name: 'Byron' },
      { first_name: 'George' },
      { first_name: 'Rachel' },
    ]);
    expect(getUniqueAttributes(datas, 'bornYear')).toEqual([
      { bornYear: 1997 },
      { bornYear: 2000 },
      { bornYear: 1998 },
      { bornYear: 1999 },
    ]);
    expect(getUniqueAttributes(datas, 'job')).toEqual([
      { job: 'teacher' },
      { job: 'singer' },
      { job: 'programmer' },
      { job: 'swimmer' },
    ]);
  });
});

describe('getValuesFromObjectArray 함수 테스트', () => {
  test('객체 배열에서 각 attribute의 value만을 배열로 반환해야 한다.', () => {
    const data = [{ id: 1, name: 'choco', obj: { id: 2, name: 'happy' }, arr: [1, 2, 3] }];
    expect(getValuesFromObjectArray(data)).toEqual([
      1,
      'choco',
      { id: 2, name: 'happy' },
      [1, 2, 3],
    ]);
  });
});

describe('makeKeyToAttributeOfValue 함수 테스트', () => {
  test('객체의 key를 value 객체의 attribute로 바꾼 객체 배열을 반환해야 한다.', () => {
    const obj = { id: 1 };
    expect(makeKeyToAttributeOfValue({ 1995: obj }, 'year')).toEqual([{ ...obj, year: '1995' }]);
    expect(makeKeyToAttributeOfValue({ 1995: obj }, 'age', (key) => 2023 - parseInt(key))).toEqual([
      { ...obj, age: 2023 - 1995 },
    ]);
    expect(makeKeyToAttributeOfValue({ choco: obj }, 'name')).toEqual([{ ...obj, name: 'choco' }]);
    expect(makeKeyToAttributeOfValue({ choco: obj }, 'name', (key) => `user-${key}`)).toEqual([
      { ...obj, name: 'user-choco' },
    ]);
    expect(makeKeyToAttributeOfValue({ true: obj }, 'isOk')).toEqual([{ ...obj, isOk: 'true' }]);
  });
});
