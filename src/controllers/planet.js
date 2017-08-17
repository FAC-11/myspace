const planets = require('./../model/index');
exports.get = (req, res, next) => {
  const {
    planet
  } = req.params;
  if (planets.includes(planet)) {
    return res.render('planet', {
      planet
    });
  }
  next();
};
