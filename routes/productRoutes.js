const mongoose = require("mongoose");

const Product = mongoose.model("products");

module.exports = app => {
  app.post("/api/products", async (req, res) => {
    const { minecraftUsername, productSelection } = req.body;

    sendMessageToMinecraft(minecraftUsername, productSelection);
  });
};

const sendMessageToMinecraft = (minecraftUsername, productSelection) => {
  var net = require("net");

  var client = net.connect(25120, "94.55.189.101");

  const object = {
    minecraftUsername: minecraftUsername,
    productId: productSelection.productId,
    credits: productSelection.credits
  };

  client.write(JSON.stringify(object));

  client.on("data", function(data) {
    console.log("Received: " + data);
    client.destroy(); // kill client after server's response
  });

  client.on("error", function(data) {
    console.log("error: " + data);
    client.destroy(); // kill client after error
  });

  client.on("close", function() {
    console.log("Connection closed");
  });

  client.end();
};
