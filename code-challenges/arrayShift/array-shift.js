
function shiftArray(arr, value) {
  if(typeof arr !== 'object' || typeof value !== 'number') {
    return undefined;
  }
  let middle = Math.ceil(arr.length / 2);
  let result = [];

  for(let i = 0; i < arr.length + 1; i++) {
    if (i > middle) {
      result[i] = arr[i - 1];
    }
    else if (i < middle) {
      result[i] = arr[i];
    }
    else {
      result[i] = value;
    }
  }
  return result;
}

describe('Testing Challenge: Array Shift', () => {
  it('Should return an array with the given value in the middle (odd)', () => {
    expect(shiftArray([4,6,2,5,8], 7)).toStrictEqual([4,6,2,7,5,8]);
  });
  it('Should return an array with the given value in the middle (even)', () => {
    expect(shiftArray([3,6,8,2,1,7], 5)).toStrictEqual([3,6,8,5,2,1,7]);
  })
  it('Should return \'undefined\' for non-valid arguments', () => {
    expect(shiftArray(3,[2,6,3,7])).toStrictEqual(undefined);
  });
  it('Should return an array with one value given an empty array', () => {
    expect(shiftArray([], 69)).toStrictEqual([69]);
  })
});