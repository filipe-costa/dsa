
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const quickSort = (arr, low, high) => {
  if(low < high) {
   let p: any = partition(arr, low, high)
   quickSort(arr, low, p)
   quickSort(arr, p + 1, high)
  }
}

const partition = (arr, low, high) => {
  const pivot = arr[Math.floor(low + (high - low) / 2)]
  while(true){
    while(arr[low] < pivot){
      low++
    }

    while(arr[high] > pivot){
      high--
    }

    if(low >= high){
      return high
    }

    swap(arr, low, high)

    low++
    high--
  }
}

const swap = (arr, low, high) => {
  const temp = arr[low]
  arr[low] = arr[high]
  arr[high] = temp
}

console.log("Before sorting: ", numbers)
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)