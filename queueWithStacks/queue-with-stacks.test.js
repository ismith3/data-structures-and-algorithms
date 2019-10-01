'use strict';

class StackQueue {
  constructor() {
    this.currentStack = 1;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    if(this.currentStack === 1) {
      let currrent = this.stack1.top;
      while(current.next) {
        this.stack2.push(current.value);
        current = current.next;
        this.stack1.pop();
      }
    }
    this.stack2.push(value);
    let current = this.stack2.top();
    while(current.next) {
      this.stack1.push(current.value);
      current = current.next;
      this.stack2.pop();
    }
    return this.stack1;
  }

  dequeue() {
    if(this.currentStack === 1) {
      return this.stack1.pop();
      
    }
  }
}

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

describe('Testing Stack implementation', () => {
  it('Sets top to null when creating a new stack instance', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
  });
  it('Successfully pushes new nodes to the stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.top.value).toStrictEqual(1);
    expect(stack.top.next.value).toStrictEqual(2);
    expect(stack.top.next.next.value).toStrictEqual(3);
  });
  it('Successfully pops an item from the top of the stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    stack.pop();
    expect(stack.top.value).toStrictEqual(2);
    expect(stack.pop()).toStrictEqual(2);
  });
  it('Successfully peeks at the top item in the stack', () => {
    let emptyStack = new Stack();
    let stack = new Stack();
    stack.push(7);
    stack.push(6);
    expect(stack.peek()).toStrictEqual(6);
    expect(emptyStack.peek()).toBeNull();
  });
});

describe('Testing Stack Queue', () => {
  it('can enqueue nodes', () => {
    let queue = new StackQueue();
    console.log(queue.enqueue(1));
    expect(queue.stack1.top.value).toStrictEqual(1);
    queue.enqueue(2);
    expect(queue.stack1.top.next.value).toStrictEqual(2);
  });
});
