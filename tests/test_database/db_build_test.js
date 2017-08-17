const fs = require('fs');

const dbConnection = require('./db_connection_test.js');

const sql = fs.readFileSync(`${__dirname}/db_build_test.sql`).toString();

const runDbBuild = dbConnection.query(sql, (err, res) => {
  if(err) throw err;
  console.log("Database created with the result: ", res);
});

module.export = runDbBuild;
