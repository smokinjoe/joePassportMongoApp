var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next
  // request handler. Passport adds this method to the request object. A middleware
  // is allowed to add properties to the request and response objects
  if (req.isAuthenticated()) {
    return next();
  }
  // if the user is not authenticated then redirect to the login page
  res.redirect('/');
};

module.exports = function (passport) {
  // GET login page
  router.get('/', function (req, res) {
    // display the login page with any flash message, if any
    res.render('index', { message: req.flash('message') });
  });

  // handle login POST
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
  }));

  // GET registration page
  router.get('/signup', function (req, res) {
    res.render('register', { message: req.flash('message') });
  });

  // handle registration POST
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  // GET home page
  router.get('/home', isAuthenticated, function (req, res) {
    res.render('home', { user: req.user });
  });

  // handle logout
  router.get('/signout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
};