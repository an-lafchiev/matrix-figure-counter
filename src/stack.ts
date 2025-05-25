import type { Node } from 'types/index.js';

export default class Stack<T> {
  private head: Node<T> | undefined;
  public length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }
  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);

    if (!this.length) {
      const head = this.head;
      this.head = undefined;

      return head?.value;
    }

    const node = this.head;
    this.head = node?.prev;

    return node?.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
