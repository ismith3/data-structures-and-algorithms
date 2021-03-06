'use strict';

class StackQueue {
  constructor() {
    this.enStack = new Stack();
    this.deStack = new Stack();
  }

  enqueue(value) {
    let current = this.deStack.top;
    while(current !== null) {
      let popped = this.deStack.pop();
      this.enStack.push(popped);
      current = current.next;
    }
    return this.enStack.push(value);
  }

  dequeue() {
    let current = this.enStack.top;
    while(current !== null) {
      let popped = this.enStack.pop();
      this.deStack.push(popped);
      current = current.next;
    }
    return this.deStack.pop();
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
    return node;
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
    queue.enqueue(1);
    expect(queue.enStack.top.value).toStrictEqual(1);
    queue.enqueue(2);
    expect(queue.enStack.top.value).toStrictEqual(2);
  });
  it('can dequeue nodes', () => {
    let queue = new StackQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toStrictEqual(1);
  });
  it('can re-enqueue nodes after a dequeue', () => {
    let queue = new StackQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.enqueue(4);
    expect(queue.enStack.top.next.next.value).toStrictEqual(2);
  });
});
