const dbConnection = require('../database/db_connection');
const querySecondHalf = require('../../controllers/results.js')

const searchResults = {}

const queryFirstHalf = "SELECT * FROM planets";


fullQuery = (queryFirstHalf, queryDistance) => {
  if (queryDistance === 'all')
    const dbQuerySelectCriterion = {query: queryFirstHalf+";", params: null};
  else {
    const dbQuerySelectCriterion =
      {query: queryFirstHalf+"WHERE distance <= {$1} ORDER BY interest;", params: [queryDistance]};
  }
  return dbQuerySelectCriterion;
}


searchResults.onDistance = (distance, cb) => {  /// previously searchResults.get
  dbConnection.query (fullQuery(queryFirstHalf, distance), (err,res) => {
    if (err) cb(err);
    else {
      cb (res.rows);
    }
  });
};

module.exports = searchResults;
