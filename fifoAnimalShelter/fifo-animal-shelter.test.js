class AnimalShelter {
  constructor() {
    this.front = null;
  }

  enqueue(animal) {
    if(this.front) {
      let current = this.front;
      while(current) {
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
      let prev = null;
      while(current) {
        prev = current.prev;
        if(current.constructor.name === pref) {

        } else {
          current = current.next;
        }
      }
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
  });
});