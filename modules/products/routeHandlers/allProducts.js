const asyncWrapper = require('../../../utils/asyncWrapper');
const retrieveAllItems = require('../controllers/allProducts');

const getAllItems = asyncWrapper(async (req, res) => {
  const result = await retrieveAllItems();
  res.json({ success: true, message: 'Here are all the items', data: result });
});

module.exports = getAllItems;
