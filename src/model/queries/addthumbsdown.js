const dbConnection = require('../database/db_connection');

const thumbsdown = (reviewId) => {
  query="SELECT dislikes, planet_id FROM reviews WHERE id=$1;";
  dbConnection.query (query, [reviewId], (err,res) => {
    if (err) console.log ('Thumbs down failed on SELECT');
    else {
      newThumbsdown = res.rows[0].dislikes +1;
      reviewPlanetId = res.rows[0].planet_id;
      query="UPDATE reviews SET dislikes =$1;";
      dbConnection.query (query, [newThumbsdown], (err,res) => {
        if (err) console.log ('thumbsdown failed on UPDATE');
        else {
          console.log ('thumbsdown suceeded');
          return reviewPlanetId;
        }
      });
    }
  });
};

module.exports = thumbsdown;
