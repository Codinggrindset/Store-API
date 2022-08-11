const { createUser } = require('../../../database/repositories/user');
const items = require('../../../utils/items');

const generateItems = async () => createUser({ items });

module.exports = generateItems;
