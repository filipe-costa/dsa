const user = {
  age: 54,
  name: "Filipe",
  magic: true,
  scream: () => {
    console.log("part of a hash table")
  }
}

user.age // O(1) - lookup
user.spell = "abra kadabra" // O(1) - insertion
user.scream() // O(1) - search
delete user.magic // O(1) - delete

console.log(user)