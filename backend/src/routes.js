const express = require('express');
const routes = express.Router();

routes.post('/test', (request, response) => {
    // const params = request.query;
    //const params = request.params;
    const params = request.body;
    
    //return response.send('Hello world');
    //return response.json({ res: 'Hello world' });
    return response.json({ a: "a" });
});

module.exports = routes;
