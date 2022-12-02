var GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID = "411659578513-v3c5pmvlo1dkc4c1po3eqdvi1jiv9r66.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);