const { User } = require('../../../database/models/mongo');

const clearItems = async () => {
  const collection = await User.findOneAndDelete({});
  return collection;
};

module.exports = clearItems;
