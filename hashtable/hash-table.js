'use strict';

const { Keccak } = require('sha3');

function bucket(obj) {
  let array = [];
  array.push(obj);
  return array;
}

class HashTable {
  add(key, val) {
    let currentBucket = this[this.hash(key)];

    let obj = {
      [key]: val,
    };

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (Object.keys(currentBucket[i])[0] === key) {
          this[this.hash(key)][i] = obj;
        }
      }

    } else {
      this[this.hash(key)] = bucket(obj);
    }
  }

  get(key) {
    let bucket = this[this.hash(key)];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (Object.keys(bucket[i])[0] === key) {
          return bucket[i][key];
        }
      }
    }
  }

  contains(key) {
    let bucket = this[this.hash(key)];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][key]) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  hash(key) {
    let hash = new Keccak(256);
    hash.update(key.toString());
    return hash.digest('hex');
  }
}

module.exports = HashTable;

describe('testing hash table implementation', () => {
  it('can create an empty hash table', () => {
    let set = new HashTable();
    expect(set).toBeDefined();
    expect(set).toEqual({});
  });
  it('can add a key value pair to the hash table', () => {
    let set = new HashTable();
    set.add('answer', 42);
    expect(set[set.hash('answer')]).toEqual([{answer: 42}]);
    set.add('fucks given', 0);
    expect(set[set.hash('fucks given')]).toEqual([{'fucks given': 0}]);
    set.add('answer', 29);
    expect(set[set.hash('answer')]).toEqual([{'answer': 29}]);
  });
  it('can get a value for a given key', () => {
    let set = new HashTable();
    set.add('hello', 'world');
    expect(set.get('hello')).toEqual('world');
  });
  it('can check if the table contains a given key already', () => {
    let set = new HashTable();
    expect(set.contains(69)).toEqual(false);
    set.add(2, 'hello');
    expect(set.contains(2)).toEqual(true);
  });
});