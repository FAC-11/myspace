let dbConnection = undefined;
if(process.env.NODE_ENV === 'test') {
  dbConnection = require('../../../tests/test_database/db_connection_test');
} else {
  dbConnection = require('../database/db_connection');
}
const querySecondHalf = require('../../controllers/results.js')

const searchResults = {};
const queryFirstHalf = "SELECT * FROM planets";

const fullQuery = (queryDistance) => {
  let dbQuerySelectCriterion = {};
  if (queryDistance === 'all')
    dbQuerySelectCriterion = {secondHalf:" ORDER BY interest;" , params: null};
  else {
    dbQuerySelectCriterion =
      {secondHalf: " WHERE distance <=$1 ORDER BY interest;", params: [Number(queryDistance)]};
  }
  return dbQuerySelectCriterion;
}

searchResults.onDistance = (distance, cb) => {
  query = fullQuery(distance);
  dbConnection.query(queryFirstHalf + query.secondHalf, query.params, (err,res) => {
    if (err) {
      cb(err)
    }

    else {
      cb (null, res.rows);

    }
  });
};

module.exports = searchResults;
