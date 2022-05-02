const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * function getDNSStats(domains) {
   let objResult = {};
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
   let objResult = {};
   for (const item of domains) {
      let itemArr = item.split(".");
      let str = "";
      for (let i = itemArr.length - 1; i >= 0; i--) {
         str = ("." + itemArr[i] + str);
         if (item.indexOf(str.slice(1)) !== -1) {
            let reversStr = '.' + str.split('.').reverse().join('.').slice(0, -1);
            if (typeof objResult[reversStr] === "undefined") {
               objResult[reversStr] = 1;
            } else {
               let countDomen = objResult[reversStr];
               objResult[reversStr] = ++countDomen;
            }
         }
      }
   }
   return objResult;
}

module.exports = {
   getDNSStats
};
