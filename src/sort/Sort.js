class Sort {
  constructor(data = []) {
    this.data = data;
  }

  bubbleSort() {
    _printCurrentStatus(1, this.data);
    for (var i=0; i<this.data.length-1; i++) {
      for (var j=0; j<this.data.length-1; j++) {
        if (this.data[j] > this.data[j+1]) {
          var temp = this.data[j];
          this.data[j] = this.data[j+1];
          this.data[j+1] = temp;
        }
      }
      _printCurrentStatus(i+2, this.data);
    }
  }

  selectionSort() {
    _printCurrentStatus(1, this.data);
    for (var i=0; i<this.data.length-1; i++) {
      var min = this.data[i];
      for (var j=i; j<this.data.length; j++) {
        if (this.data[j] < this.data[min]) {
          min = j;
        }
      }
      var temp = this.data[i];
      this.data[i] = this.data[min];
      this.data[min] = temp;
      _printCurrentStatus(i+2, this.data);
    }
  }

  insertionSort() {
    _printCurrentStatus(1, this.data);
    for(var i=1; i<this.data.length; i++) {
      for(var j=i; j>=1; j--) {
        if (this.data[j] < this.data[j-1]) {
          var temp = this.data[j];
          this.data[j] = this.data[j-1];
          this.data[j-1] = temp;
        }
      }
      _printCurrentStatus(i+1, this.data);
    }
  }

  shellSort() {
    var size = this.data.length;
    var interval = size;
    _printCurrentStatus("init data", this.data);
    while (interval > 1) {
      interval = parseInt(interval / 3) + 1;  // 4, 2, 1
      for (var i=0; i<interval; i++) {
        for (var j=i+interval; j<size; j+=interval) {
          if (this.data[j-interval] > this.data[j]) {
            var temp = this.data[j-interval];
            this.data[j-interval] = this.data[j];
            this.data[j] = temp;
          }
        }
        _printCurrentStatus("gap " + interval, this.data);
      }
    }
  }

  _printCurrentStatus(seq, data) {
    var temp = seq + ": ";
    for (var i=0; i<data.length; i++) {
      temp += data[i] + " ";
    }
    console.log(temp);
  }
}
