const mongoose = require("mongoose");
const net = require("net");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Product = mongoose.model("products");

module.exports = app => {
  app.post("/api/products", requireLogin, requireCredits, async (req, res) => {
    const { minecraftUsername, productSelection } = req.body;

    const resultProduct = await Product.findOne({
      productId: productSelection.productId
    });

    if (!resultProduct) {
      res.status(422).send(err);
      return;
    }

    if (req.user.credits < resultProduct.credits) {
      return res.status(403).send({ error: "Not enough credits!" });
    }

    try {
      const mcResponse = JSON.parse(
        await sendMessageToMinecraft(minecraftUsername, productSelection)
      );

      if (mcResponse.success) {
        req.user.credits -= resultProduct.credits;
        const user = await req.user.save();

        const response = Object.assign({ user }, mcResponse);

        res.send(response);
      } else if (mcResponse.error) {
        res.status(422).send(mcResponse.error);
      } else {
        res.status(422).send({ error: "unknown error" });
      }
    } catch (err) {
      if (err.errno === "ETIMEDOUT")
        res.status(422).send("Game-server is down");
    }
  });
};

const sendMessageToMinecraft = (minecraftUsername, productSelection) => {
  return new Promise(function(resolve, reject) {
    const client = net.connect(25120, "94.55.189.101");

    const object = {
      minecraftUsername: minecraftUsername,
      productId: productSelection.productId,
      credits: productSelection.credits
    };

    client.write(JSON.stringify(object));

    client.on("data", function(data) {
      client.destroy(); // kill client after server's response
      resolve(data);
    });

    client.on("error", function(data) {
      client.destroy(); // kill client after server's response
      reject(data);
    });

    client.on("close", function() {
      console.log("Connection closed");
    });

    client.end();
  });
};
