const thumbsup = require('../model/queries/addthumbsup.js');

exports.get = (req, res) => {
  const {review} = req.params;
  console.log(req);
  console.log ('Attempting to thumbsup ', review);
  thumbsup(review);
  res.redirect(`/planets/${planet}`)

}
