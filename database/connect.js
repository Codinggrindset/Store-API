const { mongoose } = require('./models/mongo');

const connectDb = async (url) => mongoose.connect(url).then(() => console.log('connected to the database')).catch((err) => console.log(err));

module.exports = connectDb;
