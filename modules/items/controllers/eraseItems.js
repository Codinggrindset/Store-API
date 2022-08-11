const { User } = require('../../../database/models/mongo');

const clearItems = async () => User.deleteMany({});

module.exports = clearItems;
