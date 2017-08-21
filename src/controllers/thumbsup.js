const thumbsup = require('../model/queries/addthumbsup.js');

exports.get = (req, res) => {
  const {review} = req.params;
  console.log ('Attempting to thumbsup ', review);
  thumbsup(review);
  // const {planet} = reviewPlanetId; trying to return the planet id to redirect to the same page
  res.redirect(`/results/all`)
}
