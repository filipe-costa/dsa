// A tree contains one root node, one parent can contain multiple child nodes

// Binary tree: a node can only have up to a maximum of two children
// A Binary tree is called balanced if each parent has both children nodes (left and right)

interface TreeNodeType {
  value: number,
  left: TreeNodeType | null,
  right: TreeNodeType | null
}

class TreeNode {
  value = null
  left = null
  right = null

  constructor(value){
    this.value = value
  }
}

class Tree {
  root = null

  // searches for node in a tree
  lookup = (value) => {
    if(!this.root){
      return null
    }
  
    let currentNode = this.root
    while(currentNode !== null) {
      if(value < currentNode.value){
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        currentNode = currentNode.right
      } else if(currentNode.value === value) {
        return currentNode
      } 
    }

    return null
  }

  insert = (value) => {
    const newNode = new TreeNode(value)
    if(!this.root) {
      this.root = newNode
    } else {
      this.traversePreOrder(this.root, newNode)
    }
  }

  // Traverse the left side of the tree
  // Visit root node
  // Traverse the right side of the tree
  traverseInOrder = (node): TreeNodeType => {
    

    return node
  }

  // Visit root node
  // Traverse the left side of the tree
  // Traverse the right side of the tree
  traversePreOrder = (root, newNode) => {
    let currentNode = root
    while(currentNode !== null) {
      if(newNode.value < currentNode.value){
        // If Left node is null, then the current node is a leaf, extended it
        if(!currentNode.left){
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else {
          // If Right node is null, then the current node is a leaf, extended it
        if(!currentNode.right){
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  // Traverse the left side of the tree
  // Traverse the right side of the tree
  // Visit root node
  traversePostOrder = (node):TreeNodeType => {
    return
  }

  remove = (value) => {
    if(!this.root){
      return null
    }

    let currentNode = this.root
    let parentNode = null
    
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode
        currentNode = currentNode.left
      } else if(value > currentNode.value){
        parentNode = currentNode
        currentNode = currentNode.right
      } else {

        // no right child
        if(currentNode.right === null) {
          if(parentNode === null) {
            this.root = currentNode.left
          } else {
            // if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value){
              parentNode.left = currentNode.left
            // if parent < current value, make current left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left
            }
          }
          
        } else if(currentNode.right.left === null) {
          currentNode.right.left = currentNode.left
          // if parent > current value, make current left child a child of parent
          if(currentNode.value < parentNode.value){
            parentNode.left = currentNode.right
          // if parent < current value, make current left child a right child of parent
          } else if(currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right
          }
        } else {
          // find the Right child's left most child
          let leftMostChild = currentNode.right.left
          let leftMostParent = currentNode.right
          while(leftMostChild.left !== null){
            leftMostParent = leftMostChild
            leftMostChild = leftMostChild.left
          }

          // Parents left subtree is now the leftmosts right subtree
          leftMostParent.left = leftMostChild.right
          leftMostChild.left = currentNode.left
          leftMostChild.right = currentNode.right

          if(parentNode === null){
            this.root = leftMostChild
          } else {
            // if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value){
              parentNode.left = leftMostChild
            // if parent < current value, make current left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftMostChild
            }
          }
        }
        return true
      }
    }
  }
}

const tree: any = new Tree()
tree.insert(4)
tree.insert(5)
tree.insert(3)
tree.insert(2)
tree.insert(10)
console.log(JSON.stringify(tree.root, null, 2))