const CustomError = require("../extensions/custom-error");

const chainMaker = {
  string: [],
  getLength() {
    return this.string.length;
  },
  addLink(value) {
     this.string.push(`( ${value} )`);
    return this;
  
  },
  removeLink(position) {
    if (typeof(position) !=='number' || position <= 0 || position >= this.getLength) {
      this.string = [];
      throw new Error();
    } 
    this.string.splice(position-1, 1);
    return this;
    
  },
  reverseChain() {
    this.string.reverse();
    return this;
  },
  finishChain() {
    let finalString = this.string.join('~~');
    this.string = [];
    return finalString;
  }
};


module.exports = chainMaker;
