const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const searchResults = require('./results');
const planet = require('./planet');
const review = require('./add-review');
const error = require('./error');

router.get('/', home);
router.get('/results', results.get);
router.get('/planets/:planet', planet.get);
router.post('/add-review', review.post);
router.use(error.client);
router.use(error.server);

module.exports = router;