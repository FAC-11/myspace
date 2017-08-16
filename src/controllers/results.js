const searchResults = {}

listOfPlanets = (queryDistance) => {
  if (queryDistance === 'all')
    const dbQuerySelectCriterion = {query: ";", params: null};
  else {
    const dbQuerySelectCriterion = {query: "WHERE distance <= {$1} ORDER BY interest;", params: [queryDistance]};
  }       ///creates the SECOND HALF of a SELECT query, prepared in pg's parameterising format
  /// do a db query on details, or on

}


searchResults.get = (req, res) => {
  const {distance} = req.params;
   ///can this take a thrid argument which would be :distance ?
  /// do a db query on details, or on /all , using listOfPlanets(distance)

};

module.exports = searchResults;
