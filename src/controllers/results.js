const searchResults = {}

listOfPlanets = ({querydetails}) => {
  if (querydetails.searchAll)
    const dbQuerySelectCriterion = {query: "", params: null};
  else {
    const dbQuerySelectCriterion = {query: "WHERE distance <= {$1}", params: [querydetails.distance]};
  }       ///creates the SECOND HALF of a SELECT query, prepared in pg's parameterising format
  /// do a db query on details, or on

}


searchResults.get = (req, res) => {    ///can this take a thrid argument which would be :distance ?
  /// do a db query on details, or on /all , using listOfPlanets({distance:x})

};

module.exports = searchResults;
