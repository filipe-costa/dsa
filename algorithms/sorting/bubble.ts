// 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const bubbleSort = (arr) => {
  // When using "let" for variable declaration inside the do, it will bind the variable to the "do" scope, which is not accessible by the "while"
  // I changed it to var, since it will be binded to the function scope, i.e. to the top.
  do {
    var swapped = false
    for(let i = 1; i <= arr.length - 1; i++) {
      if(arr[i - 1] > arr[i]){
        swap(arr, i)
        swapped = true
      }
    }
  } while(swapped)
}

const swap = (arr, i) => {
  const temp = arr[i - 1]
  arr[i - 1] = arr[i]
  arr[i] = temp
}


console.log(numbers)
bubbleSort(numbers)
console.log(numbers)