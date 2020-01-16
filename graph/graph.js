'use strict';

class Graph {
  constructor() {
    this.list = [];
  }

  addNode(val) {
    let array = [];
    array.push(val);
    this.list.push(array);
    return [val];
  }

  addEdge(node1, node2) {
    for(let i = 0; i < this.list.length; i++) {
      if(this.list[i][0] === node1) {
        if(!this.list[i].includes(node2)) {
          this.list[i].push(node2);
        }
      } else if(this.list[i][0] === node2) {
        if(!this.list[i].includes(node1)) {
          this.list[i].push(node1);
        }
      } else {
        continue;
      }
    }
  }

  getNodes() {
    let array = [];
    for(let i = 0; i < this.list.length; i++) {
      array.push(this.list[i][0]);
    }
    return array;
  }

  getNeighbors(node) {
    for (let i = 0; i < this.list.length; i++) {
      if(this.list[i][0] === node) {
        return this.list[i].slice(1, this.list[i].length);
      }
    }
  }

  size() {
    return this.list.length;
  }
}

module.exports = Graph;

describe('Testing graph implementation', () => {
  it('can create an empty graph', () => {
    let graph = new Graph();
    expect(graph).toBeDefined();
  });
  it('can add a node to a graph', () => {
    let graph = new Graph();
    expect(graph.addNode(2)).toEqual([2]);
    expect(graph.list[0]).toEqual([2]);
  });
  it('can add an edge between two nodes', () => {
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 2);
    expect(graph.list[0][1]).toEqual(2);
    expect(graph.list[1][1]).toEqual(1);
    graph.addNode(4);
    graph.addEdge(1, 4);
    graph.addEdge(2, 4);
    expect(graph.list[2][1]).toEqual(1);
    expect(graph.list[2][2]).toEqual(2);
    expect(graph.list[0][2]).toEqual(4);
  });
  it('can get a list of all nodes', () => {
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    expect(graph.getNodes()).toEqual([1, 2, 3]);
  });
  it('can get a list of a given node\'s neighbors', () => {
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    expect(graph.getNeighbors(1)).toEqual([2, 3]);
  });
  it('can get the number of nodes in a graph', () => {
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    expect(graph.size()).toEqual(4);
  });
  it('can conduct a depth-first preorder traversal of a graph', () => {

  });
});