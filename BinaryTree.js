class BinaryTree {
  constructor(value) {
    value ? this.add(value) : (this.root = null);
  }
  add(value) {

    const block = {
      value: value,
      left: null,
      right: null,
    };
    let current = null;

    if (this.root === null) {
      this.root = block;
    } else {
      current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = block;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = block;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  }

  search(value) {
    let found = false;
    let current = this.root;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }
}

const bt = new BinaryTree(86);
bt.add(55);
bt.add(0);
bt.add(-8);
bt.add(9);
bt.add(27);
bt.add(8);
bt.add(7);

console.log(bt.search(99));
