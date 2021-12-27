require('dotenv').config();

const config = {
    development: process.env.ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: `${process.env.CORS}`,
}
const db = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME

}

module.exports = {config, db};