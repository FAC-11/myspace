const dbConnection = require('../database/db_connection');

const getPlanetData = {};

const queryFirstHalf = "SELECT * FROM planets";

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


getPlanetData.byId = (planetId, reviewArray, cb) => {   ///NB the callback here took a third,
                                                      ///passthrough argument
                                                      ///which is an array of reviews
                                                      ///- but that was wrong

  query=fullQuery(planetId);
  dbConnection.query (queryFirstHalf+query.secondHalf, query.params, (err,res) => {
    if (err) cb(err);
    else {
      // console.log ('Get pd length:',res.rows.length, res.rows[0])
      cb (null, res.rows[0], reviewArray);
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
