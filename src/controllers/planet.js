const planets = require('./../model/index');
exports.get = (req, res, next) => {
  const {
    planet
  } = req.params;
  console.log(req.params);
  console.log(planets[0].name);
  if (planets.includes(planet)) {
    return res.render('planet', {
      planet
    });
  }
  next();
};
