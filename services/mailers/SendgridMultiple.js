const sendgrid = require("@sendgrid/mail");
const keys = require("../config/keys");

class SendgridMultiple {
  constructor({ subject, recipients }, content) {
    sendgrid.setApiKey(keys.sendgridKey);

    const emails = recipients.map(({ email }) => email);

    this.msg = {
      to: emails,
      from: "goa@guardiansofadelia.com",
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

  async sendMultiple() {
    const response = await sendgrid.sendMultiple(this.msg);

    return response;
  }
}

module.exports = SendgridMultiple;
