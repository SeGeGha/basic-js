const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
    (value !== undefined) ? this.chain.push(`( ${value} )`) : this.chain.push(`( )`);
    return this;
  },
  removeLink(position) {
     if (typeof(position) != 'number' || position >= this.chain.length || position <= 0) {
         this.chain = [];
         throw Error();
     } else {
         this.chain.splice(--position, 1);
         return this;
     }
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      const result = this.chain.join('~~');
      this.chain = [];
      return result;
  }
};

module.exports = chainMaker;
