'use strict';

class LinkedList {
  constructor() {
    this.Head = null;
    this.length = 0;
  }

  insert(value) {
    let newNode = new ListNode(value);
    if(this.Head) {
      newNode.Next = this.Head;
    }
    this.Head = newNode;
    this.length++;
  }

  includes(value) {
    let Current = this.Head;

    while(Current !== null) {
      if(Current.Value === value) {
        return true;
      }
      else {
        Current = Current.Next;
      }
      return false;
    }
  }

  toArray() {
    let arr = [];
    let Current = this.Head;

    while(Current !== null) {
      arr.push(Current.Value);
      Current = Current.Next;
    }
    return arr;
  }

  toString() {
    let string = '';
    let Current = this.Head;

    while(Current !== null) {
      if(Current === this.Head) {
        string = string + Current.Value;
        Current = Current.Next;
      } else {
        string = string + ', ' + Current.Value;
        Current = Current.Next;
      }
    }
    return string;
  }

  append(value) {
    let newNode = new ListNode(value);
    let Current = this.Head;
    while(Current !== null) {
      if(Current.Next !== null) {
        Current = Current.Next;
      }
      else {
        Current.Next = newNode;
        this.length++;
        break;
      }
    }
  }

  insertBefore(value, valueToInsert) {
    let Current = this.Head;
    let newNode = new ListNode(valueToInsert);

    while(Current !== null) {
      if(Current.Next.Value !== value && Current.Value !== value) {
        Current = Current.Next;
        continue;
      }
      else if(Current.Next.Value === value) {
        newNode.Next = Current.Next;
        Current.Next = newNode;
        break;
      }
      else if(value === this.Head.Value) {
        newNode.Next = this.Head;
        this.Head = newNode;
        break;
      }
      else {
        throw('Can\'t insert before a value that isn\'t in the list');
      }
    }
    this.length++;
  }

  insertAfter(value, valueToInsert) {
    let Current = this.Head;
    let newNode = new ListNode(valueToInsert);

    while(Current !== null) {
      if(Current.Value === value) {
        newNode.Next = Current.Next;
        Current.Next = newNode;
        this.length++;
        return;
      }
      else {
        Current = Current.Next;
        continue;
      }
    }
    throw('Can\'t insert after a value that isn\'t in the list');
  }

  delete(value) {
    let Current = this.Head;

    if(value === this.Head.Value) {
      this.Head = this.Head.Next;
      this.length--;
      return;
    }
    else {
      while(Current !== null) {
        if(Current.Next.Value === value) {
          Current.Next = Current.Next.Next;
          this.length--;
          return;
        }
        else {
          Current = Current.Next;
        }
      }
    }
    throw('oops!');
  }

  countFromEnd(k) {
    if(k > this.length - 1 || !this.length > 0 || k < 0) {
      return 'Error: specified index is not in list';
    }
    else {
      let Current = this.Head;

      for(let i = 0; i < this.length - k - 1; i++) {
        Current = Current.Next;
      }

      return Current.Value;
    }
  }

  findCenter() {
    if(this.length < 1) {
      return 'Error: Invalid list';
    }
    else {
      let Current = this.Head;

      for(let i = 0; i < Math.ceil((this.length -1) / 2); i++) {
        Current = Current.Next;
      }

      return Current.Value;
    }
  }
}

class ListNode {
  constructor(value) {
    this.Value = value;
    this.Next = null;
  }
}

describe('Testing linked list', () => {
  it('Can successfully instantiate an empty linked list', () => {
    expect(new LinkedList().Head).toStrictEqual(null);
  });
  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.Head.Value).toStrictEqual(1);
  });
});

describe('Testing linked list insertions', () => {
  it('Can successfully add a node to the end of a linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(1);
    list.append(3);
    expect(list.Head.Next.Next.Value).toStrictEqual(3);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.insert(6);
    list.insert(5);
    list.append(7);
    list.append(8);
    expect(list.Head.Next.Next.Value).toStrictEqual(7);
    expect(list.Head.Next.Next.Next.Value).toStrictEqual(8);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(1);
    list.insertBefore(3, 2);
    expect(list.Head.Next.Value).toStrictEqual(2);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insertBefore(2, 1);
    expect(list.Head.Value).toStrictEqual(1);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(2);
    list.insert(1);
    list.insertAfter(2, 3);
    expect(list.Head.Next.Next.Value).toStrictEqual(3);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.insert(8);
    list.insert(7);
    list.insert(6);
    list.insertAfter(8, 9);
    expect(list.Head.Next.Next.Next.Value).toStrictEqual(9);
  });

  it('Can successfully delete a node in the middle of a list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.delete(2);
    expect(list.Head.Next.Value).toStrictEqual(3);
  });

  it('Can successfully delete a node at the beginning of a list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.delete(1);
    expect(list.Head.Value).toStrictEqual(2);
  });

  it('Can successfully delete a node at the end of a list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.delete(3);
    expect(list.Head.Next.Next).toStrictEqual(null);
  });
});

describe('Testing k-th value from end', () => {
  it('Returns error if index is not in list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.countFromEnd(3)).toStrictEqual('Error: specified index is not in list');
  });
  it('Returns error if k is equal to list.length', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.countFromEnd(3)).toStrictEqual('Error: specified index is not in list');
  });
  it('Returns error if k is not a positive integer', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.countFromEnd(-2)).toStrictEqual('Error: specified index is not in list');
  });
  it('Successfully runs when the list has a length of 1', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.countFromEnd(0)).toStrictEqual(1);
  });
  it('Successfully runs if k is in the middle of the list', () => {
    let list = new LinkedList();
    list.insert(6);
    list.insert(5);
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.countFromEnd(2)).toStrictEqual(4);
  });
});

describe('Testing findCenter', () => {
  it('finds the center of a list with length of 1', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.findCenter()).toStrictEqual(1);
  });
  it('finds the center of a list of any length', () => {
    let list = new LinkedList();
    list.insert(7);
    list.insert(6);
    list.insert(5);
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.findCenter()).toStrictEqual(4);
  });
  it('finds the value just right of center in a list with an even length', () => {
    let list = new LinkedList();
    list.insert(6);
    list.insert(5);
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.findCenter()).toStrictEqual(4);
  });
  it('Returns error if list is empty', () => {
    let list = new LinkedList();
    expect(list.findCenter()).toStrictEqual('Error: Invalid list');
  });
});

describe('Testing toString', () => {
  it('Returns a string of all nodes in the list', () => {
    let list = new LinkedList();
    list.insert(6);
    list.insert(5);
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.toString()).toStrictEqual('1, 2, 3, 4, 5, 6');
  });
  it('Returns an empty string when passed in an empty linked list', () => {
    let list = new LinkedList();
    expect(list.toString()).toStrictEqual('');
  });
});
