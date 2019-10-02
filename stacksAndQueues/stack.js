'use strict';

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new StackNode(value);
    if(this.top) {
      node.next = this.top;
    }
    this.top = node;
  }

  pop() {
    let popped = this.top;
    if(this.top) {
      this.top = this.top.next;
    }
    return popped.value;
  }

  peek() {
    if(this.top) {
      return this.top.value;
    }
    return null;
  }
}

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = Stack;