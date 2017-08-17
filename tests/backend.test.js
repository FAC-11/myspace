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

//
// test('/results/all endpoint returns an array', (t) => {
//   request(app)
//   .get('/results/all')
//   .expect('Content-Type', 'text/html; charset=utf-8')
//   .expect(200)
//   .end(function(err, res) {
//     console.log("im response ", res)
//     if (err) throw err;
//       var expected = true;
//       var actual = Array.isArray(res);
//       t.deepEquals(actual, expected, '/results/all endpoint should return an array');
//       t.end();
//     });
// });

// test('First planet is the sun', (t) => { // or will this be ordered by popularity?
//   request(app)
//   .get('/planets/all')
//   .expect('Content-Type', /json/)
//   .expect(200)
//   .end(function(err, res) {
//     console.log(res);
//     if (err) throw err;
//       var expected = "Sol";
//       var actual = res.body[0].name;
//       t.deepEquals(actual, expected, 'First name of the object should be Sol');
//       t.end();
//     });
// });

// test('All routes should return the expected results', (t) => {
  // request(app)
  //   .get('/users')
  //   .expect(200)
  //   .expect('Content-Type', /json/)
  //   .end((err, res) => {
  //     t.same(res.statusCode, 200, 'Status code is 200');
  //     t.error(err, 'No error');
  //     t.end();
  //   });
// });

// test('Should be able to get a planet by its id', (t) => {
  // const ids = ['1', '2', '3', '4'];
  // ids.forEach((id, index) => {
  //   request(app)
  //     .get(`/user/${id}`)
  //     .expect(200)
  //     .expect('Content-Type', /json/)
  //     .end((err, res) => {
  //       t.same(res.statusCode, 200, 'Status code is 200');
  //       t.error(err, 'No error');
  //       t.same(res.body[0].id, id, `Id is ${id} as expected`);
  //       if (ids.length - 1 === index) {
  //         t.end();
  //       }
  //     });
  // });
// });

// test('Should add a new review', (t) => {
//   const newuser = {id: 5, user_id: 5, name: 'Thor', species: null, image_url: null, cns: true, legs: '5', interests: 'interstellar ping-pong' };
//   request(app)
//     .post(`/editprofile`)
//     .send(newuser)
//     .expect(201)
//     .expect('Content-Type', /json/)
//     .end((err, res) => {
//       t.same(res.statusCode, 201, 'Status code is 201');
//       t.error(err, 'No error');
//       t.same(res.body[0].name, 'Thor', 'Should add new user profile to profiles table');
//       t.end();
//     });
// });

// test('Should be able to add popularity to a planet', (t) => {

// })
