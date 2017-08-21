const dbConnection = require('../database/db_connection');

// const addReview = (username, content, cb) => {
//   const sqlQuery = "INSERT INTO reviews (username, content) VALUES ($1, $2);";
//   dbConnection.query(sqlQuery, [username, content], (err, res) => {
//     if (err) {
//       console.log ('review post failed');
//       cb(err);
//     } else {
//       console.log ('review post suceeded');
//       cb(null, res.rows);
//     }
//   });
// };

module.exports = addReview;
