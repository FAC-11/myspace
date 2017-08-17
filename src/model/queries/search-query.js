const dbConnection = require('../database/db_connection');
const querySecondHalf = require('../../controllers/results.js')

const searchResults = {};

const queryFirstHalf = "SELECT * FROM planets";

//
// const fullQuery = (queryFirstHalf, queryDistance) => {
//   let dbQuerySelectCriterion = {};
//   if (queryDistance === 'all')
//     dbQuerySelectCriterion = {query: queryFirstHalf+";", params: null};
//   else {
//     dbQuerySelectCriterion =
//       {query: queryFirstHalf+"WHERE distance <= {$1} ORDER BY interest;", params: [queryDistance]};
//   }
//   console.log( dbQuerySelectCriterion);
//   return dbQuerySelectCriterion;
// }

const fullQuery = (queryDistance) => {
  let dbQuerySelectCriterion = {};
  if (queryDistance === 'all')
    dbQuerySelectCriterion = {secondHalf:";" , params: null};
  else {
    dbQuerySelectCriterion =
      {secondHalf: "WHERE distance <= {$1} ORDER BY interest;", params: [queryDistance]};
  }
  console.log( dbQuerySelectCriterion);
  return dbQuerySelectCriterion;
}


searchResults.onDistance = (distance, cb) => {  /// previously searchResults.get
  query=fullQuery(distance)
  dbConnection.query (queryFirstHalf+query.secondHalf, query.params, (err,res) => {
    if (err) cb(err);
    else {
      cb (res.rows);
    }
  });
};

module.exports = searchResults;
