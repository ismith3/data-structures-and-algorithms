function reverseArray(arr) {
  let reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - i - 1){
      let val1 = arr[i];
      let val2 = arr[arr.length - i - 1];
      reversedArray[i] = val2;
      reversedArray[arr.length - i - 1] = val1;
    }
    else {
      reversedArray[i] = arr[i];
    }
  }
  return reversedArray;
}

describe('testing reverseArray', () => {
  it('should return a reversed array of an even number of integers', () => {
    expect(reverseArray([1,2,3,4,5,6])).toStrictEqual([6,5,4,3,2,1]);
  });
  it('should return a reversed array of an odd number of integers', () => {
    expect(reverseArray([3,4,5,6,7])).toStrictEqual([7,6,5,4,3]);
  });
});