/* eslint-disable max-len */
const { findUser } = require('../../../database/repositories/user');

const filterAndSort = async (queryCopy) => {
  const {
    name, age, price, rating, company, sort, fields, limit, skip,
  } = queryCopy;
  const searcher = {};
  if (name) {
    searcher.name = name;
  }
  if (age) {
    searcher.age = { $lte: Number(age) }; // finds an age less than or equal to 'age' passed in
  }
  if (price) {
    searcher.price = { $gt: Number(price) }; // finds a price greater than 'price' passed in
  }
  if (rating) {
    searcher.rating = { $gte: Number(rating) }; // finds a rating greater than or equal to 'rating' passed in
  }
  if (company) {
    searcher.company = company;
  }

  let finder = findUser(searcher);

  const useLimit = limit || 4;
  finder = finder.limit(useLimit); // limits the maximum number of returned documents to 4 or 'limit'

  const useSkip = skip || 0;
  finder = finder.skip(useSkip); // skips the first x documents returned or 0 as default

  let useSort = sort || 'name';
  if (sort) {
    useSort = sort.split(',').join(' ');
  }
  finder = finder.sort(useSort); // sorts the documents returned in order defined in useSort or 'name'

  let useFields = fields || 'name';
  if (fields) {
    useFields = fields.split(',').join(' ');
  }
  finder = finder.fields(useFields); // only displays fields specified such as 'name', e.t.c

  const result = await finder;
  return result;
};

module.exports = filterAndSort;
