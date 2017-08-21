const dbConnection = require('../database/db_connection');
const foundReviews = {};
const queryFirstHalf = "SELECT * FROM reviews";

const fullQuery = (refine) => {
  let dbQuerySelectCriterion = {};
    if (!refine) {
      dbQuerySelectCriterion = {secondHalf:";" , params: null};
    } else
    if (refine.planetId) {
        dbQuerySelectCriterion =
          {secondHalf: " WHERE planet_id=$1;", params: [refine.planetId]};
      } else
      if (refine==='faves') {
          dbQuerySelectCriterion =
            {secondHalf: " WHERE likes > 0 OR dislikes > 0 ORDER BY likes;", params: null};
        } else {
            dbQuerySelectCriterion = {secondHalf:";" , params: null};
            console.log ('Theres nothing here!!!');
          }
  return dbQuerySelectCriterion;
}

foundReviews.byPlanetId = (planetId, cb) => {
  if (!planetId)
    cb(err);
  else {
    query= fullQuery ({planetId});
    dbConnection.query (queryFirstHalf+query.secondHalf, query.params, (err,res) => {
      if (err) cb(err);
      else {
        cb (null, res.rows);
      }
    });
  }
};

module.exports = foundReviews;
