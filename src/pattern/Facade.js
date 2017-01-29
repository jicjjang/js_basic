class Car {
  ride() {
    console.log("Let's ride!")
  }

  parking() {
    console.log("Go to garage!")
  }
}

class Light {
  turnOn() {
    console.log("Turnon the light")
  }

  turnOff() {
    console.log("Turnoff the light")
  }
}

class Dog {
  giveFood() {
    console.log("Nyameenyamee")
  }

  sayHello() {
    console.log("Walwal")
  }
}

class HomeFacade {
  constructor(car, light, dog) {
    this.car = car
    this.light = light
    this.dog = dog
  }

  goOutside() {
    this.dog.giveFood()
    this.light.turnOff()
    this.car.ride()
  }


  goInside() {
    this.car.parking()
    this.dog.sayHello()
    this.light.turnOn()
  }

}

class HomeManager {
  constructor() {
    this.homeFacade = new HomeFacade(new Car(), new Light(), new Dog())
  }

  goOutside() {
    console.log("Let's go outside!")
    this.homeFacade.goOutside()
    console.log("\n\n")
  }

  goInside() {
    console.log("Let's go outside!")
    this.homeFacade.goInside()
    console.log("\n\n")
  }
}

// After build

var home = new HomeManager();
home.goOutside();
home.goInside();
