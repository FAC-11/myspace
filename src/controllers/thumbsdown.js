const thumbsdown = require('../model/queries/addthumbsdown.js');

exports.get = (req, res) => {
  const {review} = req.params;
  console.log ('Attempting to thumbsdown ', review);
  thumbsdown(review);
  // const {planet} = reviewPlanetId; trying to return the planet id to redirect to the same page
  res.redirect(`/results/all`)
}
