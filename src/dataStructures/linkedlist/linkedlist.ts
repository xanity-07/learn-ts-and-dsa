type Node<T> = {
  value: T;
  next: Node<T> | null;
};

class LinkedList<T> {
  length: number;
  constructor(public head: Node<T> | null, public tail: Node<T> | null) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(item: T): Node<T> {
    const node: Node<T> = { value: item } as Node<T>;
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }
  popBack(): Node<T> | null {
    if (this.head === null) {
      return null;
    }
    let temp: Node<T> | null = this.head as Node<T>;
    let pre: Node<T> | null = this.head as Node<T>;
    while (temp !== null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;

    if (this.length === 0) {
      return null;
    }
    return temp;
  }
}
