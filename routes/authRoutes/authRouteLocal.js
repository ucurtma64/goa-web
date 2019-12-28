const passport = require("passport");

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
    res.send("Thanks for register!");
  });

  app.get("/auth/local/verify/:userId", (req, res) => {
    res.send("Thanks for verify!");
  });
};
