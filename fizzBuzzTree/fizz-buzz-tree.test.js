'use strict';

const Tree = require('../tree/tree');

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function plantTree() {
  let tree = new Tree();
  tree.root = new TreeNode(1);
  tree.root.left = new TreeNode(15);
  tree.root.right = new TreeNode(3);
  tree.root.left.left = new TreeNode(4);
  tree.root.left.right = new TreeNode(5);
  tree.root.right.left = new TreeNode(6);
  tree.root.right.right = new TreeNode(7);
  return tree;
}

describe('testing FizzBuzz', () => {
  it('fizzbuzzes a tree', () => {
    let tree = plantTree();
    tree.fizzBuzz();
    expect(tree.root.right.value).toEqual('Fizz');
    expect(tree.root.left.right.value).toEqual('Buzz');
    expect(tree.root.left.value).toEqual('FizzBuzz');
  });
});