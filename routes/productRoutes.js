const mongoose = require("mongoose");

const Product = mongoose.model("products");

module.exports = app => {
  app.post("/api/products", async (req, res) => {
    const { minecraftUsername, selectedProduct } = req.body;

    startSocket(minecraftUsername, selectedProduct);
  });
};

const startSocket = (minecraftUsername, selectedProduct) => {
  var net = require("net");

  var client = net.connect(1010, "localhost");

  const object = Object.assign(minecraftUsername, selectedProduct);

  client.write("hello serverr");

  client.emit("hello serverr", object);

  client.on("data", function(data) {
    console.log("Received: " + data);
    client.destroy(); // kill client after server's response
  });

  client.on("close", function() {
    console.log("Connection closed");
  });

  client.end();
};
