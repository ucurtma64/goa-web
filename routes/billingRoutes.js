const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const crypto = require("crypto");
var Iyzipay = require("iyzipay");

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
    console.log(`iyzipayRequest`);

    iyzipay.payment.create(iyzipayRequest, function(err, result) {
      console.log(err, result);
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};

const iyzipayStart3D = (product, buyer, paymentCard) => {
  paymentCard.registerCard = 0;

  const orderId = crypto.randomBytes(48, function(err, buffer) {
    return buffer.toString("hex");
  });

  return {
    locale: "TR",
    conversationId: orderId,
    price: product.price,
    paidPrice: product.price,
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
        price: product.price,
        name: product.label,
        category1: product.category,
        itemType: "VIRTUAL"
      }
    ]
  };
};
