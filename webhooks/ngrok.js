const devKeys = require("../config/dev");

const ngrok = require("ngrok");

(async function() {
  const url = await ngrok.connect(5000);

  devKeys.redirectDomain = url;
  console.log("ngrok url: " + url);
})();
