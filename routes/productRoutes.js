const mongoose = require("mongoose");
const net = require("net");

const Product = mongoose.model("products");

module.exports = app => {
  app.post("/api/products", async (req, res) => {
    const { minecraftUsername, productSelection } = req.body;

    sendMessageToMinecraft(minecraftUsername, productSelection);
  });
};

const sendMessageToMinecraft = (minecraftUsername, productSelection) => {
  const client = net.connect(25120, "94.55.189.101");

  const object = {
    minecraftUsername: minecraftUsername,
    productId: productSelection.productId,
    credits: productSelection.credits
  };

  client.write(JSON.stringify(object));

  client.on("data", function(data) {
    console.log("Received: " + data);
  });

  client.on("error", function(data) {
    console.log("error: " + data);
  });

  client.on("close", function() {
    console.log("Connection closed");
  });

  client.end();
};
