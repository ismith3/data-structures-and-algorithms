'use strict';

'use strict';

const Tree = require('./binary-search-tree.js');

function plantTree() {
  let tree = new Tree();
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