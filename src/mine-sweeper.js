const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
   let result = [];
   let one = 0,
     two = 0,
     three = 0,
     four = 0,
     six = 0,
     seven = 0,
     eight = 0,
     nine = 0;
 
   for (let i = 0; i < matrix.length; i++) {
     let row = [];
     for (let j = 0; j < matrix[i].length; j++) {
       six = matrix[i][j + 1] ? 1 : 0;
       four = matrix[i][j - 1] ? 1 : 0;
       if (matrix[i - 1]) {
         one = matrix[i - 1][j - 1] ? 1 : 0;
         two = matrix[i - 1][j] ? 1 : 0;
         three = matrix[i - 1][j + 1] ? 1 : 0;
       }
       if (matrix[i + 1]) {
         seven = matrix[i + 1][j - 1] ? 1 : 0;
         eight = matrix[i + 1][j] ? 1 : 0;
         nine = matrix[i + 1][j + 1] ? 1 : 0;
       }
       let sur = "" + one + two + three + four + six + seven + eight + nine;
       row.push(sur.replace(/0/g, "").length);
     }
     result.push(row);
   }
   return result;
 }

module.exports = {
  minesweeper
};
