const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const getPlanets = require('./results');
const planet = require('./planet');
const interest = require('./interest');
const review = require('./add-review');
const error = require('./error');
const thumbsup = require('./thumbsup');


router.get('/interest/:planet', interest.get);
router.get('/', home);

router.get('/results/:distance', getPlanets);
// router.get('/planets/interest/:planet', interest.get);
router.get('/planets/:planet', planet.get);
router.get('/thumbsup', thumbsup.get)
router.post('/add-review', review.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
