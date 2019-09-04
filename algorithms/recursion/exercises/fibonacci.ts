class Fibo {
  value = null
  constructor(value){
    this.value = value
  }

  recursive = (n) => { // O(2 ^ n) or O(n)
    if(n < 2) {
      return n
    }
    return this.recursive(n - 1) + this.recursive(n - 2)
  }

  iterative = () => {
    if(this.value < 2) {
      return this.value
    }

    let total = 1
    let prev = 1
    for(let i = 2; i < this.value; i++){
      const temp = total
      total += prev
      prev = temp
    }

    return total
  }

  getTotalWithRecursion = () => {
    console.log(this.recursive(this.value))
  }

  getTotalWithIteration = () => {
    console.log(this.iterative())
  }
}

const fibo = new Fibo(10)
fibo.getTotalWithRecursion()
fibo.getTotalWithIteration()