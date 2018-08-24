
module.exports = function (app, passport) {

  app.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/register'
  }));

  app.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

};