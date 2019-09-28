var localtunnel = require("localtunnel");

localtunnel(5000, { subdomain: "lix-emaily-1234567890" }, function(
  err,
  tunnel
) {
  console.log("LocalTunnel running");
});
