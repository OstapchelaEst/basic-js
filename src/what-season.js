const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
   throw new NotImplementedError('Not implemented');
   const arrMonth = ['winter','winter','spring','spring','spring','summer','summer','summer','autumn','autumn','autumn','winter']  
   return arrMonth[date.getMonth()]
}

module.exports = {
  getSeason
};
