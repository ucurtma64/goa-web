const keys = require("../config/keys");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Iyzipay = require("iyzipay");
const uuidv4 = require("uuid/v4");
const atob = require("atob");

const Order = mongoose.model("orders");

var iyzipay = new Iyzipay({
  apiKey: keys.iyzipayPublishableKey,
  secretKey: keys.iyzipaySecretKey,
  uri: "https://sandbox-api.iyzipay.com"
});

module.exports = app => {
  app.post("/api/iyzipay", requireLogin, async (req, res) => {
    const iyzipayRequest = iyzipayStart3D(
      req.body.product,
      req.body.buyer,
      req.body.paymentCard
    );

    iyzipay.threedsInitialize.create(iyzipayRequest, function(err, result) {
      const htmlPage = atob(result.threeDSHtmlContent);
      res.send(htmlPage);
    });
  });

  app.post("/api/iyzipay/callback", async (req, res) => {
    const body = req.body;

    if (body.status != "success") {
      res.send("status is: " + body.status);
      return;
    }

    if (body.mdStatus != 1) {
      res.send("mdStatus is: " + body.mdStatus);
      return;
    }

    if (!(body.paymentId && body.conversationId)) {
      res.send("invalid body");
      return;
    }

    const iyzipayRequest = {
      locale: "tr",
      conversationId: body.conversationId,
      paymentId: body.paymentId,
      conversationData: body.conversationData
    };

    await iyzipay.threedsPayment.create(iyzipayRequest, function(err, result) {
      if (result.status != "success") {
        res.send("status is: " + result.status);
        return;
      }

      if (result.conversationId != body.conversationId) {
        res.send("conversationId does not match");
        return;
      }

      if (result.paymentId && result.itemTransactions) {
        const items = result.itemTransactions.map(
          item =>
            new Object({
              itemId: item.itemId,
              paymentTransactionId: item.paymentTransactionId
            })
        );

        if (items && items.length) {
          //successful payment
          res.send("successful payment");
          return;
        }

        res.send("invalid items");
        return;
      }

      res.send("invalid body1");
      return;
    });
  });
};

const iyzipayStart3D = (product, buyer, paymentCard) => {
  paymentCard.registerCard = 0;

  const orderId = uuidv4();

  const price = String(product.price);

  return {
    locale: "TR",
    conversationId: orderId,
    price: price,
    paidPrice: price,
    currency: "TRY",
    installment: 1,
    paymentChannel: "WEB",
    basketId: orderId,
    paymentGroup: "OTHER",
    callbackUrl: keys.redirectDomain + "/api/iyzipay/callback",
    paymentCard: paymentCard,
    buyer: buyer,
    billingAddress: {
      address: "Ornek Mahallesi Semarkant Sokak No:28/A Atasehir",
      contactName: "Utku Akyıldız",
      city: "Istanbul",
      country: "Turkey"
    },
    basketItems: [
      {
        id: product.id,
        price: price,
        name: product.label,
        category1: product.category,
        itemType: "VIRTUAL"
      }
    ]
  };
};
