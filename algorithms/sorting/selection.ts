// 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const selectionSort = (arr) => {
  const length = arr.length
  for(let i = 0; i < length - 1; i++){
    let min_index = i
    for(let j = i + 1; j < length; j++){
      if(arr[j] < arr[min_index]){
        min_index = j
      }
    }

    if(min_index !== i){
      swap(arr, i, min_index)
    }
  }
}

const swap = (arr, i, min_index) => {
  const temp = arr[min_index]
  arr[min_index] = arr[i]
  arr[i] = temp
}


console.log(numbers)
selectionSort(numbers)
console.log(numbers)