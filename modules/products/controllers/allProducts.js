const { User } = require('../../../database/models/mongo');

const retrieveAllItems = async () => {
  const result = await User.find({});
  return result;
};

module.exports = retrieveAllItems;
