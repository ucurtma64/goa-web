const passport = require("passport");
const mongoose = require("mongoose");

const User = mongoose.model("users");
const UserVerify = mongoose.model("usersVerify");

const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const usernameRegex = /^[a-zA-Z0-9]{6,16}$/;

module.exports = app => {
  app.post("/auth/local", function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(400).json({
          success: false,
          message: info.message
        });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.status(200).json({
          success: true
        });
      });
    })(req, res, next);
  });

  app.post("/auth/local/register", (req, res) => {
    const { email, username, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
      console.log("Passwords does not match");
      return res.status(400).json({
        success: false,
        message: "Passwords does not match."
      });
    }

    if (!passwordRegexp.test(password)) {
      console.log("Password is not valid");
      return res.status(400).json({
        success: false,
        message: "Password is not valid."
      });
    }

    if (!usernameRegex.test(username)) {
      console.log("Username is not valid");
      return res.status(400).json({
        success: false,
        message: "Username is not valid."
      });
    }

    if (!emailRegexp.test(email)) {
      console.log("Email is not valid");
      return res.status(400).json({
        success: false,
        message: "Email is not valid."
      });
    }
    console.log("1");

    User.findOne(
      {
        $or: [{ email: email }, { username: username }]
      },
      function(err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          console.log("Email or username is taken.");
          return res.status(400).json({
            success: false,
            message: "Email or username is taken."
          });
        }

        user = await new User({
          email: email,
          username: username,
          password: password,
          verified: false
        }).save();

        return res.status(200).json({
          success: true
        });
      }
    );
  });

  app.get("/auth/local/verify/:verifyID", (req, res) => {
    res.send("Thanks for verify!");
  });
};
