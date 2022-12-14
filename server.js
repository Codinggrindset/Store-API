const express = require('express');
const connectDb = require('./database/connect');
const handleError = require('./middleware/errHandler');
const createItems = require('./modules/items/routeHandlers/createItems');
const eraseItems = require('./modules/items/routeHandlers/eraseItems');
const getAllItems = require('./modules/products/routeHandlers/allProducts');
const filterItems = require('./modules/products/routeHandlers/filter');
const filterItemsWithRegex = require('./modules/products/routeHandlers/regexFilter');
const FilterAndSortItems = require('./modules/products/routeHandlers/sortItems');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '6mb' }));
app.post('/items', createItems);
app.get('/items', eraseItems);
app.get('/products', getAllItems);
app.get('/products/filters', filterItems);
app.get('/products/filters/regex', filterItemsWithRegex);
app.get('/products/filters/sorts', FilterAndSortItems);

app.use(handleError);

const runServer = () => {
  connectDb(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => console.log('connected to the server'));
};

runServer();
