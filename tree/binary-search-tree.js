'use strict';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {

    function traverseTree(cur, node) {

      if (node.value < cur.value) {
        if (!cur.left) {
          cur.left = node;
          return true;
        } else {
          traverseTree(cur.left, node);
        }
      }

      else if (node.value > cur.value) {
        if (!cur.right) {
          cur.right = node;
          return true;
        } else {
          traverseTree(cur.right, node);
        }
      }
      else {
        return false;
      }
    }

    let node = new TreeNode(value);

    if(!this.root) {
      this.root = node;
      return true;
    }
    else {
      return traverseTree(this.root, node);
    }
  }

  contains(value) {
    function traverseTree(cur, val) {
      if (val !== cur.value && !cur.left && !cur.right) {
        return false;
      }

      else if (val < cur.value) {
        if (!cur.left) {
          return false;
        } else {
          traverseTree(cur.left, val);
        }
      }

      else if (val > cur.value) {
        if (!cur.right) {
          return false;
        } else {
          traverseTree(cur.right, val);
        }
      }

      else if (val === cur.value) {
        console.log(true);
        return true;
      }
    }

    if(!value) {
      return false;
    } else {
      return traverseTree(this.root, value);
    }
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

BinarySearchTree.Node = TreeNode;

module.exports = BinarySearchTree;