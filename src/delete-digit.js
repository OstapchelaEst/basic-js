const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   n = n + '';
   let max = 0;
   for (let i = 0; i < n.length; i++) {
      let count = n.replace(`${n[i]}`, '');
      if (count > max) {
         max = count;
      }
   }
   return Number(max);
}


module.exports = {
   deleteDigit
};
