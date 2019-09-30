const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const Iyzipay = require("iyzipay");
const uuidv4 = require("uuid/v4");
const atob = require("atob");

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
      console.log(result);
      const htmlPage = atob(result.threeDSHtmlContent);
      res.send(htmlPage);
    });
  });

  app.post("/api/iyzipay/callback", (req, res) => {
    console.log(req.body);

    res.send("post");
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
