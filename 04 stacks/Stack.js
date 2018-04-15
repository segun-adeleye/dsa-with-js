/**
 * An implementation of the Stack Abstract Data Type (ADT)
 *
 * @class Stack
 */
class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  /**
   * Gets the number of elements currently in the stack
   * @returns {number} - The number of elements in the stack
   */
  get length() {
    return this.top;
  }

  /**
   * Adds a new element to the top of the stack
   * @param {any} element - The element to be added to the stack
   */
  push(element) {
    this.dataStore[this.top++] = element;
  }

  /**
   * Returns the element at the top of the stack and moves the pointer a step below
   * @returns {any} - The element at the top of the stack
   */
  pop() {
    return this.dataStore[--this.top];
  }

  /**
   * Checks the element at the top of the stack
   * @returns {any} - The element at the top of the stack
   */
  peek() {
    return this.dataStore[this.top - 1];
  }

  /**
   * Clears the stack
   */
  clear() {
    this.top = 0;
  }
}

module.exports = Stack;
