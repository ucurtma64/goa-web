const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/twitter",
    passport.authenticate("twitter", {
      scope: ["user"],
      prompt: "select_account"
    })
  );

  app.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter"),
    (req, res) => {
      res.redirect("/");
    }
  );
};
