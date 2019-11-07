'use strict';

const HashTable = require('./hash-table.js');

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