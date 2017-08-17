const incrementInterestById = require('../model/queries/add-interest.js');

exports.get = (req, res) => {
  console.log ('Attempting to add interest to ',planet);
  const {planet} = req.params;    //currently planet id
  incrementInterestById (planet);

}
