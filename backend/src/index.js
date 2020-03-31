const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
/*
app.use(cors({
    origin:'localhost'
}));
*/
app.use(cors());
app.use(express.json()); // allow express to understand body request as json
app.use(routes);
app.listen(3333);
