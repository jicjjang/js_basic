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

  mergeSort(start, end) {
    var mid = null;

    if (start < end) {
      mid = (start + end) / 2;
      mergeSort(start, mid);
      mergeSort(mid+1, end);
      _merge(start, mid, end);
    }
  }

  _merge(start, mid, end) {
    var tempStart = start;
    var tempEnd = end;
    var tempData = [];
    var i = 0;

    for (i=0; tempStart <= mid && tempEnd <= end; i++) {
      if (this.data[tempStart] < this.data[tempEnd]) {
        tempData[i] = this.data[tempStart];
        tempStart++;
      } else {
        tempData[i] = this.data[tempEnd];
        tempEnd++;
      }
    }

    // Add remaining data.
    if (tempStart <= mid) { // Left data
      for (var j=tempStart; tempStart <= mid; j++) {
        tempData[i] = this.data[j];
      }
    } else {  // Right data
      for (var j=tempEnd; tempEnd <= end; j++) {
        tempData[i] = this.data[j];
      }
    }
  }

  quickSort(left, right) {
    var pivot = this.data[parseInt((left + right) / 2)]; // 가운뎃 값을 pivot으로.
    var l = left;
    var r = right;

    _printCurrentStatus(1, this.data);
    while (l <= r) {
      while (this.data[l] < pivot) {
        l++;
      }
      while (this.data[r] > pivot) {
        r--;
      }
      if (l < r) {
        var temp = null;
        temp = this.data[l];
        this.data[l++] = this.data[r];
        this.data[r++] = temp;
      } else if (l == r) {
        return;
      }
    }

    if (left < r) {
      quickSort(left, r);
    }
    if (l < right) {
      quickSort(l, right);
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
