const { User } = require('../../../database/models/mongo');
const items = require('../../../utils/items');

const generateItems = async () => {
  const collection = await User.create(items);
  return collection;
};

module.exports = generateItems;
