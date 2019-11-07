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