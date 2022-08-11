const { findUser } = require('../../../database/repositories/user');

const selectItems = async (queryCopy) => {
  const {
    name, age, price, rating, company,
  } = queryCopy;
  const searcher = {};
  if (name) {
    searcher.name = name;
  }
  if (age) {
    searcher.age = age;
  }
  if (price) {
    searcher.price = price;
  }
  if (rating) {
    searcher.rating = rating;
  }
  if (company) {
    searcher.company = company;
  }
  const result = await findUser(searcher);
  return result;
};

module.exports = selectItems;
