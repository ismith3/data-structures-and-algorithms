'use strict';

const Graph = require('./graph');

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