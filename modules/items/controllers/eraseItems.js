const { deleteAll } = require('../../../database/repositories/user');

const clearItems = async () => deleteAll({});

module.exports = clearItems;
