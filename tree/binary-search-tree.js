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

function plantTree() {
  let tree = new BinarySearchTree();
  return tree;
}

describe('Testing Binary Search Tree', () => {
  it('Can add a single node to a tree', () => {
    let tree = plantTree();
    tree.add(5);
    expect(tree.root.value).toStrictEqual(5);
  });
  it('Can add 3 nodes with proper structure', () => {
    let tree = plantTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    expect(tree.root.value).toStrictEqual(5);
    expect(tree.root.left.value).toStrictEqual(3);
    expect(tree.root.right.value).toStrictEqual(7);
  });
  it('Can search the tree for a specified value and return the correct boolean', () => {
    let tree = plantTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(10);
    tree.add(1);
    tree.add(2);
    expect(tree.contains(10)).toStrictEqual(true);
    expect(tree.contains(9)).toStrictEqual(false);
    
  });
});