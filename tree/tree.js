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
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

Tree.Node = TreeNode;

module.exports = Tree;
