const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const getPlanets = require('./results');
const planet = require('./planet');
const interest = require('./interest');
// const review = require('./add-review');
const error = require('./error');
const thumbsup = require('./thumbsup');
const thumbsdown = require('./thumbsdown');

router.get('/', home);
router.get('/interest/:planet', interest.get);
router.get('/results/:distance', getPlanets);
router.get('/planets/:planet', planet.get);
router.get('/thumbsup/:review', thumbsup.get);
router.get('/thumbsdown/:review', thumbsdown.get);
// router.post('/add-review', review.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
