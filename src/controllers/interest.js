const incrementInterestById = require('../model/queries/add-interest.js');

exports.get = (req, res) => {
  const {planet} = req.params;    //currently planet id
  console.log ('Attempting to add interest to ',planet);
  incrementInterestById (planet);
  res.redirect(`/planets/${planet}`)

}
