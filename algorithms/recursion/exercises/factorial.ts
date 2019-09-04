class Factorial {
  value = 0
  
  constructor(value){
    this.value = value
  }

  recursive = (value) => { // O(n)
  
    if(value === 0) {
      return 1
    }

    if(value === 1) {
      return value
    }

    return value * this.recursive(value - 1)
  }

  iterative = (value) => { // O(n)
    if(value === 0) {
      return 1
    }

    if(value === 1) {
      return value
    }

    let total = value

    for(let i = 1; i < value; i++){
      total *= value - i
    }

    return total
  }

  getFactorial = () => {
    if(this.value < 0){
      return 0
    }
    console.log(this.recursive(this.value))
    console.log(this.iterative(this.value))
  }
}



const factor = new Factorial(1)
factor.getFactorial()