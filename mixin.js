class Person {
  constructor(domNode) {
    const PARENT = domNode.parentNode

    this.target = domNode;
    this.top = this.target.offsetTop;
    this.left = this.target.offsetLeft;
    this.down = PARENT.clientHeight - (domNode.offsetTop + domNode.offsetHeight);
    this.right = PARENT.clientWidth - (domNode.offsetLeft + domNode.offsetWidth);
  }

  getTop() {
    return this.top + 'px';
  }

  getDown() {
    return this.down + 'px';
  }

  getRight() {
    return this.right + 'px';
  }

  getLeft() {
    return this.left + 'px';
  }

  setTop(top) {
    if (this.top <= -10 && top < 0) return; // 상단 끝
    if (this.top >= 710 && top > 0) return; // 단 끝

    if (top.includes?.('px')) {
      top = top.replace('px', '');
    }

    this.top += top;
  }

  setDown(down) {
    if (down.includes?.('px')) {
      down = down.replace('px', '');
    }

    this.down += down;
  }

  setRight(right) {
    if (right.includes?.('px')) {
      right = right.replace('px', '');
    }

    this.right += right;
  }

  setLeft(left) {
    if (this.left <= -23 && left < 0) return; // 왼쪽 끝

    if (this.left >= 667 && left > 0) return; // 오른쪽 끝

    if (left.includes?.('px')) {
      left = left.replace('px', '');
    }

    this.left += left;
  }

  move(key) {
    switch (key) {
      case 'ArrowUp' :
        this.setTop(-10);
        this.target.style.top = this.getTop();
        break;
      case 'ArrowDown' :
        this.setTop(10);
        this.target.style.top = this.getTop();
        break;
      case 'ArrowLeft' :
        this.setLeft(-10);
        this.target.style.left = this.getLeft();
        break;
      case 'ArrowRight' :
        this.setLeft(10);
        this.target.style.left = this.getLeft();
        break;
      default:
        break;
        
    }
  }
}
