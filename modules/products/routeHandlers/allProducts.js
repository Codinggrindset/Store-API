const retrieveAllItems = require("../controllers/allProducts")

const getAllItems = async (req, res) => {
  const result = await retrieveAllItems();
  res.json({ success: true, message: 'Here are all the items', data: result });
};

module.exports = getAllItems;
