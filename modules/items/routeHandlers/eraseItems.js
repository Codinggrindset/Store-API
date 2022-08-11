const asyncWrapper = require('../../../utils/asyncWrapper');
const clearItems = require('../controllers/eraseItems');

const eraseItems = asyncWrapper(async (req, res) => {
  clearItems();
  res
    .status(201)
    .json({ success: true, message: 'collection deleted' });
});

module.exports = eraseItems;
