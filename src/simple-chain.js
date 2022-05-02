const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   result: [],

   getLength() {
      return this.result.length;
   },

   addLink(value = '') {
      this.result.push(value)
      return this;
   },

   removeLink(position) {
      if (typeof position !== 'number' || position % 1 > 0 || position < 1 || position > this.result.length) {
         this.result = [];
         throw new Error('You can\'t remove incorrect link!');
      }
      this.result = this.result.filter((item, i) => i != position - 1);
      return this;
   },

   reverseChain() {
      this.result = this.result.reverse();
      return this;
   },

   finishChain() {
      let strChain = '';
      for (let i = 0; i < this.result.length; i++) {
         if (i == 0) {
            strChain += `( ${this.result[i]} )`
         }
         else {
            strChain += `~~( ${this.result[i]} )`
         }
      }
      this.result = []
      return strChain;
   }
};

module.exports = {
   chainMaker
};
