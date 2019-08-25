// Reverse string - O(n)
const reverse = (str) => {
  // check input
  if(!str || str.length < 2 || typeof str !== "string") {
    return "That's not a string"
  }

  let newStr = ""
  const strLength = str.length - 1;
  for(let i = strLength; i > 0; i--){
    newStr += str.charAt(i)
  }
  return newStr
}

// Merge sorted arrays O(n)
const mergeSortedArrays = (arr1, arr2) => {
  // check input 
  if(arr1.length === 0) {
    return arr2
  }

  if(arr2.length === 0){
    return arr1
  }

  const arr = []

  let arr1Item = arr1[0]
  let arr2Item = arr2[0]
  let i = 1
  let j = 1

  while(arr1Item || arr2Item){
    if(arr1Item < arr2Item){
      arr.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      arr.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  
  }

  return arr
}
// Optional: Two Sum
// Optional: Maximum Subarray
// Optional: Move Zeroes
// Optional: Contains Duplicate
// Optional: Rotate Array


// reverse
console.log(reverse("hello world"))

// merged arrays
console.log(mergeSortedArrays([1, 2, 4, 30, 33, 34], [3, 5, 31]))