const passport = require("passport");

module.exports = app => {
  app.post("/auth/local", function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      if (err) {
        console.log("1");
        return next(err);
      }
      if (!user) {
        console.log("2");
        return res.redirect("/login");
      }
      req.logIn(user, function(err) {
        if (err) {
          console.log("3");
          return next(err);
        }
        console.log("4");
        return res.redirect("/users/" + user.username);
      });
    })(req, res, next);
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: "select_account"
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
