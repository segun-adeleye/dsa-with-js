/**
 * List ADT
 *
 * @class List
 */
class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
    return this;
  }

  find(element) {
    for (let i = 0; i < this.listSize; i++) {
      if (this.dataStore[i] == element) return i;
    }
    return -1;
  }

  remove(element) {
    let elementIndex = this.find(element);
    if (elementIndex > -1) {
      this.dataStore.splice(elementIndex, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  get length() {
    return this.listSize;
  }

  toString() {
    return this.dataStore;
  }

  next() {
    ++this.pos;
    return this;
  }

  prev() {
    --this.pos;
    return this;
  }

  get currPos() {
    return this.pos;
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  moveTo(pos) {
    this.pos = pos;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  front() {
    this.pos = 0;
  }

  end() {
    if (this.listSize > 0) this.pos = this.listSize - 1;
  }
}

module.exports = List;
