'use strict';

function searchArray(arr, val) {

}

describe('Testing code challenge: Array binary search', () => {
  it('Returns the index of the provided value in the array', () => {
    expect(searchArray([1,2,3,4,5], 4)).toStrictEqual(3);
  });

  it('Returns -1 if the value does not exist in the array', () => {
    expect(searchArray([1,2,3,4,5], 69)).toStrictEqual(-1);
  });
});