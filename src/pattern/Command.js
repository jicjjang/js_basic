class moneyManager {
  vehicle(kind, money) {
    console.log("vehicle: " + kind + ', ' + money)
  }

  eat(kind, money) {
    console.log("eat: " + kind + ', ' + money)
  }

  clothes(kind, money) {
    console.log("clothes: " + kind + ', ' + money)
  }

  execute(status, kind, money) {
    if (this[status]) {
      return this[status](kind, money)
    } else {
      throw "error!"
    }
  }
}

var testMoneyManager = new moneyManager();
testMoneyManager.execute("aaaa", "b", 1234);              // Uncaught error!
testMoneyManager.execute("vehicle", "car", 831683);       // vehicle: car, 831683
testMoneyManager.execute("clothes", "covernat", 131683);  // clothes: covernat, 831683
testMoneyManager.execute("eat", "rice", 991683);          // eat: rice, 831683
