'use strict';

const Stack = require('../stacksAndQueues/stack');

function multiBracketValidation(input) {
  let stack = new Stack;
  let openingBrackets = ['{', '(', '['];
  let closingBrackets = ['}', ')', ']'];

  for(let i = 0; i < input.length; i++) {
    let current = input.charAt(i);
    if(openingBrackets.includes(current)) {
      stack.push(current);
    } else if(closingBrackets.includes(current)) {
      if(!stack.top) {
        return false;
      } else if(stack.top.value === openingBrackets[closingBrackets.indexOf(current)]) {
        stack.pop();
      } else if(!openingBrackets.includes(current) && !closingBrackets.includes(current)) {
        continue;
      } else {
        return false;
      }
    }
  }
  if(stack.top) {
    return false;
  } else {
    return true;
  }
}

test.each([
  ['', true],
  ['{}', true],
  ['{', false],
  ['(){}', true],
  ['okoskdvo(){[]}', true],
  ['{hello().world{[]}}', true],
  ['{}{}{}[[[{{({})}}]]]yo', true],
  ['{[(}]}', false],
  ['yoyoyo{hello()', false],
  ['{()]', false],
  ['((())))', false],
  ['(())]', false]
])
('validates brackets', (input, expected) => {
  expect(multiBracketValidation(input)).toBe(expected);
});