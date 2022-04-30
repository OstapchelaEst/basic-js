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
   throw new NotImplementedError('Not implemented');
   for (let i = 0; i < arr.length; i++) {
     if (typeof(arr[i]) == 'string') {
       let newRull = arr[i].split('-').splice(2, 2);
       console.log(newRull);
       if (newRull[0] == 'discard') {
         if (newRull[1] = 'next') {
           arr.splice(i, 2);
           i -= 2;
         } else if (newRull[1] = 'prev') {
           console.log('aaaaa');
           arr.splice(i - 1, 2);
           i -= 2;
         }
       } else {
         if (newRull[1] = 'next') {
           arr[i] = arr[i + 1];
         } else if (newRull[1] = 'prev') {
           arr[i] = arr[i + -1];
         }
       }
     }
   }
   return arr;
 }

module.exports = {
   transform
};
