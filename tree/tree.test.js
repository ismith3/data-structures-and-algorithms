'use strict';

const Queue = require('../stacksAndQueues/queue');

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

  bfs() {
    let queue = new Queue();
    if(!this.root) {
      return;
    } else {
      queue.enqueue(this.root);
    }
    while(queue.front) {
      let left = queue.front.value.left;
      let right = queue.front.value.right;
      if(left) {
        queue.enqueue(left);
      }
      if(right) {
        queue.enqueue(right);
      }
      console.log(queue.dequeue().value);
    }
    return;
  }

  findMax() {
    let max = null;
    preOrderVisit(this.root);
    return max;

    function preOrderVisit(node) {
      if(!node)
        return;

      if(!max) {
        max = node.value;
      } else {
        if(node.value > max) {
          max = node.value;
        }
      }

      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function plantTree(content) {
  // this is just for testing so the content of the tree can be
  // edited with just an array
  let tree = new Tree();
  tree.root = new TreeNode(content[0]);
  tree.root.left = new TreeNode(content[1]);
  tree.root.right = new TreeNode(content[2]);
  tree.root.left.left = new TreeNode(content[3]);
  tree.root.left.right = new TreeNode(content[4]);
  tree.root.right.left = new TreeNode(content[5]);
  tree.root.right.right = new TreeNode(content[6]);
  return tree;
}

Tree.Node = TreeNode;
module.exports = Tree;

describe('Testing Binary Tree', () => {
  let content = [1,2,3,4,5,6,7];
  it('Successfully runs the preOrder method with the proper return order', () => {
    let result = plantTree(content).preOrder();
    expect(result).toStrictEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  it('Successfully runs the inOrder method with the proper return order', () => {
    let result = plantTree(content).inOrder();
    expect(result).toStrictEqual([4, 2, 5, 1, 6, 3, 7]);
  });
  it('Successfully runs the postOrder method with the proper return order', () => {
    let result = plantTree(content).postOrder();
    expect(result).toStrictEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});

describe('testing breadth-first search', () => {
  it('logs tree nodes in correct order', () => {
    // content array must have 7 items to not break (plantTree function can only handle 7)
    let content1 = [1,2,3,4,5,6,7];
    let tree1 = plantTree(content1);

    let content2 = [2,7,5,2,6,9,5];
    let tree2 = plantTree(content2);

    jest.spyOn(console, 'log');

    // this stuff isn't async so you can only test one at a time for it to work
    tree1.bfs();
    for(let i = 0; i < content1.length; i++) {
      expect(console.log).toHaveBeenNthCalledWith(i + 1, content1[i]);
    }
    // tree2.bfs();
    // for(let i = 0; i < content2.length; i++) {
    //   expect(console.log).toHaveBeenNthCalledWith(i + 1, content2[i]);
    // }
  });
});

describe('testing findMax()', () => {
  it('returns the max value in a tree', () => {
    let content = [2,34,5,69,23,12,52];
    let tree = plantTree(content);
    expect(tree.findMax()).toEqual(69);
  });
});