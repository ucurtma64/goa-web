const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const crypto = require("crypto");
var Iyzipay = require("iyzipay");

var iyzipay = new Iyzipay({
  apiKey: keys.iyzipayPublishableKey,
  secretKey: keys.iyzipaySecretKey,
  uri: keys.callbackUrl + keys.iyzipayURI
});

module.exports = app => {
  app.post("/api/iyzipay", requireLogin, async (req, res) => {
    /*iyzipay.payment.create(request, function (err, result) {
            console.log(err, result);
            done();
        });*/

    req.user.userModel.credits += 5;
    const user = await req.user.userModel.save();

    res.send(user);
  });
};

const paymentCard = {
  cardHolderName: "John Doe",
  cardNumber: "5528790000000008",
  expireYear: "2030",
  expireMonth: "12",
  cvc: "123",
  registerCard: 0
};

const buyer = {
  id: "BY789",
  name: "John",
  surname: "Doe",
  identityNumber: "74300864791",
  email: "email@email.com",
  gsmNumber: "+905350000000",
  registrationAddress: "Burhaniye Mahallesi Atilla Sokak No:7 Üsküdar",
  city: "Istanbul",
  country: "Turkey",
  ip: "85.34.78.112"
};

function iyzipayStart3D(product, buyer, paymentCard) {
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
}
