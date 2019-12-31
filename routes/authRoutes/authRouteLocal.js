const passport = require("passport");
const mongoose = require("mongoose");
const SendgridSingle = require("../../services/mailers/SendgridSingle");
const registerTemplate = require("../../services/emailTemplates/registerTemplate");

const User = mongoose.model("users");
const UserVerify = mongoose.model("usersVerify");

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

  app.post("/auth/local/register", (req, res) => {
    const { email, username, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
      console.log("Passwords does not match");
      return res.status(400).json({
        success: false,
        message: "Passwords does not match."
      });
    }

    if (!passwordRegex.test(password)) {
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

    if (!emailRegex.test(email)) {
      console.log("Email is not valid");
      return res.status(400).json({
        success: false,
        message: "Email is not valid."
      });
    }

    User.findOne(
      {
        $or: [{ email: email }, { username: username }]
      },
      async function(err, user) {
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

        try {
          user = await new User({
            email: email,
            username: username,
            password: password,
            verified: false
          }).save();

          req.logIn(user, function(err) {
            if (err) {
              return next(err);
            }

            const mailer = new SendgridSingle(
              { subject: "Activate your GoA account", recipient: email },
              registerTemplate(user)
            );

            mailer.send();

            return res.status(200).json({
              success: true
            });
          });
        } catch (error) {
          return done(error);
        }
      }
    );
  });

  app.get("/auth/local/verify/:verifyID", (req, res) => {
    res.send("Thanks for verify!");
  });

  app.get("/auth/local/register/resend", (req, res) => {
    User.findOne(
      {
        $or: [{ email: email }, { username: username }]
      },
      async function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return res.status(400).json({
            success: false,
            message: "Invalid username or email address."
          });
        }

        if (user.verified) {
          return res.status(400).json({
            success: false,
            message: "User is already verified."
          });
        }

        const mailer = new SendgridSingle(
          { subject: "Activate your GoA account", recipient: email },
          registerTemplate(user)
        );

        try {
          await mailer.send();
        } catch (err) {
          res.status(422).send(err);
        }

        return res.status(200).json({
          success: true
        });
      }
    );
  });
};
