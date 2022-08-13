const ApiError = require('../utils/errors/apiError');

// eslint-disable-next-line no-unused-vars
const handleError = (error, req, res, next) => {
  console.log(error);
  let code = 500;
  let message = 'There was an error. Try later';

  if (error instanceof ApiError) {
    code = error.code;
    message = error.message;
  }
  console.log(error);
  console.log('ABOVE ERROR');
  return res.status(code).json({ success: false, message });
};

module.exports = handleError;
