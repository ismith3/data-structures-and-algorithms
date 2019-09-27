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