const asyncWrapper = require('../../../utils/asyncWrapper');
const selectItems = require('../controllers/filter');

const filterItems = asyncWrapper(async (req, res) => {
  const queryCopy = req.query;
  const result = await selectItems(queryCopy);
  let message;
  if (result.length !== 0) {
    message = 'Here are the filtered items';
  }
  message = 'There are no items with those requirements';
  res.json({ success: true, message, data: result });
});

module.exports = filterItems;
