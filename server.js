const express = require('express');
const connectDb = require('./database/connect');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '6mb' }));



const runServer = () => {
  connectDb(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => console.log('connected to the server'));
};

runServer();
