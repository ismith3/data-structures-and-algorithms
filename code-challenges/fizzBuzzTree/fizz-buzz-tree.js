'use strict';

const Tree = require('../../tree/tree');

function plantTree() {
  let tree = new Tree();
  tree.root = new Tree.Node(1);
  tree.root.left = new Tree.Node(2);
  tree.root.right = new Tree.Node(3);
  tree.root.left.left = new Tree.Node(4);
  tree.root.left.right = new Tree.Node(5);
  tree.root.right.left = new Tree.Node(15);
  tree.root.right.right = new Tree.Node(30);
  return tree;
}

function fizzBuzzTree(tree) {
  inOrderVisit(tree.root);

  function inOrderVisit(node) {
    if(!node)
      return;

    inOrderVisit(node.left);

    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    }
    else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    }

    inOrderVisit(node.right);
  }
}

describe('Testing Fizz Buzz Tree', () => {
  it('Changes values divisible by 3 to "Fizz"', () => {
    let tree = plantTree();
    fizzBuzzTree(tree);
    expect(tree.root.right.value).toStrictEqual('Fizz');
  });
  it('Changes values divisible by 5 to "Buzz"', () => {
    let tree = plantTree();
    fizzBuzzTree(tree);
    expect(tree.root.left.right.value).toStrictEqual('Buzz');
  });
  it('Changes values divisible by 3 and 5 to "FizzBuzz"', () => {
    let tree = plantTree();
    fizzBuzzTree(tree);
    expect(tree.root.right.left.value).toStrictEqual('FizzBuzz');
    expect(tree.root.right.right.value).toStrictEqual('FizzBuzz');
  });
  it('Keeps values that can not be Fizzed or Buzzed', () => {
    let tree = plantTree();
    fizzBuzzTree(tree);
    expect(tree.root.value).toStrictEqual(1);
    expect(tree.root.left.left.value).toStrictEqual(4);
  })
});