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