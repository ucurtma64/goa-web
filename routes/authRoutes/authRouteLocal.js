const passport = require("passport");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.model("users");

const {
  passwordRegex,
  emailRegex,
  usernameRegex
} = require("../../services/regex");

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

  app.post("/auth/local/register", async (req, res) => {
    const { email, username, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
      return res.status(400).json({
        success: false,
        message: "Passwords does not match."
      });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        success: false,
        message: "Password is not valid."
      });
    }

    if (!usernameRegex.test(username)) {
      return res.status(400).json({
        success: false,
        message: "Username is not valid."
      });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Email is not valid."
      });
    }

    var user;

    try {
      user = await User.findOne({
        $or: [{ email: email }, { username: username }]
      });
    } catch (error) {
      return done(error);
    }

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email or username is taken."
      });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      user = await new User({
        email: email,
        username: username,
        password: hashedPassword,
        verified: false
      }).save();

      req.logIn(user, async function(err) {
        if (err) {
          return next(err);
        }

        return res.status(200).json({
          success: true
        });
      });
    } catch (error) {
      return done(error);
    }
  });
};
