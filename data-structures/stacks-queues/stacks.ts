// Stacks can be implemented using Arrays or Linked Lists

// Arrays: Pop the last element of the array

// LinkedLists: Pop the top from the list and let the next element in the stack be the new top

interface ListNodeType {
  value: number | null,
  next?: null
}

class LinkedListNode<ListNodeType>{
  value = null
  next = null
  constructor(value){
    this.value = value
  }
}


class LinkedListStack {
  top = null
  bottom = null
  length = 0

  peek = () => {
    return this.top
  }

  push = (value) => {
    const node = new LinkedListNode(value)

    if(this.length === 0) {
      this.top = node
      this.bottom = node
    } else {
      const holdingPointer = this.top
      this.top = node
      this.top.next = holdingPointer
    }

    this.length++
    return this
  }

  pop = () => {
    if(!this.top) {
      return null
    }

    if(this.top === this.bottom) {
      this.bottom = null
    }

    const top = this.top
    let next = top.next
    this.top = next
    this.length-- 
    return top
  }
}

class ArrayStack {
  array = []

  peek = () => {
    return this.array[this.array.length - 1]
  }

  push = (value) => {
    this.array.push(value)
    return this
  }

  pop = () => {
    this.array.pop()
    return this
  }
}

const linkedListStack = new LinkedListStack()
linkedListStack.push("google")
linkedListStack.push("facebook")
linkedListStack.push("udemy")
console.log(linkedListStack)
linkedListStack.pop()
linkedListStack.pop()
linkedListStack.pop()

const arrayStack = new ArrayStack()
arrayStack.push("google")
arrayStack.push("facebook")
arrayStack.push("udemy")
console.log(arrayStack)
arrayStack.pop()
arrayStack.pop()
console.log(arrayStack)