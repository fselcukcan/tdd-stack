class Stack {
  constructor() {
    this.top = -1
    this.items = {}
  }
  push(item) {
    this.top += 1
    this.items[this.top] = item
  }
  get peek() {
    return this.items[this.top]
  }
  pop() {
    delete this.items[this.top]
    this.top -= 1
  }
}

module.exports = Stack