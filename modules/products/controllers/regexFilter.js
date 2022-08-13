const { findUser } = require('../../../database/repositories/user');

const selectItemsWithRegex = async (queryCopy) => {
  const {
    name, company,
  } = queryCopy;
  const searcher = {};
  if (name) {
    searcher.name = { $regex: name, $options: 'i' }; // The regex operator searches for documents containing the name property which name contains the string defined in 'name'. The option 'i' will search for both lowercase and uppercase versions of that string
  }
  if (company) {
    searcher.company = { $regex: /^NIK/, $options: 'i' }; // Searches for documents with the company property value starting with 'nik'.
  }
  const result = await findUser(searcher);
  return result;
};

module.exports = selectItemsWithRegex;
