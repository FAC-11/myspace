const getPlanetData = require('../model/queries/get-planet.js');
const foundReviews = require('../model/queries/get-reviews.js')

var reviewArray = [];

exports.get = (req, res, next) => {
  const {planet} = req.params;    //currently planet id

foundReviews.byPlanetId (planet, (err, result) => {   //currently planet =  planet id
  if (err) console.log ('DB ERROR getting reviews: ', err);
    else {
      reviewArray = result;
      getPlanetData.byId (planet, reviewArray, (err, planetData) => {
        if (err || !planet) {
          console.log ('planet id:',planet,'error: ',err);
        } else {
          // console.log ('Gonna render: pla-net', {planetData, reviewArray});
          return res.render('planet', {planetData, reviewArray});
        }
      });

      }
  });
};
