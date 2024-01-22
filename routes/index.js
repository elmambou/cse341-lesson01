const routes = require('express').Router();
const lesson01Controller = require('../controllers/lesson1')

routes.get('/', lesson01Controller.emilyRoute);
routes.get('/William', lesson01Controller.williamRoute);
routes.get('/sarah', lesson01Controller.sarahRoute);

module.exports = routes;
