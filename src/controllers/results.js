const searchResults = require ('../model/queries/search-query')


getPlanets = (req, res) => {
  const {distance} = req.params;
  searchResults.onDistance (distance, (err, planetsList)=> {
    if (err) {console.log(err)};
    else {
      console.log(planetsList);
      //do this with the results;
    }

  });

};

module.exports = searchResults;
