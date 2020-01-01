const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["read:user", "user:email"],
      prompt: "select_account"
    })
  );

  app.get(
    "/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
      res.redirect("/");
    }
  );
};
