// 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const insertionSort = (arr) => {
  let i = 1
  while (i < arr.length){
    let x = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > x){
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = x
    i++
  }
}

console.log(numbers)
insertionSort(numbers)
console.log(numbers)