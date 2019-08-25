// Google question
// Given an array, find the first recurring character

// [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Should return 2


// [2, 1, 1, 2, 3, 5, 1, 2, 4]
// Should return 1

// [2, 3, 4, 5]
// Should return undefined

// const findFirstRecurringCharacter = (arr) => {
//   const found = {
//     steps: 0,
//     value: undefined
//   }
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[i] === arr[j]){
//         if(found.steps === 0 || found.steps > j){
//           found.steps = j
//           found.value = arr[j]
//         }
//       }
//     }
//   }

//   return found.value
// } // O(n ^ 2)

// const findFirstRecurringCharacter = (arr) => {
//   const hashTable = {}

//   for(let i = 0; i < arr.length; i++){
//     if(hashTable[arr[i]] !== undefined){
//       return arr[i]
//     } else {
//       hashTable[arr[i]] = 1
//     }
//   }

//   return undefined
// } // O(n)

const findFirstRecurringCharacter = (arr) => {
  const set = new Set()

  for(let i = 0; i < arr.length; i++){
    if(set.has(arr[i])){
      return arr[i]
    } else {
      set.add(arr[i])
    }
  }

  return undefined
} // O(n)


console.log(findFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(findFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(findFirstRecurringCharacter([2, 3, 4, 5]))
console.log(findFirstRecurringCharacter([2, 5, 5, 2, 3, 4, 5]))