const {Pool} = require('pg');
const url = require('url');
require('env2')('./config.env');

if(!process.env.DB_TEST_URL) throw new Error('Environment variable DB_TEST_URL must be set');

// if(!auth) throw new Error('Authprozation is required');

const params = url.parse(process.env.DB_TEST_URL);
console.log ('db host: ',params.host);

const [username, password] = params.auth.split(':');

  const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.DB_MAX_CONNECTIONS || 2,
    user: username,
    password,
    ssl: params.hostname !== 'localhost',
  }


module.exports = new Pool(options);
