const { User } = require('../../../database/models/mongo');
const items = require('../../../utils/items');

const generateItems = async () => User.create(items);

module.exports = generateItems;
