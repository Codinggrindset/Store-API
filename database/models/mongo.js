const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: {},
  age: {},
  price: {},
});

const User = mongoose.model('Store API', schema);

module.exports = { mongoose, User };
