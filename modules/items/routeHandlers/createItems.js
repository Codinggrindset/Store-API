const asyncWrapper = require('../../../utils/asyncWrapper');
const generateItems = require('../controllers/createItems');

const createItems = asyncWrapper(async (req, res) => {
  const result = await generateItems();
  res.status(201).json({ success: true, message: 'collection created', data: result });
});

module.exports = createItems;
