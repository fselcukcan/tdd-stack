const Stack = require('../stack.js')

describe('my stack implementation', () => {

  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it("is created empty", () => {
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})
  })

  it("can push items to the top", () => {
    stack.push('A')
    expect(stack.top).toBe(0)
    expect(stack.peek).toBe('A')
  })

  it("can pop items off the top", () => {
    stack.push('A')
    stack.pop()
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})
  })
})