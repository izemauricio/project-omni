const express = require('express');
const routes = require('./routes');
const app = express();
app.use(express.json()); // allow express to understand body request as json
app.use(routes);
app.listen(3333);
