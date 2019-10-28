const _ = require("lodash");
const { Path } = require("path-parser");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/profile", requireLogin, async (req, res) => {
    const userId = req.user.id;

    const {
      googleId,
      email,
      givenName,
      familyName,
      credits,
      identityNumber,
      registrationAddress,
      city,
      country,
      minecraftUsername
    } = req.body;

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
      givenName: givenName,
      familyName: familyName,
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
