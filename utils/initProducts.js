const mongoose = require("mongoose");

const Product = mongoose.model("products");

module.exports = () => {
  var arr = [
    { name: "Hero Rank", productId: 1, credits: 200 },
    { name: "Legend Rank", productId: 2, credits: 400 },
    { name: "Titan Rank", productId: 3, credits: 600 },
    { name: "Weapon/Shield Skin Scroll x1", productId: 4, credits: 50 },
    { name: "Weapon/Shield Skin Scroll x2", productId: 5, credits: 100 },
    { name: "Weapon/Shield Skin Scroll x5", productId: 6, credits: 200 },
    { name: "Angel Wings(Helmet Skin)", productId: 7, credits: 100 },
    { name: "Demon Wings(Helmet Skin)", productId: 8, credits: 100 },
    { name: "Dark Dragon Wings(Helmet Skin)", productId: 9, credits: 100 },
    { name: "White Dragon Wings(Helmet Skin)", productId: 10, credits: 100 },
    { name: "Golden Crown(Helmet Skin)", productId: 11, credits: 50 },
    { name: "Bee(Pet Skin)", productId: 12, credits: 100 },
    { name: "Red Fox(Pet Skin)", productId: 13, credits: 100 },
    { name: "Snow Fox(Pet Skin)", productId: 14, credits: 100 },
    { name: "Ice Cream(Pet Skin)", productId: 15, credits: 100 },
    { name: "Vex(Pet Skin)", productId: 16, credits: 100 },
    { name: "Baby Dragon(Pet Skin)", productId: 17, credits: 100 },
    { name: "Skin Chest x1", productId: 18, credits: 50 },
    { name: "Skin Chest x2", productId: 19, credits: 100 },
    { name: "Skin Chest x5", productId: 20, credits: 200 },
    { name: "Experience Boost x1", productId: 21, credits: 50 },
    { name: "Experience Boost x2", productId: 22, credits: 100 },
    { name: "Experience Boost x5", productId: 23, credits: 200 },
    { name: "Loot Boost x1", productId: 24, credits: 100 },
    { name: "Loot Boost x2", productId: 25, credits: 200 },
    { name: "Loot Boost x5", productId: 26, credits: 400 },
    { name: "Enchant Boost x1", productId: 27, credits: 50 },
    { name: "Enchant Boost x2", productId: 28, credits: 100 },
    { name: "Enchant Boost x5", productId: 29, credits: 200 },
    { name: "Gather Boost x1", productId: 30, credits: 50 },
    { name: "Gather Boost x2", productId: 31, credits: 100 },
    { name: "Gather Boost x5", productId: 32, credits: 200 }
  ];

  Product.insertMany(arr, function(error, docs) {
    if (error) console.log(error);
    else console.log(docs);
  });
};
