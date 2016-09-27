const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

module.exports.index = (req, res) => {
  res.render('login');
};

module.exports.create =
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login'});
  // User
  //   .findOne({email: req.body.email})
  //   .then((user) => {
  //     if (!user) {
  //       res.redirect('/login');
  //     } else {
  //       return new Promise((resolve, reject) => {
  //         bcrypt.compare(req.body.password, user.password, (err, matches) => {
  //           if (err) {
  //             reject(err);
  //           } else {
  //             resolve(matches)
  //           }
  //         });
  //       });
  //     }
  //   })
  //   .then((matches) => {
  //     if (!matches) {
  //       res.redirect('/login');
  //     } else {
  //       req.session.email = req.body.email;
  //       res.redirect('/');
  //     }
  //   })
  //   .catch((err) => next(err));
