const mongoose = require('mongoose');

async function connectDB(url) {
    try {
        await mongoose.set('strictQuery', true);
        await mongoose.connect(url);
        console.log('Connected to DB');
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { connectDB };
