const strings: string[] = ['a', 'b', 'c', 'd']
// 4 * 4 bytes of storage

// accessing
strings[2] // O(1)

// push
strings.push("e") // O(1) but it can be O(n)

// pop
strings.pop()
strings.pop() // O(1)

// unshift
strings.unshift("x") // O(n)

// splice
strings.splice(2, 0, "f") // O(n)

console.log(strings)