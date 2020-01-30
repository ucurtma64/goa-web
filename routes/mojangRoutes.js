const axios = require("axios");
const atob = require("atob");

module.exports = app => {
  app.get("/api/mojang/users/profiles/minecraft", async (req, res) => {
    const username = req.query.username;

    if (username) {
      const mojangRes = await axios.get(
        "https://api.mojang.com/users/profiles/minecraft/" + username
      );

      res.send(mojangRes.data);
      return;
    }

    res.send({});
  });

  app.get("/api/mojang/session/minecraft/profile", async (req, res) => {
    const uuid = req.query.uuid;

    if (uuid) {
      const mojangRes = await axios.get(
        "https://sessionserver.mojang.com/session/minecraft/profile/" + uuid
      );

      if (mojangRes.data.properties[0].value) {
        const skin = atob(mojangRes.data.properties[0].value);

        res.send(skin);
        return;
      }
    }

    res.send({});
  });
};
