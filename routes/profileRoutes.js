const _ = require("lodash");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const User = mongoose.model("users");

const {
  passwordRegex,
  emailRegex,
  usernameRegex,
  minecraftUsernameRegex
} = require("../services/regex");

module.exports = app => {
  app.post("/api/profile", requireLogin, async (req, res) => {
    const userId = req.user.id;

    const {
      googleId,
      email,
      username,
      password,
      credits,
      identityNumber,
      registrationAddress,
      city,
      country,
      minecraftUsername
    } = req.body;

    if (
      !(
        emailRegex.test(email) &&
        usernameRegex.test(username) &&
        passwordRegex.test(password) &&
        minecraftUsernameRegex.test(minecraftUsername)
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid request."
      });
    }

    const billing = {
      identityNumber: identityNumber,
      registrationAddress: registrationAddress,
      city: city,
      country: country
    };

    clean(billing);

    var profife = {
      googleId: googleId,
      email: email,
      username: username,
      password: password,
      credits: credits,
      billing: billing,
      minecraftUsername: minecraftUsername
    };

    clean(profife);

    const mongoRes = await User.findByIdAndUpdate(userId, profife, {
      useFindAndModify: false,
      new: true
    });

    res.send(mongoRes);
  });
};

function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    } else if (
      typeof obj[propName] === "object" &&
      Object.keys(obj[propName]).length === 0
    ) {
      delete obj[propName];
    }
  }
}
