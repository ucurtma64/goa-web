const keys = require("../config/keys");
const { Path } = require("path-parser");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Iyzipay = require("iyzipay");
const uuidv4 = require("uuid/v4");
const atob = require("atob");

const Order = mongoose.model("orders");
const User = mongoose.model("users");

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
      if (!result.threeDSHtmlContent) {
        res.send(result.errorMessage);
        return;
      }

      const htmlPage = atob(result.threeDSHtmlContent);
      res.send(htmlPage);
    });
  });

  app.post("/api/iyzipay/callback/:userId", async (req, res) => {
    const body = req.body;

    const p = new Path("/api/iyzipay/callback/:userId");
    const match = p.test(req.path);
    if (!match) {
      res.send(
        '<html><body><p>Redirecting...</p><script>window.top.location.href="/store/callback/error-9"</script></body></html>'
      );
      return;
    }
    const userId = match.userId;

    if (body.status != "success") {
      res.send(
        '<html><body><p>Redirecting...</p><script>window.top.location.href="/store/callback/error-' +
          body.mdStatus +
          '"</script></body></html>'
      );
      return;
    }

    if (!(body.paymentId && body.conversationId)) {
      res.send(
        '<html><body><p>Redirecting...</p><script>window.top.location.href="/store/callback/error-10"</script></body></html>'
      );
      return;
    }

    const iyzipayRequest = {
      locale: "tr",
      conversationId: body.conversationId,
      paymentId: body.paymentId,
      conversationData: body.conversationData
    };

    await iyzipay.threedsPayment.create(iyzipayRequest, async function(
      err,
      result
    ) {
      if (result.conversationId != body.conversationId) {
        res.send(
          '<html><body><p>Redirecting...</p><script>window.top.location.href="/store/callback/error-11"</script></body></html>'
        );
        return;
      }

      if (!(result.paymentId && result.itemTransactions && result.status)) {
        res.send(
          '<html><body><p>Redirecting...</p><script>window.top.location.href="/store/callback/error-12"</script></body></html>'
        );
        return;
      }

      const items = result.itemTransactions.map(
        item =>
          new Object({
            itemId: item.itemId,
            paymentTransactionId: item.paymentTransactionId
          })
      );

      if (!(items && items.length)) {
        res.send(
          '<html><body><p>Redirecting...</p><script>window.top.location.href="/payment/callback/error-13"</script></body></html>'
        );
        return;
      }

      const itemsString = JSON.stringify(items);

      const order = new Order({
        conversationId: result.conversationId,
        paymentId: result.paymentId,
        items: itemsString,
        status: result.status,
        _user: userId,
        dateSent: Date.now()
      });

      if (result.status != "success") {
        res.send(
          '<html><body><p>Redirecting...</p><script>window.top.location.href="/store/callback/error-14"</script></body></html>'
        );
      } else {
        //successful payment
        //redirect parent page from iframe example: res.send('<html><body><p>Redirecting...</p><script>window.top.location.href="/"</script></body></html>');

        await onSuccessfulPayment(userId, items);

        res.send(
          '<html><body><p>Redirecting...</p><script>window.top.location.href="/store/callback/success"</script></body></html>'
        );
      }

      //call database call after res.send so user does not wait
      await order.save();
    });
  });
};

const products = [
  {
    id: "1",
    price: 5.0
  },
  {
    id: "2",
    price: 10.0
  },
  {
    id: "3",
    price: 20.0
  }
];

const onSuccessfulPayment = async (userId, items) => {
  const prices = items.map(
    item =>
      products.find(product => {
        return product.id == item.itemId;
      }).price
  );

  const totalCost = prices.reduce((a, b) => a + b, 0);

  await User.findByIdAndUpdate(
    userId,
    { $inc: { credits: totalCost } },
    { useFindAndModify: false }
  );
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
    callbackUrl: keys.redirectDomain + "/api/iyzipay/callback/" + buyer.id,
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
