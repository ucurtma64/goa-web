const keys = require("../../config/keys");

module.exports = userVerify => {
  return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Verify your account</h3>
                    <p>Guardians of Adelia, a minecraft MORPG server.</p>
                    <div>
                        <a href="${keys.redirectDomain}/auth/local/verify/${userVerify.id}">Click here to verify your account.</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};
