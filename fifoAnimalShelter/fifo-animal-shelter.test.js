class AnimalShelter {
  constructor() {
    this.front = null;
  }

  enqueue(animal) {
    if(this.front) {
      let current = this.front;
      while(current.next) {
        current = current.next;
      }
      current.next = animal;
    } else {
      this.front = animal;
    }
  }

  dequeue(pref) {
    if(pref && this.front) {
      let current = this.front;
      while(current.next) {
        if(pref.toLowerCase() === 'cat' && current instanceof Cat) {
          return current;
        } else if(pref.toLowerCase() === 'dog' && current instanceof Dog) {
          return current;
        } else {
          current = current.next;
        }
      }
      return current;
    } else {
      let selectedAnimal = this.front;
      this.front = this.front.next;
      delete selectedAnimal.next;
      delete selectedAnimal.prev;
      return selectedAnimal;
    }
  }
}

class Dog {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.next = null;
    this.prev = null;
  }
}

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.next = null;
    this.prev = null;
  }
}

describe('Testing animal shelter queue', () => {
  it('can enqueue cats and dogs into an empty queue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue(new Dog('Kujo', 'Brown'));
    expect(shelter.front).toBeInstanceOf(Dog);
    expect(shelter.front.name).toBe('Kujo');
    shelter.enqueue(new Cat('Tom', 'Gray'));
    expect(shelter.front.next.name).toBe('Tom');
    expect(shelter.front.next).toBeInstanceOf(Cat);
  });
  it('can dequeue preferred animal', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue(new Dog('Kujo', 'Brown'));
    shelter.enqueue(new Cat('Tom', 'Gray'));
    shelter.enqueue(new Dog('Fido', 'Black'));
    let cat = shelter.dequeue('Cat');
    expect(cat).toBeInstanceOf(Cat);
    expect(cat.name).toBe('Tom');
    let dog = shelter.dequeue();
    expect(dog).toBeInstanceOf(Dog);
    expect(dog.name).toBe('Kujo');
  });
});