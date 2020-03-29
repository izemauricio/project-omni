const express = require('express');
const app = express();
app.listen(3333);
// rota principal raiz /
app.get('/', (request, response) => {
    //return response.send('Hello world');
    return response.json({ res: 'Hello world' });
});