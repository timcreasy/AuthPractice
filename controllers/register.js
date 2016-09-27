const User = require('../models/user');

module.exports.index = (req, res) => {
  res.render('register');
};

module.exports.create = (req, res, next) => {
  User
    .create({email: req.body.email, password: req.body.password})
    .then((user) => {
      res.redirect('/login');
    })
    .catch((err) => {
      next(err);
    });
};