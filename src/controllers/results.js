const searchResults = require ('../model/queries/search-query')


const getPlanets = (req, res) => {
  const {distance} = req.params;
  searchResults.onDistance (distance, (err, planetsList)=> {
    if (err) {console.log('ERROR: ',err)}
    else {
      // console.log('LOG:', planetsList);
      res.render ('results', planetsList);
    }

  });

};

module.exports = getPlanets;
