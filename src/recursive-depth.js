const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

   calculateDepth(arr) {
      throw new NotImplementedError('Not implemented');
      let count = 0;
      function depthArr(a) {
         for (const iatem of a) {
            if (Array.isArray(iatem)) {
               count++;
               console.log(iatem)
               depthArr(iatem);
            }
         }
      }
      for (let item of arr) {
         if (Array.isArray(item)) {
            depthArr(item);
            count++;
            console.log(item)
         }
      }
      return count;
   }
}
module.exports = {
   DepthCalculator
};
