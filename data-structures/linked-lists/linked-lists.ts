interface Node {
  value: number
  next: null
}

class ListNode {
  value: number
  next: Node | null
  constructor(value: number, next: Node | null = null){
    this.value = value
    this.next = next
  }
}

class LinkedList {
  head = null
  size = 0

  append = (value: number) => {
    if(this.head === null) {
      this.head = new ListNode(value)
      this.size++
    } else {
      let node = this.head
      while(node.next !== null) {
        node = node.next
      }
      node.next = new ListNode(value)
      this.size++
    }
    return this.head
  }

  prepend = (value: number) => {
    if(this.head !== null) {
      const temp = new ListNode(value, this.head)
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
      const newNode = new ListNode(value)
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
      this.size--
      return this.head
    }
  }

  length = () => {
    return this.size
  }

  printList = () => {
    const arr = []
    let node = this.head
    while(node !== null){
      arr.push(node.value)
      node = node.next
    }
    return arr
  }

}

const linkedList = new LinkedList()
linkedList.append(10)
linkedList.append(15)
linkedList.insert(7, 10)
linkedList.prepend(20)
console.log(linkedList.printList())
linkedList.append(9)
console.log(linkedList.printList())
linkedList.remove(7)
console.log(linkedList.printList())