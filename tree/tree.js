'use strict';

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];
    preOrderVisit(this.root);
    return result;

    function preOrderVisit(node) {
      if(!node)
        return;

      result.push(node.value);

      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }

  inOrder() {
    let result = [];
    inOrderVisit(this.root);
    return result;

    function inOrderVisit(node) {
      if(!node)
        return;

      inOrderVisit(node.left);

      result.push(node.value);

      inOrderVisit(node.right);
    }
  }

  postOrder() {
    let result = [];
    postOrderVisit(this.root);
    return result;

    function postOrderVisit(node) {
      if(!node)
        return;

      postOrderVisit(node.left);

      postOrderVisit(node.right);

      result.push(node.value);
    }
  }

  fizzBuzz() {
    let result = [];
    preOrderVisit(this.root);
    return result;

    function preOrderVisit(node) {
      if(!node)
        return;
      else if(node.value % 15 === 0) {
        node.value = 'FizzBuzz';
      } else if(node.value % 3 === 0) {
        node.value = 'Fizz';
      } else if(node.value % 5 === 0) {
        node.value = 'Buzz';
      }

      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function plantTree() {
  let tree = new Tree();
  tree.root = new TreeNode(1);
  tree.root.left = new TreeNode(2);
  tree.root.right = new TreeNode(3);
  tree.root.left.left = new TreeNode(4);
  tree.root.left.right = new TreeNode(5);
  tree.root.right.left = new TreeNode(6);
  tree.root.right.right = new TreeNode(7);
  return tree;
}

Tree.Node = TreeNode;
module.exports = Tree;

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