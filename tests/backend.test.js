const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

test('Tape works test', (t) => {
  t.equal(1, 1, '1 should equal 1');
  t.end();
});

test('Wrong endpoints returns client error', (t) => {
  request(app)
  .get('/hello')
  .expect('Content-Type', 'text/html; charset=utf-8')
  .expect(404)
  .end(function(err, res) {
    if (err) throw err;
      var expected = true;
      var actual = res.clientError;
      t.deepEquals(actual, expected, 'Wrong endpoints should return client error true');
      t.end();
    });
});


test('/results/all endpoint returns a string', (t) => {
  request(app)
  .get('/results/all')
  .expect('Content-Type', 'text/html; charset=utf-8')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
      var expected = 'string';
      var actual = typeof res.text;
      t.deepEquals(actual, expected, '/results/all endpoint should return a string');
      t.end();
    });
});

test('/results/5 endpoint returns a string', (t) => {
  request(app)
  .get('/results/5')
  .expect('Content-Type', 'text/html; charset=utf-8')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
      var expected = 'string';
      var actual = typeof res.text;
      t.deepEquals(actual, expected, '/results/5 endpoint should return a string');
      t.end();
    });
});

test('/home endpoint returns a string', (t) => {
  request(app)
  .get('/home')
  .expect('Content-Type', 'text/html; charset=utf-8')
  .expect(200)
  .end(function(err, res) {
    console.log(res.text)
    if (err) throw err;
      var expected = 'string';
      var actual = typeof res.text;
      t.deepEquals(actual, expected, '/results/5 endpoint should return a string');
      t.end();
    });
});

test('/planets/5 endpoint returns page for The Moon', (t) => {
  request(app)
  .get('/planets/5')
  .expect('Content-Type', 'text/html; charset=utf-8')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
      var expected = true;
      var actual = res.text.includes('Moon');
      t.deepEquals(actual, expected, '/planets/5 endpoint should include information about the moon');
      t.end();
    });
});
