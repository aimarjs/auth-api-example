const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('mongoose').model('User');

module.exports = new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {

  process.nextTick(function() {

    User.findOne({ 'google.id': profile.id }, function(err, user) {

      if (err) {
        return done(err)
      }

      if (user) {

        return done(null, user)

      } else {

        const newUser = new User();

        newUser.google.id = profile.id;
        newUser.google.token = accessToken;
        newUser.google.name = profile.displayName;
        newUser.google.email = profile.emails[0].value;

        newUser.save(function(err) {

          if (err) {
            throw err
          } else {

            return done(null, newUser)

          }

        })

      }

    })

  })
  // User.findOrCreate({ googleId: profile.id }, function(err, user) {
  //   return done(err, user)
  // })
})
