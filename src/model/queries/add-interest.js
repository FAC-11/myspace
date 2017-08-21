const dbConnection = require('../database/db_connection');

const incrementInterestById = (planetId) => {
  query="SELECT interest FROM planets WHERE id=$1;";
  dbConnection.query (query, [planetId], (err,res) => {
    if (err) console.log ('Plus one failed on SELECT');
    else {
      newInterest = res.rows[0].interest +1;
      query="UPDATE planets SET interest =$1;";
      dbConnection.query (query, [newInterest], (err,res) => {
        if (err) console.log ('Plus one failed on UPDATE');
        else {
          console.log ('Plus one suceeded');
        }
      });
    }
  });
};

module.exports = incrementInterestById;
