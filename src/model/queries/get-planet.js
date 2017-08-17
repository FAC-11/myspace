const dbConnection = require('../database/db_connection');
const foundReviews = require('./get-reviews.js')

const getPlanetData = {};

const queryFirstHalf = "SELECT * FROM planets";

var reviews = [];

const fullQuery = (planetId) => {
  let dbQuerySelectCriterion =
      {secondHalf: " WHERE id = $1;", params: [Number(planetId)]};
  return dbQuerySelectCriterion;
}
const fullQueryByName = (planetName) => {
  let dbQuerySelectCriterion =
      {secondHalf: " WHERE name = $1;", params: [planetName]};
  return dbQuerySelectCriterion;
}


foundReviews.byPlanetId (planetId, (err, result) => {
  if (err) console.log ('DB ERROR: ',err);
    else {
      reviews = result;
    }
});
console.log (reviews);

getPlanetData.byId = (planetId, cb) => {   ///NB the callback here takes a third, passthrough argument
                                          ///which is an array of reviews
  query=fullQuery(planetId);
  dbConnection.query (queryFirstHalf+query.secondHalf, query.params, (err,res) => {
    if (err) cb(err);
    else {
      cb (null, res.rows, reviews);
    }
  });
};

getPlanetData.byName = (planetName, cb) => {   ///NB the callback here takes a third, passthrough argument
                                          ///which is an array of reviews
  query=fullQueryByName(planetName);
  dbConnection.query (queryFirstHalf+query.secondHalf, query.params, (err,res) => {
    if (err) cb(err);
    else {
      cb (null, res.rows, reviews);
    }
  });
};

module.exports = getPlanetData;
