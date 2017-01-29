class Subject {
  constructor() {
    this.observers = []
  }

  subscribeObserver(observer) {
    this.observers.push(observer)
  }

  unsubscribeObserver(observer) {
    let index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }

  notifyObserver(observer) {
    let index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers[index].notify(index)
    }
  }

  notifyAllObservers() {
    for (let i = 0; i < this.observers.length; i++){
      this.observers[i].notify(i)
    };
  }
}

class Observer {
  notify(index) {
    console.log("Observer " + (index + 1) + " is notified!")
  }
}

// After build

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2);
subject.notifyObserver(observer4);

subject.notifyAllObservers();
