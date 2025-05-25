import { describe, it, expect } from 'vitest';
import Stack from '../src/stack';

describe('Should ensure correct stack behavior', () => {
  it('initializes with length 0', () => {
    const stack = new Stack<number>();
    expect(stack.length).toBe(0);
  });

  it('push() adds elements to the stack', () => {
    const stack = new Stack<string>();
    stack.push('a');
    stack.push('b');
    expect(stack.length).toBe(2);
    expect(stack.peek()).toBe('b');
  });

  it('pop() removes and returns the top element', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
  });

  it('pop() returns undefined on empty stack', () => {
    const stack = new Stack<number>();
    expect(stack.pop()).toBeUndefined();
  });

  it('peek() returns top element without removing it', () => {
    const stack = new Stack<string>();
    stack.push('first');
    expect(stack.peek()).toBe('first');
    expect(stack.length).toBe(1);
  });

  it('handles push and pop with different types', () => {
    const numberStack = new Stack<number>();
    numberStack.push(42);
    expect(numberStack.peek()).toBe(42);

    const stringStack = new Stack<string>();
    stringStack.push('hello');
    expect(stringStack.peek()).toBe('hello');
  });

  it('works in LIFO order', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });
});
