const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //user is the user in done() function
  done(null, user._id); //this user.id is not googleID, it is the id of user assigned by mongo.
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "emailOrUsername",
      passwordField: "password"
    },
    function(username, password, done) {
      User.findOne(
        {
          $or: [{ email: username }, { username: username }]
        },
        "+password",
        async function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, {
              message: "Invalid username or email address."
            });
          }

          const verifyPassword = await user.verifyPassword(password);

          if (!verifyPassword) {
            return done(null, false, { message: "Wrong password." });
          }
          return done(null, user, { message: "Success!" });
        }
      );
    }
  )
);

/*
Before refactoring using Async/Await

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        //we already have a record with given profile.id
                        done(null, existingUser);
                    } else {
                        new User({ googleId: profile.id })
                            .save()
                            .then(user => done(null, user)); //call done after saving user(async db call) is completed
                    }
                });
        }
    )
);

*/
