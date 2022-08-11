const { findUser } = require('../../../database/repositories/user');

const retrieveAllItems = async () => {
  const result = await findUser({});
  return result;
};

module.exports = retrieveAllItems;
