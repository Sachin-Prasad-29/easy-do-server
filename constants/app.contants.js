const PORT = process.env.PORT || 5001;

const DB = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';

module.exports = {
    PORT,
    DB,
};
