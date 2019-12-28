const sendgrid = require("@sendgrid/mail");
const keys = require("../../config/keys");

class SendgridSingle {
  constructor({ subject, recipient }, content) {
    sendgrid.setApiKey(keys.sendgridKey);

    this.msg = {
      to: recipient,
      from: "no-reply@guardiansofadelia.com",
      subject: subject,
      text: "Hello plain world!",
      html: content,
      trackingSettings: {
        clickTracking: {
          enable: true
        },
        openTracking: {
          enable: false
        },
        subscriptionTracking: {
          enable: false
        }
      }
    };
  }

  async send() {
    const response = await sendgrid.send(this.msg);

    return response;
  }
}

module.exports = SendgridSingle;
