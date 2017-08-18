const thumbsup = require('../model/queries/addthumbsup.js');

exports.get = (req, res) => {
  const {review} = req.params;    //currently planet id
  console.log ('Attempting to thumbsup ',review);
  thumbsup (review);
  res.redirect(`/planets/${planet}`)

}
