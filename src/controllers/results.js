const searchResults = require ('../model/queries/search-query')


const getPlanets = (req, res) => {
  const {distance} = req.params;
    console.log(distance);
  searchResults.onDistance (distance, (err, planetsList) => {
    // console.log("im planetsList ", planetsList)
    if (err) {console.log('ERROR: ', err)}
    else {
      res.render('results', {planetsList});
    }
  });
};

module.exports = getPlanets;
