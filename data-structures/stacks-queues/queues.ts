// Queues can be implemented using Arrays or Linked Lists

// Arrays: Pop the first element of the queue and shift all elements towards the left

// LinkedLists: Pop the head from the list and let the next element in the queue be the new head

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


class Queue {
  first = null
  last = null
  length = 0

  peek = () => {
    return this.first
  }

  enqueue = (value) => {
    const node = new LinkedListNode(value)
    if(this.length === 0) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    this.length++
    return this
  }

  dequeue = () => {
    if(!this.first) {
      return null
    }

    if(this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.length--
    return this
  }
}

const queue = new Queue()
queue.enqueue("google")
queue.enqueue("discord")
queue.enqueue("facebook")
console.log(queue)

queue.dequeue()
queue.dequeue()
console.log(queue)