const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();

const MongoDB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(MongoDB_URI);
        console.log(`Database Connected Successfully`);

    } catch (error) {
        console.error('DataBase Connection Failed!', error);
        process.exit(1);
    }
}

module.exports = connectDB;