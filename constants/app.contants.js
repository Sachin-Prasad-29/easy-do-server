const PORT = process.env.PORT || 5001;

const DB = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';

const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    PORT,
    DB,
    JWT_SECRET
}
