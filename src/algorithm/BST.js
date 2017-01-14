class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newTreenode = new TreeNode(data);
    var current = this.root;
    if (!this.root) {
      this.root = newTreeNode;
    } else {
      while(1) {
        var parent = current;
        if (data > current.data) {
          current = current.right;
          if (current == null) {
            parent.right = newTreeNode;
            break;
          }
        } else {
          current = current.left;
          if (current == null) {
            parent.left = newTreeNode;
            break;
          }
        }
      }
    }
  }

  inOrder(node) {
    var temp = null;
    if (!node) {
      inOrder(node.left);
      temp += node.toString() + " ";
      inOrder(node.left);
    }
    console.log(temp);
  }

  preOrder(node) {
    var temp = null;
    if (!node) {
      temp += node.toString() + " ";
      preOrder(node.left);
      preOrder(node.left);
    }
    console.log(temp);
  }

  postOrder(node) {
    var temp = null;
    if (!node) {
      postOrder(node.left);
      postOrder(node.left);
      temp += node.getData() + " ";
    }
    console.log(temp);
  }

  getMin() {
    var current = this.root;
    while (!current.left) {
      current = current.left;
    }
    console.log(current.data);
    return current;
  }

  getMax() {
    var current = this.root;
    while (!current.right) {
      current = current.right;
    }
    console.log(current.data);
    return current;
  }

  find(data) {
    var current = this.root;
    var temp = null;
    while (data != current.data) {
      temp += current.data + " ";
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
        console.log("no data");
        return null;
      }
    }
    console.log(temp);
    return current;
  }

  remove(data) {
    var current = this.root;
    var parent = null;

    // Find remove place
    while (data != current.data) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // If has remove element
    if (current) {
      // 1. no left, no right
      if (!current.left && !current.right) {
        if (data === parent.left.data) {
          parent.left = null;
        } else {
          parent.right = null;
        }
        return;
      }
      // 2. Just right value
      if (!current.left) {
        if (data === parent.left.data) {
          parent.left = current.right;
        } else {
          parent.right = current.right;
        }
        return;
      }
      // 3. Just left value
      if (!current.right) {
        if (data === parent.left.data) {
          parent.left = current.left;
        } else {
          parent.right = current.left;
        }
        return;
      }
      // 4. Has two side data
      if (current.left && current.right) {
        var smallVarData = _removeSmallest(current.right);  // Remove smallest value
        current.data = smallVarData;  // Replace smallest value with remove element.
        return;
      }
    }
    console.log("no data");
  }

  _removeSmallest(node) {
    var parent = null;
    while(node.left) {
      parent = node;
      node = node.left;
    }
    parent.left = null;
    return node.data;
  }
}

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  getData() {
    return this.data;
  }
}
