const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   //throw new NotImplementedError('Not implemented');
   if (!Array.isArray(arr)) throw Error("\'arr\' parameter must be an instance of the Array!");
   let resultArray = Array.from(arr);

   for (let i = 0; i < resultArray.length; i++) {
      if (typeof (resultArray[i]) == 'string') {
         let newRull = resultArray[i].split('-').splice(2, 2);
         if (newRull[0] == 'discard') {
            if (newRull[1] == 'next') {
               resultArray[i + 1] = '';
               resultArray[i] = '';
            }
            else {
               resultArray[i - 1] = '';
               resultArray[i] = '';
            }
         }
         if (newRull[0] == 'double') {
            if (newRull[1] == 'next') {
               resultArray[i] = resultArray[i + 1];
            }
            else {
               resultArray[i] = resultArray[i - 1];
            }
         }
      }
   }
   return resultArray = resultArray.filter((a) => {
      if (typeof (a) != null) return a
   });
}

module.exports = {
   transform
};
