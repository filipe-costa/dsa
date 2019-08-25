class HashTable {
  constructor(size){
    this.data = new Array(size)
  }
  _hash(key){
    let hash = 0
    for(let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  } // O(1)

  set(key, value){
    const address = this._hash(key)
    if(!this.data[address]){
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  } // Worst case - O(n)

  get(key){
    const address = this._hash(key)
    const currentBucket = this.data[address]
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  } // Worst case - O(n)

  keys() {
    const keysArray = []
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }
}

const myHashTable = new HashTable(50)
const grapesHash = myHashTable._hash("grapes")
const applesHash = myHashTable._hash("apples")
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 45)
myHashTable.get('apples')
console.log(myHashTable.keys())