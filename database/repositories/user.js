const { User } = require('../models/mongo');

const findUser = (a) => User.find({ a });

const createUser = (a) => User.create({ a });

const deleteAll = (a) => User.deleteMany({ a });

module.exports = { findUser, createUser, deleteAll };
