const passport = require('passport');

// we have to export thease routs in an arrow function to index.js so that we have access to app
// We make sure to add app as a parameter.
// Then we require it in index.js
module.exports = app => {
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

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
}
