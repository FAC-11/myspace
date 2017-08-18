const dbConnection = require('../database/db_connection');

const thumbsup = (reviewId) => {
  query="SELECT likes FROM reviews WHERE id=$1;";
  dbConnection.query (query, [reviewId], (err,res) => {
    if (err) console.log ('Thumbs up failed on SELECT. Noone cares.');
    else {
      newThumbsup = res.rows[0].likes +1;
      query="UPDATE reviews SET likes =$1;";
      dbConnection.query (query, [newThumbsup], (err,res) => {
        if (err) console.log ('thumbs up failed on UPDATE. Noone cares.');
        else {
          console.log ('thumbs up suceeded. Noone cares.');
        }
      });
    }
  });
};

module.exports = thumbsup;
