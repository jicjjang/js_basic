class AnimalFactory {
  static create(type) {
    switch(type) {
      case "cat": case "Cat":
        return new Cat()
        break
      case "dog": case "Dog":
        return new Dog()
        break
      case "duck": case "Duck":
        return new Duck()
        break
    }
    return new Animal()
  }
}

class Animal {
  howling() {
    console.log("what's your name?");
  }
}

class Cat extends Animal {
  howling() {
    console.log("meow");
  }
}

class Dog extends Animal {
  howling() {
    console.log("wal");
  }
}

class Duck extends Animal {
  howling() {
    console.log("ggwak");
  }
}

// After build

var a = AnimalFactory.create('cat');
var b = AnimalFactory.create('Dog');
var c = AnimalFactory.create('Duck');
var d = AnimalFactory.create();

a.howling();    // meow
b.howling();    // wal
c.howling();    // ggwak
d.howling();    // what's your name?
