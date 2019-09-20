function insertShiftArray(arr, val) {
  let result = [];
  let mid;

  if (!arr.length % 2) {
    mid = Math.floor(arr.length / 2);
  }
  else {
    mid = Math.ceil(arr.length / 2);
  }

  for (let i = 0; i < arr.length + 1; i++) {
    if (i < mid) {
      result.push(arr[i]);
    }
    else if (i > mid) {
      result.push(arr[i - 1]);
    }
    else if (i === mid) {
      result.push(val);
    }
  }

  return result;
}

describe('Testing Challenge: Array Shift', () => {
  it('Should return an array with the given value in the middle (odd)', () => {
    expect(insertShiftArray([4,6,2,5,8], 7)).toStrictEqual([4,6,2,7,5,8]);
  });
  it('Should return an array with the given value in the middle (even)', () => {
    expect(insertShiftArray([3,6,8,2,1,7], 5)).toStrictEqual([3,6,8,5,2,1,7]);
  });
  it('Should return an array with one value given an empty array', () => {
    expect(insertShiftArray([], 69)).toStrictEqual([69]);
  });
});