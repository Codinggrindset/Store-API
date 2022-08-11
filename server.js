const express = require('express');
const connectDb = require('./database/connect');
const createItems = require('./modules/items/routeHandlers/createItems');
const eraseItems = require('./modules/items/routeHandlers/eraseItems');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '6mb' }));
app.post('/items', createItems);
app.get('/items', eraseItems);

const runServer = () => {
  connectDb(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => console.log('connected to the server'));
};

runServer();
