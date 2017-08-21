const dbConnection = require('../database/db_connection');

const thumbsup = (reviewId) => {
  query="SELECT likes, planet_id FROM reviews WHERE id=$1;";
  dbConnection.query (query, [reviewId], (err,res) => {
    if (err) console.log ('Thumbs up failed on SELECT');
    else {
      newThumbsup = res.rows[0].likes +1;
      reviewPlanetId = res.rows[0].planet_id;
      query="UPDATE reviews SET likes =$1;";
      dbConnection.query (query, [newThumbsup], (err,res) => {
        if (err) console.log ('thumbs up failed on UPDATE');
        else {
          console.log ('thumbs up suceeded');
          return reviewPlanetId;
        }
      });
    }
  });
};

module.exports = thumbsup;
