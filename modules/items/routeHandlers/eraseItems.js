const asyncWrapper = require('../../../utils/asyncWrapper');
const clearItems = require('../controllers/eraseItems');

const eraseItems = asyncWrapper(async (req, res) => {
  const result = await clearItems();
  res
    .status(201)
    .json({ success: true, message: 'collection deleted', data: result });
});

module.exports = eraseItems;
