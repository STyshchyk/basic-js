const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
  let catAmount = 0;
  cats.forEach(elem => {
    let innerAmount = elem.filter(x => x === '^^').length
    catAmount += innerAmount;
  })
  return catAmount;
}

module.exports = {
  countCats
};
