
class Graph {
  numberOfNodes = 0
  adjacentList = {}

  addVertex = (vertex) => {
    if(!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = []
      this.numberOfNodes++
    }
  }

  addEdge = (vertex1, vertex2) => {
    this.adjacentList[vertex1].push(vertex2)
    this.adjacentList[vertex2].push(vertex1)
  }

  showConnections = () => {
    const nodes = Object.keys(this.adjacentList)

    for(let node of nodes) {
      let nodeConnections = this.adjacentList[node]
      let connections = ""
      let vertex
      for(vertex of nodeConnections){
        connections += vertex + " "
      }
      console.log(`${node} --> ${connections}`)
    }
  }
}

const myGraph = new Graph()
myGraph.addVertex("0")
myGraph.addVertex("1")
myGraph.addVertex("2")
myGraph.addVertex("3")
myGraph.addVertex("4")
myGraph.addVertex("5")
myGraph.addVertex("6")

myGraph.addEdge("3", "1")
myGraph.addEdge("3", "4")
myGraph.addEdge("4", "2")
myGraph.addEdge("4", "5")
myGraph.addEdge("1", "2")
myGraph.addEdge("1", "0")
myGraph.addEdge("0", "2")
myGraph.addEdge("6", "5")

myGraph.showConnections()