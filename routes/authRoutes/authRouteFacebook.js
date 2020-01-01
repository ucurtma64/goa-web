const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["email"],
      prompt: "select_account"
    })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect("/");
    }
  );
};
