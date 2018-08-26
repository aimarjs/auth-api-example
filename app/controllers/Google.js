const passport = require('passport');

exports.Auth = function(req, res, next) {

  return passport.authenticate('google', (err, token, profile) => {
    console.log("ERROR", err);
    console.log("Token", token);
    console.log("Profile", profile);
  })(req, res, next);

}
