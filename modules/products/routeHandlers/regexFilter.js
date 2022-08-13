const asyncWrapper = require('../../../utils/asyncWrapper');
const selectItemsWithRegex = require('../controllers/regexFilter');

const filterItemsWithRegex = asyncWrapper(async (req, res) => {
  const queryCopy = req.query;
  const result = await selectItemsWithRegex(queryCopy);
  let message;
  if (result.length !== 0) {
    message = 'Here are the filtered items';
  } else {
    message = 'There are no items with those requirements';
  }
  res.json({ success: true, message, data: result });
});

module.exports = filterItemsWithRegex;
