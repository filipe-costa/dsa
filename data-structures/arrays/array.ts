class Arr {
  length: number
  data: {}

  constructor(){
    this.length = 0
    this.data = {}
  }

  get(index){
    return this.data[index]
  }

  push(item){
    this.data[this.length] = item
    this.length++
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index]
    this.shift(index)
    return item
  }

  shift(index) {
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const newArray = new Arr()
newArray.push("hi")
newArray.push("you")
newArray.push("!")
newArray.delete(0)
newArray.push("are")
newArray.push("nice")
newArray.delete(1)
console.log(newArray)