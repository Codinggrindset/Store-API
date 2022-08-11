const asyncWrapper = require('../../../utils/asyncWrapper');
const generateItems = require('../controllers/createItems');

const createItems = asyncWrapper((req, res) => {
  generateItems();
  res.status(201).json({ success: true, message: 'collection created' });
});

module.exports = createItems;
