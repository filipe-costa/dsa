class ReverseString {
  str = null
  constructor(str){
    this.str = str
  }

  reverse = (str) => {
    if(!str) {
      return ""
    }
    
    return this.reverse(str.substr(1)) + str.charAt(0)
  }


  getReversedString = () => {
    if(!this.str){
      return null
    }
    console.log(this.reverse(this.str))
  }
}

const str = new ReverseString("yoyo master")
str.getReversedString()