module.exports = {
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/,
  emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  usernameRegex: /^[a-zA-Z0-9]{4,16}$/,
  minecraftUsernameRegex: /^\w{3,16}$/
};
