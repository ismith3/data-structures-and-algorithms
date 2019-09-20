'use strict';

let binarySearch = (array,key) => { 
  let middle = Math.floor(array.length/2);
  let left = 0;
  let right = array.length -1;

  while(key !== array[middle]) {
    if (left === middle) {
      return -1;
    }
    else if (key < array[middle]) {
      right = middle;
      middle = Math.floor((right-left)/2 + left); //(4 - 0)/2 + 0 = 3
    }
    else if (key > array[middle]) {
      left = middle;
      middle = Math.ceil((right-left)/2 + left);
    }
  }
  return middle;
};

describe('Testing Binary Search', () => {
  it('given an array, return index of matched key', () => {
    let array100 = [];
    let array10000 = [];
    let array100000 = [];
    for (let index = 0; index < 100; index++) {
      array100.push(index + 1);
    }
    for (let index = 0; index < 10000; index++) {
      array10000.push(index + 1);
    }
    for (let index = 0; index < 100000; index++) {
      array100000.push(index + 1);
    }
    let array = [1,5,10,15,20,25,30,35];
    let key1 = 20;
    let key2 = 88;
    let key3 = 547;
    let key4 = 1640;
    expect(binarySearch(array,key1)).toBe(4);
    expect(binarySearch(array100,key2)).toBe(87);
    expect(binarySearch(array10000,key3)).toBe(546);
    expect(binarySearch(array100000,key4)).toBe(1639);
  });
  it('given an array, return -1 if key is not found', () => {
    let array = [1,5,10,15,20,25,30,35];
    let key = 99;
    expect(binarySearch(array,key)).toBe(-1);
  });
});