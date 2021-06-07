require('dotenv').config();

const config = {
    port: process.env.PORT,
    db: process.env.MONGO_DB,
    dbUser: process.env.MONGO_USER,
    dbPassword: process.env.MONGO_PASSWORD,
    sendGridApiKey: process.env.SENDGRID_API_KEY,
    sendGridVerifiedSender: process.env.SENDGRID_VERIFIED_SENDER,
}

module.exports = config;