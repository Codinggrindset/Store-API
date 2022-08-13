const asyncWrapper = require('../../../utils/asyncWrapper');
const filterAndSort = require('../controllers/sortItems');

const FilterAndSortItems = asyncWrapper(async (req, res) => {
  const queryCopy = req.query;
  const result = await filterAndSort(queryCopy);
  let message;
  if (result.length !== 0) {
    message = 'Here are the items';
  } else {
    message = 'There are no items with those requirements';
  }
  res.json({ success: true, message, data: result });
});

module.exports = FilterAndSortItems;
