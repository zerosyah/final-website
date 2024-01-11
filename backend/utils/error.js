/**
 * this is function that handles error on the entire backend code
 * 
 * @param {number} statusCode code that represant the status e.g 200 
 * @param {string} message message of the status 
 * @returns 
 */
const handleError = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
module.exports = handleError;
