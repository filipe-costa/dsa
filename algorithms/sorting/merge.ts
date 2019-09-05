
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const mergeSort = (arr) => {
  if(arr.length === 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

const merge = (left, right) => {
  const result = []
  let i = 0
  let j = 0

  while(i < left.length && j < right.length) {
    if(left[i] < right[j]){
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  // left.slice(i) || right.slice(j) just return a new array with whatever is left in each of those sublists

  return [...result, ...left.slice(i), ...right.slice(j)]
}


const result = mergeSort(numbers)
console.log(result)