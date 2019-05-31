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

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let node = new QueueNode(value);
    let current = this.front;
    while(current) {
      if(current.next) {
        current = current.next;
      }
      else {
        current.next = node;
        node.prev = current;
        return;
      }
    }
    this.front = node;
  }

  dequeue() {
    let dequeued = this.front;
    if(this.front) {
      this.front = this.front.next;
      this.front.prev = null;
      return dequeued.value;
    }
    return dequeued.value;
  }

  peek() {
    if(this.front) {
      return this.front.value;
    }
    return this.front;
  }
}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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

describe('Testing Queue implementation', () => {
  it('Sets front to null when creating a new queue instance', () => {
    let queue = new Queue();
    expect(queue.front).toBeNull();
  });
  it('Successfully adds a new node to the back of the queue via enqueue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toStrictEqual(1);
    expect(queue.front.next.value).toStrictEqual(2);
    expect(queue.front.next.prev.value).toStrictEqual(1);
  });
  it('Successfully dequeues an item and returns it\'s value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.front.value).toStrictEqual(2);
    expect(queue.front.prev).toBeNull();
    expect(queue.front.next.value).toStrictEqual(3);
  });
  it('Successfully peeks at the front item in the queue and returns it\'s value', () => {
    let queue1 = new Queue();
    let queue2 = new Queue();
    queue1.enqueue(1);
    expect(queue1.peek()).toStrictEqual(1);
    expect(queue2.peek()).toBeNull();
  });
});