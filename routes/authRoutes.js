const passport = require('passport');

// we have to export thease routs in an arrow function to index.js so that we have access to app
// We make sure to add app as a parameter.
// Then we require it in index.js

module.exports = app => {// This route is what I use to login
  app.get(
   '/auth/google', 
   passport.authenticate('google',{
     scope: ['profile', 'email']
   })
  ),
  
  app.get(
    '/auth/google/callback', 
    passport.authenticate('google')
  );

  app.get('/api/logout', (req, res) => {// This is my logout route
    req.logout();
    res.send(req.user)
  });

  app.get('/api/current_user', (req, res) => {// route gives me the id of logged in user
    res.send(req.user);
  })
}
