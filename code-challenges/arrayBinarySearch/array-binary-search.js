'use strict';

function searchArray(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let cur;

  while(true) {
    cur = Math.ceil(((right - left) / 2) + left);
    if (num === arr[0]) {
      cur = 0;
      break;
    }
    else if ((left === right - 1) && (arr[left] !== num && arr[right] !== num)) {
      cur = -1;
      break;
    }
    else if (num > arr[cur]) {
      left = cur;
    }
    else if (num < arr[cur]) {
      right = cur;
    }
    else if (num === arr[cur]) {
      break;
    }
  }
  return cur;
}

describe('Testing code challenge: Array binary search', () => {
  it('Returns the index of the provided value in the array', () => {
    expect(searchArray([1,2,3,4,5], 4)).toStrictEqual(3);
  });

  it('Returns -1 if the value does not exist in the array', () => {
    expect(searchArray([1,2,3,4,5], 1)).toStrictEqual(0);
  });
});