const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //user is the user in done() function
  done(null, user.id); //this user.id is not googleID, it is the id of user assigned by mongo.
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        let registerEmail = profile.emails[0].value;

        const verifiedEmail = profile.emails.filter(email => {
          return email.verified;
        })[0].value;

        if (verifiedEmail) registerEmail = verifiedEmail;

        user = await new User({
          googleId: profile.id,
          email: registerEmail,
          username: profile.name.givenName
        }).save(); //we already have a record with given profile.id
      }

      done(null, user); //call done after saving user(async db call) is completed
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
