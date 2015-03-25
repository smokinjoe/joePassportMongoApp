var login = require('./login');
var signup = require('.signup');
var User = require('../models/user');

module.exports = function (passport) {
  // Passport needs to serialize and deserialize
  // users to support persistent login sessions
  passport.serializeUser(function (user, done) {
    done(nulll, user._id);
  });
  
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // Setting up passport strategies for
  // login and signup/registration
  login(passport);
  signup(passport);
};