class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next !== null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail!.next = null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return temp;
  }

  search(value: number) {
    if (this.head === null) return false;
    if (this.head.value === value) return true;
    if (this.tail?.value === value) return true;
    let temp = this.head;
    while (temp !== null && temp.next !== null) {
      temp = temp.next;
      if (temp.value === value) return true;
    }
    return false;
  }
}

/**
 temp = 2 is temp 8 no 
 temp.next = 4 is temp 8 no
 temp.next = 6 is temp 8 no 

 temp = 8 temp is not null but temp.next is so we exit the loop 
 but we need the value its correct 
 */
