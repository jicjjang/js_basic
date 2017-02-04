// Combination of functions.

class Display {
  draw() {}
}

class BasicRoad extends Display {
  draw() {
    console.log("draw basic rload")
  }
}

class DisplayDecorator extends Display {
  constructor(decoratorDisplay) {
    super()       // It should mark "Super" because you can not use this before.
    this.decoratorDisplay = decoratorDisplay
  }

  draw() {
    this.decoratorDisplay.draw()
  }
}

class LaneDecorator extends DisplayDecorator {
  constructor(decoratedDisplay) {
    super(decoratedDisplay)
  }

  draw() {
    super.draw()
    this.drawLane()
  }

  drawLane() {
    console.log("draw lane")
  }
}

class TrafficDecorator extends DisplayDecorator {
  constructor(decoratedDisplay) {
    super(decoratedDisplay)
  }

  draw() {
    super.draw()
    this.drawTraffic()
  }

  drawTraffic() {
    console.log("draw traffic")
  }
}

// After build

var basic = new BasicRoad();
basic.draw();

var lane = new LaneDecorator(basic);
lane.draw();

var traffic = new TrafficDecorator(basic);
traffic.draw();
