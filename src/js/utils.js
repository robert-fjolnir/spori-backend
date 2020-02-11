/**
 * Utils functions that are shared among multible modules are contained here.
 */


/**
* @param {function} fn - Async function to be wrapped into an error catching function.
*
* @returns {function} Error catching function wrapping the original function.
*/
function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}


/**
 * @param {*} id - Identifier to check if is a number.
 *
 * @returns {boolean} Return true if id is a number.
 */
function isNumber(id) {
  return /^\d+$/.test(id); // regluleg segð sem skilar true ef id er tala en false annars
}


/**
 * @param {*} s - Variable to check if is empty string.
 *
 * @returns {boolean} Return true if s is a string and non-empty.
 */
function isNonEmptyString(s) {
  return (typeof s === 'string') && (s.length > 0);
}


module.exports = {
  catchErrors,
  isNumber,
  isNonEmptyString,
};