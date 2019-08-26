interface Node {
  value: number
  next: null
}

class LinkedListNode {
  value: number
  next: Node | null
  constructor(value: number){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  head = null
  tail = null
  size = 0

  append = (value: number) => {
    if(this.head === null) {
      this.head = new LinkedListNode(value)
      this.tail = this.head
      this.size++
    } else {
      let node = this.head
      while(node.next !== null) {
        node = node.next
      }
      node.next = new LinkedListNode(value)
      this.tail = node.next
      this.size++
    }
    return this.head
  }

  prepend = (value: number) => {
    if(this.head !== null) {
      const temp = new LinkedListNode(value)
      temp.next = this.head
      this.head = temp
      this.size++
      return this.head
    }
  }

  insert = (replace: number, value: number) => {
    if(this.head !== null){
      let node = this.head
      while(node.value !== replace){
        node = node.next
      }
      const temp = node.next
      const newNode = new LinkedListNode(value)
      newNode.next = temp
      if(temp === null){
        this.tail = newNode
      }
      node.next = newNode
      this.size++
      return this.head
    }
  }

  remove = (value: number) => {
    if(this.head !== null) {
      let node = this.head
      while(node.next.value !== value) {
        node = node.next
      }
      const temp = node.next.next
      node.next = temp
      this.tail = node
      this.size--
      return this.head
    }
  }

  length = () => {
    return this.size
  }

  printList = (text?: string) => {
    let arr = []
    let node = this.head
    while(node !== null){
      arr.push(node.value)
      node = node.next
    }
    console.log(`${text}`)
    console.log(arr)
    console.log()
  }
}

interface DoubleListNode {
  next: null,
  prev: null,
  value: number
}

class DoubleLinkedListNode {
  next: DoubleListNode | null
  prev: DoubleListNode | null
  value: number
  constructor(value: number){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  head = null
  tail = null
  size = 0

  append = (value: number) => {
    if(this.head === null) {
      this.head = new DoubleLinkedListNode(value)
      this.tail = this.head
      this.size++
    } else {
      let node = this.head
      while(node.next !== null) {
        node = node.next
      }
      node.next = new DoubleLinkedListNode(value)
      node.next.prev = node
      this.tail = node.next
      this.size++
    }
    return this.head
  }

  prepend = (value: number) => {
    if(this.head !== null) {
      const currentNode = this.head
      const temp = new DoubleLinkedListNode(value)
      currentNode.prev = temp
      temp.next = currentNode
      this.head = temp
      this.size++
      return this.head
    }
  }

  insert = (value: number, replace: number) => {
    if(this.head !== null){
      let node = this.head
      while(node.value !== replace){
        node = node.next
      }
      const temp = node.next
      const newNode = new DoubleLinkedListNode(value)
      newNode.next = temp
      node.next = newNode
      this.size++
      return this.head
    }
  }

  remove = (value: number) => {
    if(this.head !== null) {
      let node = this.head
      while(node.next.value !== value) {
        node = node.next
      }
      const temp = node.next.next
      node.next = temp
      this.tail = node
      this.size--
      return this.head
    }
  }

  length = () => {
    return this.size
  }

  printList = () => {
    let arr = []
    let node = this.head
    while(node !== null){
      arr.push(node.value)
      node = node.next
    }
    console.log("Forwards: \n", arr)

    arr = []
    node = this.tail
    while(node !== null){
      arr.push(node.value)
      node = node.prev
    }
    console.log("Backwards: \n", arr)
  }

}

const linkedList = new LinkedList()
linkedList.printList("Appending at the head")
linkedList.append(10)
linkedList.printList("Appending to the head since empty")
linkedList.append(15)
linkedList.printList("Appending")
linkedList.insert(10, 7)
linkedList.printList("Insertion")
linkedList.prepend(20)
linkedList.printList("Prepending at head")
linkedList.append(9)
linkedList.printList("Appending")
linkedList.remove(7)
linkedList.printList("Removal")
linkedList.remove(9)
linkedList.printList("Removal")
linkedList.insert(15, 9)
linkedList.printList("Insertion at the tail")

const doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.append(20)
doubleLinkedList.append(10)
doubleLinkedList.prepend(30)
doubleLinkedList.printList()