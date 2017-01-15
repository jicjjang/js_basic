class Graph {
  constructor() {
    this.range = [];
    this.mark = [];
  }

  showGraph() {
    var temp = null;
    for (var i=0; i<this.range.length; i++) {
      temp += this.range[i].vertex + "=> ";
      for (var j=0; j<this.range[i].edge.length; j++) {
        temp += this.range[i].edge[j] + " ";
      }
      console.log(temp);
    }
  }

  addVertex(v, e = []) {
    // 1. Find already existed value.
    for (var i=0; i<this.range.length; i++) {
      if (this.range[i].v == v) {
        console.log("It's alreay existed!");
        return null;
      }
    }
    // 2. Append new vertex
    this.range.push(new Vertex(v, e));
  }

  removeVertex(v) {
    // 1. Remove vertex
    for (var i=0; i<this.range.length; i++) {
      if (this.range[i].vertex == v) {
        this.range.splice(i, 1);
      }
    }
    // 2. If there is an element to remove, remove the edge.
    for (var i=0; i<this.range.length; i++) {
      for (var j=0; j<this.range[i].edge.length; j++) {
        if (this.range[i].edge[j] == v) {
          this.range[i].edge.splice(j, 1);
        }
      }
    }
  }

  addEdge(v1, v2) {
    _addEdgeLoop(v1, v2);
    _addEdgeLoop(v2, v1);
  }

  _addEdgeLoop(v1, v2) {
    for (var i=0; i<this.range.length; i++) {
      if (this.range[i].vertex == v1) {
        for (var j=0; j<this.range[i].edge.length; j++) {
          if (this.range[i].edge[j] == v2) {
            console.log("It's alreay existed!");
            return null;
          }
        }
        this.range[i].edge.push(v2);
        break;
      }
    }
  }

  removeEdge(v1, v2) {
    _removeEdgeLoop(v1, v2);
    _removeEdgeLoop(v2, v1);
  }

  _removeEdgeLoop(v1, v2) {
    for (var i=0; i<this.range.length; i++) {
      if (this.range[i].vertex == v2) {
        for (var j=0; j<this.range[i].edge.length; j++) {
          if (this.range[i].edge[j] == v1) {
            this.range[i].edge.splice(j, 1);
            break;
          }
          if (j == this.range[i].edge.length-1) {
            console.log("has not data");
          }
        }
        break;
      }
    }
  }

  dfs(v) {
    if (this.mark[v] == undefined) {
      console.log("Visited: " + this.range[v].vertex);
      this.mark[v] = true;
    }
    for (var i=0; i<this.range[v].edge.length; i++) {
      var currentEdge = this.range[v].edge[i];
      if (!this.mark[currentEdge]) {
        this.dfs(currentEdge);
      }
    }
    this.mark = [];
  }

  bfs(v) {
    var queue = [];
    this.mark[v] = true;
    queue.push(v);

    while (queue.length > 0) {
      var vertex = queue.shift();  // FIFO
      if (vertex != undefined) {
        console.log('Visited: ' + this.range[vertex]);
        this.mark[vertex] = true;
      }
      for (var i=0; i<this.range[v].edge.length; i++) {
        var currentEdge = this.range[v].edge[i];
        if (!this.mark[currentEdge]) {
          queue.push[currentEdge];
        }
      }
    }
  }
}

class Vertex {
  constructor(v, e = []) {
    this.vertex = v;
    this.edge = e;
  }

  toString() {
    var temp = null;
    tmpe += this.vertex + ': ';
    for (var i=0; i<this.edge.length; i++) {
      temp += this.edge[i];
    }
    return temp;
  }
}
