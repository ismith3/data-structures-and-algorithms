'use strict';

const Tree = require('./tree.js');

function plantTree() {
  let tree = new Tree();
  tree.root = new Tree.Node(1);
  tree.root.left = new Tree.Node(2);
  tree.root.right = new Tree.Node(3);
  tree.root.left.left = new Tree.Node(4);
  tree.root.left.right = new Tree.Node(5);
  tree.root.right.left = new Tree.Node(6);
  tree.root.right.right = new Tree.Node(7);
  return tree;
}

describe('Testing Binary Tree', () => {
  it('Successfully runs the preOrder method with the proper return order', () => {
    let result = plantTree().preOrder();
    expect(result).toStrictEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  it('Successfully runs the inOrder method with the proper return order', () => {
    let result = plantTree().inOrder();
    expect(result).toStrictEqual([4, 2, 5, 1, 6, 3, 7]);
  });
  it('Successfully runs the postOrder method with the proper return order', () => {
    let result = plantTree().postOrder();
    expect(result).toStrictEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});