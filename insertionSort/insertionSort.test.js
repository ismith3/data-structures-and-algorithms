'use strict';

const insertionSort = require('./insertionSort');

describe('testing insertionSort()', () => {
  it('can sort an array of integers of length 5', () => {
    let arr = [3,2,5,1,4];
    expect(insertionSort(arr)).toEqual([1,2,3,4,5]);
  });
  it('can sort an array of integers of length 10', () => {
    let arr = [5,2,8,6,7,4,3,1,9,10];
    expect(insertionSort(arr)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});