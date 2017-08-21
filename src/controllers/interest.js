const incrementInterestById = require('../model/queries/add-interest.js');

exports.get = (req, res) => {
  const {planet} = req.params;
  console.log ('Attempting to add interest to ', planet);
  incrementInterestById (planet);
  res.redirect(`/planets/${planet}`)
}
