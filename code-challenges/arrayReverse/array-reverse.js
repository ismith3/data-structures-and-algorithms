function reverseArray(arr) {
  if (typeof arr === 'object') {
    let returnArray = [];
    for(let i = 0; i < Math.ceil(arr.length / 2); i++) {
      let x = arr[i];
      let y = arr[arr.length - (i + 1)];
      returnArray[i] = y;
      returnArray[arr.length - (i + 1)] = x;
    }
    return returnArray;
  }
  else {
    console.error('Error: Provided argument is not an array');
  }
}

let testArray = [1,2,3,4,5,6,7,8,9,10];

console.log(reverseArray(testArray));