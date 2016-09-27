const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const bcrypt = require('bcrypt');

module.exports = (passport) => {

  // Passport serializes user instance, and only store user id on session (and req.user :) )
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  // Passport will deserialize upon receiving requests, by looking for user by ID
  passport.deserializeUser((user, done) => {
    User.findById(user._id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      User
        .findOne({email: email})
        .then((user) => {
          if (!user) {
            return done(null, false, {message: "Email is not registered"})
          } else {

            bcrypt.compare(password, user.password, (err, matches) => {
              if (err) {
                return done(err);
              } else if (!matches) {
                return done(null, false, {message: "Incorrect password"})
              } else if (matches) {
                return done(null, user);
              }
            });

          }
        });
      }));


};