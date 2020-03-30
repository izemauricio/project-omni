const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ong.controller');
const incidentController = require('./controllers/incident.controller');
const profileController = require('./controllers/profile.controller');
const sessionController = require('./controllers/session.controller');

routes.post('/test', (request, response) => {
    // const params = request.query;
    //const params = request.params;
    const params = request.body;

    //return response.send('Hello world');
    //return response.json({ res: 'Hello world' });
    return response.json({ a: "a" });
});

routes.post('/session', sessionController.create)

routes.get('/ongs', ongController.get);
routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.get);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.get);

module.exports = routes;
